<?php
define('ROOT', $_SERVER['DOCUMENT_ROOT']);
const BLOCKS =
[
    "yellow_start" => ['onflag', 'onclick', 'ontouch', 'onmessage', 'message'],
    "blue_motion" => ['forward', 'back', 'up', 'down', 'right', 'left', 'hop', 'home'],
    "purple_looks" => ['say', 'space', 'grow', 'shrink', 'same', 'space', 'hide', 'show'],
    "green_sound" => ['playusersnd'],
    "orange_control" => ['wait', 'stopmine', 'setspeed', 'repeat'],
    "red_end" => ['endstack', 'forever', 'gotopage']
];


require_once ROOT . "/controllers/HomeController.php";
require_once ROOT . "/controllers/AnalysisController.php";
require_once ROOT . "/controllers/SVGController.php";

$home_controller = new HomeController();
$analysis_controller = new AnalysisController();
$svg_controller = new SVGController();

$action = $_SERVER['REQUEST_URI'];
$path = array_slice(explode("/", $action), 1);
if ($path[sizeof($path) - 1] === '') unset($path[sizeof($path) - 1]);

if (sizeof($path) !== 0 && (isset($path[0]) && $path[0][0] !== "?")) {
    if (isset(${$path[0] . '_controller'})) {
        if (isset($path[1]) && $path[1] !== '') {
            $parameters = array_slice($path, 1);
            ${$path[0] . '_controller'}->rerouting(...$parameters);
        } else ${$path[0] . '_controller'}->main();
    } else $error_controller->notfound();
} else {
    $home_controller->main();
}