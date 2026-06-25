

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DuHu dashboard</title>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js" defer></script>
    <script type="text/javascript" src="scriptcodes/elektriciteit.js"></script>
    <script type="text/javascript" src="scriptcodes/gas.js"></script>
    <script type="text/javascript" src="scriptcodes/water.js"></script>
    <script type="text/javascript" src="scriptcodes/zonnepanelen.js" defer></script>
    <link rel="stylesheet" href="style sheets/index.css">
    <link rel="stylesheet" href="style sheets/style-header.css">
</head>

<body>
    <?php include_once 'header.php'; ?>
    <main class="container">
        <section class="spanne-item"><h3>tijdspanne </h3></section>

        <?php include_once 'date-time.php'; ?>

        <section class="light-item"><h3>buttons light </h3></section>

        <?php include_once 'gas.php'; ?>

        <?php include_once 'water.php'; ?>

        <?php include_once 'weer.php'; ?>

        <?php include_once 'elektriciteit.php'; ?>
        
        <section class="zon-item">
            <div class="chart-card">
                <canvas id="zonnepanelenChart"></canvas>
            </div>
        </section>
        <section class="temp-item"><h3>temperatuur </h3></section>
                    <div class="chart-card-temp">
                <canvas id="temperatuurChart"></canvas>
            </div>
    </main>
    <?php include_once 'footer.php'; ?>
</body>

</html>