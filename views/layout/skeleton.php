<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>TallerScratchJr - Your ScratchJr Workshop</title>
    <link rel="stylesheet" href="/assets/styles/palette_special.css">
    <link rel="stylesheet" href="/assets/styles/layout.css">
    <link rel="stylesheet" href="/assets/styles/input.css">
    <link rel="stylesheet" href="/assets/styles/rubric.css">
    <?php if(isset($style)) echo '<link rel="stylesheet" href="/assets/styles/'.$style.'.css">'; ?>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
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