<?php

class SVGController
{

    static $view = "svg";
    static $style = "svg";

    static $path = ROOT . "/assets/temp/svg/";
    static $template = ROOT . "/assets/ProjectTemplate.zip";

    public function main()
    {
        $style = self::$style;
        $view = self::$view;

        $this->generateProject();

        //require_once ROOT . "/views/layout/skeleton.php";
    }

    private function generateProject()
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

            // Set headers to force download
            header('Content-Type: application/zip');
            header('Content-Disposition: attachment; filename="' . basename($spriteName.".sjr") . '"');
            header('Content-Length: ' . filesize($extractPath));
            readfile($extractPath);
            unlink($extractPath); // Delete the file after download
            exit;
        }
    }


    private
    static function rrmdir($dir)
    {
        if (is_dir($dir)) {
            $objects = scandir($dir);
            foreach ($objects as $object) {
                if ($object != "." && $object != "..") {
                    if (filetype($dir . "/" . $object) == "dir") self::rrmdir($dir . "/" . $object); else unlink($dir . "/" . $object);
                }
            }
            rmdir($dir);
        }
    }
}

