<div class="dataDiv">
    <div class="imageDiv">
        <img class="projectThumbnail" src="<?= 'data: '.$json[$index]["extra"]["thumbnailFormat"].';base64,'.$json[$index]["extra"]["thumbnailEncoded"];?>" />
    </div>
    <h2><u>Project name:</u><i><?=" \"".$json[$index]["content"]["name"]?>"</i></h2>
    <h4><u>Creation date:</u><?=" ".$json[$index]["content"]["ctime"]?></h4>
    <h4><u>Number of pages:</u><?=" ".$json[$index]["content"]["thumbnail"]["pagecount"]?></h4>
</div>
<div class="rubricDiv">
    <p><i>N.B: Not all categories can be estimated by algorithms, so you can override any mark you don't agree with.</i></p>
    <p>Progress is still being made with these algorithms, thanks for your patience!</p>
    <?php require ROOT . "/views/layout/rubric.php"; ?>
</div>