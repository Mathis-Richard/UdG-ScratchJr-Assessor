<?php

class SVGController
{

    static $view = "svg";
    static $style = "svg";

    static $path = ROOT . "/assets/temp/svg/";
    static $template = ROOT . "/assets/temp/ProjectTemplate.zip";

    public function main()
    {
        $style = self::$style;
        $view = self::$view;

        $this->generateProject();

        //require_once ROOT . "/views/layout/skeleton.php";
    }

    private
    function generateProject()
    {
        $zip = new ZipArchive;
        $file = $_FILES['svgFile'];
        $spriteName = explode(".", $_FILES['svgFile']['name'])[0];

        if (isset($file)) {
            $destinationFile = explode(".", $file["tmp_name"])[0] . "-" . $file["name"];
            $destinationPath = self::$path . basename($destinationFile);

            if (move_uploaded_file($file["tmp_name"], $destinationPath)) {
                $extractPath = explode(".", $destinationPath)[0] . ".zip";
                if (copy(self::$template, $extractPath)) {
                    if ($zip->open($extractPath)) {
                        $zip->addFile($destinationPath, "project/characters/" . $file["name"]);
                        $json = $zip->getFromName("project/data.json");
                        $jsonChanged = str_replace("{{PLACEHOLDER}}", $spriteName, $json);
                        $zip->deleteName("project/data.json");
                        $zip->addFromString("project/data.json", $jsonChanged);
                        $zip->close();
                    }
                }
            }
            unlink($destinationPath);

        } else {
            var_dump("Raté!");
        }
    }
}

