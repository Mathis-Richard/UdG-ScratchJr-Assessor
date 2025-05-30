<div class="dataDiv">
    <h2>Project <?php if($mode===2) echo ($index+1)?> Metadata</h2>
    <div class="metaImageDiv">
        <div class="metadataDiv">
            <div class="metadataNameDiv"><p><u>Project name:</u><i><?= " \"" . htmlspecialchars($json[$index]["content"]["name"]) ?>"</i></p></div>
            <div class="metadataCreationDiv"><p><u>Creation date:</u><?= " " . htmlspecialchars($json[$index]["content"]["ctime"]) ?></p></div>
            <div class="metadataPageDiv">
                <div class="metadataPageNumberDiv"><p><u>Number of pages:</u><?= " " . htmlspecialchars($json[$index]["content"]["thumbnail"]["pagecount"]) ?></p></div>
                <div class="metadataPageNumberDiv"><p><u>Number of characters:</u><?= " " . htmlspecialchars($json[$index]["extra"]["characterCount"]) ?></p></div>
            </div>
        </div>
        <div class="imageDiv">
            <img class="projectThumbnail"
                 src="<?= 'data: ' . htmlspecialchars($json[$index]["extra"]["thumbnailFormat"]) . ';base64,' . htmlspecialchars($json[$index]["extra"]["thumbnailEncoded"]); ?>"/>
        </div>
    </div>
    <div class="pageImagesDiv"></div>
</div>

<div class="rubricDiv">
    <h2>Project <?php if($mode===2) echo ($index+1)?> Scoring</h2>
    <?php require ROOT . "/views/layout/rubric.php"; ?>
</div>