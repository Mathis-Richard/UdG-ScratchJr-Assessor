<?php

class HomeController {

    static $view = "home";

    public function main()
    {
        $view = self::$view;
        unset($_SESSION["content"]);
        require_once ROOT . "/views/layout/skeleton.php";
    }

}