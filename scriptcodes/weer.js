const API_URL = '/weer.php?city=amsterdam';

export const WEATHER_CODES = {
  0: 'Clear Sky', 1: 'Mainly Clear', 2: 'Partly Cloudy', 3: 'Overcast',
  45: 'Fog', 48: 'Depositing Rime Fog',
  51: 'Light Drizzle', 53: 'Moderate Drizzle', 55: 'Dense Drizzle',
  61: 'Slight Rain', 63: 'Moderate Rain', 65: 'Heavy Rain',
  71: 'Slight Snowfall', 73: 'Moderate Snowfall', 75: 'Heavy Snowfall',
  80: 'Slight Rain Showers', 81: 'Moderate Rain Showers', 82: 'Violent Rain Showers',
  95: 'Thunderstorm', 96: 'Thunderstorm with Hail', 99: 'Thunderstorm with Heavy Hail'
};

export async function fetchAmsterdamWeather() {
  const response = await fetch(API_URL, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status}`);
  }

  return await response.json();
}

function formatForecastDate(dateString) {
  return new Date(dateString).toLocaleDateString('nl-NL', {
    weekday: 'short', day: 'numeric', month: 'short'
  });
}

function createForecastHtml(forecast) {
  return forecast.map(day => `
    <div class="weather-forecast-day">
      <strong>${formatForecastDate(day.date)}</strong>
      <div>${WEATHER_CODES[day.weatherCode] || 'Unknown'}</div>
      <div>${Math.round(day.minTemperatureCelsius)}° / ${Math.round(day.maxTemperatureCelsius)}°</div>
    </div>
  `).join('');
}

export async function initAmsterdamWeather() {
  const locationEl = document.getElementById('weather-location');
  const currentEl = document.getElementById('weather-now');
  const summaryEl = document.getElementById('weather-summary');
  const detailsEl = document.getElementById('weather-details');
  const forecastEl = document.getElementById('weather-forecast');

  try {
    const weather = await fetchAmsterdamWeather();
    const current = weather.current;

    if (locationEl) {
      locationEl.textContent = weather.locationName || 'Amsterdam';
    }

    if (currentEl) {
      currentEl.textContent = `${current.temperatureCelsius}°C — ${WEATHER_CODES[current.weatherCode] || 'Unknown'}`;
    }

    if (summaryEl) {
      summaryEl.textContent = `Wind ${current.windSpeedKmH ?? '–'} km/h · Humidity ${current.humidityPercent ?? '–'}%`;
    }

    if (detailsEl) {
      detailsEl.textContent = `Updated: ${new Date(current.time).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`;
    }

    if (forecastEl) {
      forecastEl.innerHTML = createForecastHtml(weather.forecast.slice(0, 5));
    }
  } catch (error) {
    console.error('Weather render failed:', error);
    if (currentEl) currentEl.textContent = 'Unable to load weather data.';
    if (summaryEl) summaryEl.textContent = 'Check your server or network.';
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initAmsterdamWeather);
}
