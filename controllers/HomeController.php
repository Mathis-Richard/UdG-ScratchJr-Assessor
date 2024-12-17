<?php

class HomeController {

    static $view = "home";

    public function main()
    {
        $view = self::$view;
        require_once ROOT . "/views/layout/skeleton.php";
    }

}