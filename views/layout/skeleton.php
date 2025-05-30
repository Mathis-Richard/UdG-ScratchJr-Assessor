<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>TallerScratchJr - Your ScratchJr Workshop</title>
    <link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/styles/palette_special.css">
    <link rel="stylesheet" href="/assets/styles/palette_score.css">
    <link rel="stylesheet" href="/assets/styles/layout.css">
    <link rel="stylesheet" href="/assets/styles/input.css">
    <link rel="stylesheet" href="/assets/styles/rubric.css">
    <link rel="stylesheet" href="/assets/styles/popup.css">
    <?php if(isset($style)) echo '<link rel="stylesheet" href="/assets/styles/'.$style.'.css">'; ?>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/assets/scripts/analysis_both.js"></script>
    <?php if(isset($view)) echo '<script src="/assets/scripts/'.$view.'.js"></script>'; ?>
    <?php
    if(isset($added_scripts)) {
        foreach ($added_scripts as $script) {
            echo '<script src="/assets/scripts/'.$script.'.js</script>';
        }
    }
    ?>
</head>
<body>
<?php
require_once ROOT . "/views/layout/header.php";
require_once ROOT . "/views/" . $view . ".php";
require_once ROOT . "/views/layout/footer.php";
?>
</body>
</html>