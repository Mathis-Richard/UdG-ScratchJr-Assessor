<?php

class AnalysisController
{

    static $view = "analysis";
    static $style = "analysis";

    static $path = ROOT . "/assets/temp/";

    public function main()
    {
        $json = null;
        $style = self::$style;
        if (isset($_FILES)) {
            if (!is_dir(self::$path)) {
                mkdir(self::$path, 0777, true);
            }
            switch (sizeof($_FILES)) {
                case 1:
                    $view = self::$view . "_solo";
                    $json = $this->checkSolo();
                    break;
                case 2:
                    $view = self::$view . "_duo";
                    $json = $this->checkDuo();
                    break;
                default:
                    return;
            }
        }
        require_once ROOT . "/views/layout/skeleton.php";
    }

    private
    function checkSolo()
    {
        $zip = new ZipArchive;
        $file = $_FILES['soloFile'];
        $json = null;

        if (isset($file)) {
            $destinationFile = explode(".", $file["tmp_name"])[0] . "-" . $file["name"];
            $destinationPath = self::$path . basename($destinationFile);

            if (move_uploaded_file($file["tmp_name"], $destinationPath)) {
                $extractPath = explode(".", $destinationPath)[0];
                if ($zip->open($destinationPath) === TRUE) {
                    if (!is_dir($extractPath)) {
                        mkdir($extractPath, 0777, true);
                    }
                    $zip->extractTo($extractPath);
                    $zip->close();

                    $json["content"] = json_decode(file_get_contents($extractPath . "/project/data.json"), true);
                    self::calculateRubricScore($json["content"]);
                }
                unlink($destinationPath);

                $json["extra"]["thumbnail_format"] = mime_content_type($extractPath . "/project/thumbnails/" . $json["content"]["thumbnail"]["md5"]);
                $json["extra"]["thumbnail_encoded"] = base64_encode(file_get_contents($extractPath . "/project/thumbnails/" . $json["content"]["thumbnail"]["md5"]));

                return $json;
            }
        }
    }

    private
    function checkDuo()
    {

    }

    private static function getAllBlocksOnPage($page)
    {
        $out = [];
        foreach ($page["sprites"] as $sprite) { //In each sprite
            foreach ($page[$sprite]["scripts"] as $script) {
                foreach ($script as $block) {
                    $out[] = $block;
                }
            }
        }
        return $out;
    }


    private
    static function calculateRubricScore($entry)
    {
        $out = [];
        self::calculateProgramSyntaxLengthAmount($entry);
        self::calculateVarietyOfBlocks($entry);
        self::calculateCoordination($entry);
    }

    private
    static function calculateProgramSyntaxLengthAmount($entry)
    {
        $score = 0;
        $programs = 0;
        $correctprograms = [];

        $json = $entry["json"];
        if (isset($json["pages"])) {
            foreach ($json["pages"] as $page) { //On each page
                $pageblocks = self::getAllBlocksOnPage($json[$page]);
                if (isset($json[$page]["sprites"])) {
                    foreach ($json[$page]["sprites"] as $sprite) { //In each sprite
                        if (isset($json[$page][$sprite]["scripts"])) {
                            foreach ($json[$page][$sprite]["scripts"] as $script) {
                                $correctscript = true;
                                if (sizeof($script) > 1 && in_array($script[0][0], array_slice(BLOCKS["yellow_start"], 0, 4))) {
                                    $programs = $programs + 1;
                                }
                                var_dump($script);
                                foreach ($script as $block) {
                                    if (!self::checkCorrectness($block, $json, $page, $sprite, $pageblocks)) $correctscript = false;
                                }
                                if ($correctscript) {
                                    $correctprograms[] = $script;
                                }
                                var_dump($correctscript);
                            }
                        } else {

                        }
                    }
                } else {

                }
            }
        } else {

        }
        var_dump($programs);
        var_dump($correctprograms);

    }

    private
    static function calculateVarietyOfBlocks($entry)
    {

    }

    private
    static function calculateCoordination($entry)
    {

    }

    /*
     * Checking for correctness, for some kinds of blocks, requires a view of the entire project
     */
    private
    static function checkCorrectness($block, $project, $page, $sprite, $blocksperpage)
    {
        if (in_array($block[0], array_merge(BLOCKS["green_sound"], BLOCKS["red_end"]))) {
            return true;
        } else if (in_array($block[0], BLOCKS["yellow_start"])) {
            if ($block[0] === "ontouch") {
                return sizeof($project[$page]["sprites"]) > 1;
            } else if ($block[0] === "onmessage") {
                $color = $block[1];
                $relevantblocks = array_filter($blocksperpage, function ($item) use ($color, $block) {
                    return $item !== $block && $item[0] === "message" && $item[1] === $color;
                });
                return sizeof($relevantblocks) > 0;
            } else if ($block[0] === "message") {
                $color = $block[1];
                $relevantblocks = array_filter($blocksperpage, function ($item) use ($color, $block) {
                    return $item !== $block && $item[0] === "onmessage" && $item[1] === $color;
                });
                return sizeof($relevantblocks) > 0;
            } else if ($block[0] === "onstart" && true) ;
        } else if (in_array($block[0], BLOCKS["blue_motion"])) {
            //if ($block[0] === "home") {
            //    return $block[2] === $block[3];
            //} else {
            //    $currentsprite = $project[$page][$sprite];
            //    return $currentsprite["homex"] !== $currentsprite["xcoor"] || $currentsprite["homey"] !== $currentsprite["ycoor"];
            //}
        } else if (in_array($block[0], BLOCKS["purple_looks"])) {

        } else if (in_array($block[0], BLOCKS["orange_control"])) {

        }

    }
}

