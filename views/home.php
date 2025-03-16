<div class="mainDiv">
    <div>
        <h1>Improve your ScratchJr experience.</h1>
    </div>

    <div>
        <h2><i>Analyze or grade your .sjr files</i></h2>
    </div>

    <div id="soloFormDiv" class="fileFormDiv">
        <form id="soloForm" class="sjrForm" action="analysis" method="post" enctype="multipart/form-data">
            <div>
                <div><h3>Review a single project's properties.</h3></div>
                <div><p><u>Upload one <b>.sjr</b> file</u> <i>(Max filesize 50 MB)</i></p></div>
            </div>
            <div class="inputDiv">
                <input type="file" name="soloFile" id="soloFile" accept=".sjr" />
                <input type="submit" id="submitSoloFile" value="Upload"/>
            </div>
            <div id="labelDivSoloFile" class="labelDiv">
                <div>
                    <label for="soloFile">Choose a file</label>
                    <div id="filenameDivSolo" class="filenameDiv">
                    </div>
                </div>
            </div>
        </form>
    </div>


    <div id="duoFormDiv" class="fileFormDiv">
        <form id="duoForm" class="sjrForm" action="analysis" method="post" enctype="multipart/form-data">
            <div>
                <div><h3>Compare two versions of the same project or two independent projects.</h3></div>
                <div><p><u>Upload two <b>.sjr</b> files</u> <i>(Max filesize 50 MB)</i></p></div>
            </div>
            <div class="inputDiv">
                <input type="file" name="duoFileOne" id="duoFileOne" accept=".sjr">
                <input type="file" name="duoFileTwo" id="duoFileTwo" accept=".sjr">
                <input type="submit" id="submitDuoFiles" value="Upload">
            </div>
            <div id="labelDivDuoOne" class="labelDiv">
                <div>
                    <label for="duoFileOne">Choose the first file</label>
                    <div id="filenameDivDuoOne" class="filenameDiv">

                    </div>
                </div>
            </div>
            <div id="labelDivDuoTwo" class="labelDiv">
                <div>
                    <label for="duoFileTwo">Choose the second file</label>
                    <div id="filenameDivDuoTwo" class="filenameDiv">

                    </div>
                </div>
            </div>
        </form>
    </div>

    <div>
        <h2><i>Make your own character the star of the show</i></h2>
    </div>

    <div id="svgFormDiv" class="fileFormDiv">
        <form id="svgForm" class="svgForm" action="svg" method="post" enctype="multipart/form-data">
            <div>
                <div><h3>Choose the vector you want to create a project for.</h3></div>
                <div><p><u>Upload one <b>.svg</b> file</u> <i>(Max filesize 50 MB)</i></p></div>
            </div>
            <div class="inputDiv">
                <input type="file" name="svgFile" id="svgFile" accept=".svg" />
                <input type="submit" id="submitSvgFile" value="Upload"/>
            </div>
            <div id="labelDivSvgFile" class="labelDiv">
                <div>
                    <label for="svgFile">Choose a file</label>
                    <div id="filenameDivSvg" class="filenameDiv">
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>