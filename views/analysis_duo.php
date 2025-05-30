<div class="preMainDiv">
    <div id="breadcrumb"><a href="/">Home</a> / Duo Project Overview</div>
    <h1><u>Duo Project Overview</u></h1>
</div>
<div class="mainDiv">
    <?php require ROOT . "/views/layout/rubric_instructions.php"?>
    <div class="twoProjectsDiv">
        <div class="projectOneDiv">
            <?php
            $mode = 2;
            $index = 0;
            require ROOT . "/views/full_project.php";
            ?>
        </div>
        <div class="separator"></div>
        <div class="projectTwoDiv">
            <?php
            $mode = 2;
            $index = 1;
            require ROOT . "/views/full_project.php";
            ?>
        </div>
    </div>
</div>