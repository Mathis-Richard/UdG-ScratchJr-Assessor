$(function () {
    let soloFile = $("#soloFile")
    let duoFileOne = $("#duoFileOne")
    let duoFileTwo = $("#duoFileTwo")
    let svgFile = $("#svgFile")

    soloFile.val(null)
    duoFileOne.val(null)
    duoFileTwo.val(null)
    svgFile.val(null)

    let submitLabelSolo = $("<label>", {
        id: "submitLabelSolo",
        for: "submitSoloFile",
        class: "submitLabel"
    }).text("Upload");
    let labelDivSolo = $("<div>", {id: "labelDivSolo", class: "labelDiv"});
    let pUploadSolo = $("<p>")
    let pUploadSoloError = $("<p>", {class: "error"})
    let labelDeleteSolo = $("<label>", {class: "removeLabel"}).html("&#10008;")
    labelDivSolo.append(submitLabelSolo);

    let formDataSolo = new FormData();

    function resetSolo() {
        soloFile.val(null);
        labelDeleteSolo.remove();
        labelDivSolo.remove();
        pUploadSoloError.remove();
        pUploadSolo.remove();
    }

    soloFile.on("change", () => {
        if (!soloFile[0].files.length) {
            resetSolo()
        }
        let file = soloFile[0].files[0];
        if (file && file.name.split(".").pop() !== "sjr") {
            soloFile.val(null)
            labelDivSolo.remove()
            pUploadSolo.remove();
            $("#soloForm #filenameDivSolo").append(pUploadSoloError);
            $("#soloForm #labelDivSoloFile").append(labelDeleteSolo);
            labelDeleteSolo.click(() => {
                resetSolo()
            });
            pUploadSoloError.text(file.name + " is not a .sjr file !")
            formDataSolo.remove("file", file)
        } else {
            pUploadSoloError.remove();
            $("#soloForm").append(labelDivSolo);
            $("#soloForm #filenameDivSolo").append(pUploadSolo);
            $("#soloForm #labelDivSoloFile").append(labelDeleteSolo);
            labelDeleteSolo.click(() => {
                resetSolo()
            });
            pUploadSolo.text(file.name + " (" + file.size + " bytes)")
            formDataSolo.append("file", file)
        }

    })

    let submitLabelDuo = $("<label>", {
        id: "submitLabelDuo",
        for: "submitDuoFiles",
        class: "submitLabel"
    }).text("Upload");
    let labelDivDuo = $("<div>", {id: "labelDivDuo", class: "labelDiv"});
    let pUploadDuoOne = $("<p>")
    let pUploadDuoOneError = $("<p>", {class: "error"})
    let pUploadDuoTwo = $("<p>")
    let pUploadDuoTwoError = $("<p>", {class: "error"})
    let labelDeleteDuoOne = $("<label>", {class: "removeLabel"}).html("&#10008;")
    let labelDeleteDuoTwo = $("<label>", {class: "removeLabel"}).html("&#10008;")
    labelDivDuo.append(submitLabelDuo);

    let formDataDuo = new FormData();

    function resetDuoOne() {
        duoFileOne.val(null);
        labelDeleteDuoOne.remove();
        labelDivDuo.remove();
        pUploadDuoOneError.remove();
        pUploadDuoOne.remove();
    }

    function resetDuoTwo() {
        duoFileTwo.val(null);
        labelDeleteDuoTwo.remove();
        labelDivDuo.remove();
        pUploadDuoTwoError.remove();
        pUploadDuoTwo.remove();
    }

    duoFileOne.on("change", () => {
        if (!duoFileOne[0].files.length) {
            resetDuoOne()
        }
        let file = duoFileOne[0].files[0];
        if (file && file.name.split(".").pop() !== "sjr") {
            duoFileOne.val(null)
            labelDivDuo.remove()
            pUploadDuoOne.remove();
            $("#duoForm #labelDivDuoOne #filenameDivDuoOne").append(pUploadDuoOneError);
            $("#duoForm #labelDivDuoOne").append(labelDeleteDuoOne);
            labelDeleteDuoOne.click(() => {
                resetDuoOne()
            });
            pUploadDuoOneError.text(file.name + " is not a .sjr file !")
            formDataDuo.remove("fileOne", file)
        } else {
            pUploadDuoOneError.remove();
            if (duoFileTwo.val().length > 0) $("#duoForm").append(labelDivDuo)
            $("#duoForm #labelDivDuoOne #filenameDivDuoOne").append(pUploadDuoOne);
            $("#duoForm #labelDivDuoOne").append(labelDeleteDuoOne);
            labelDeleteDuoOne.click(() => {
                resetDuoOne()
            });
            pUploadDuoOne.text(file.name + " (" + file.size + " bytes)")
            formDataDuo.append("fileOne", file)
        }

    })

    duoFileTwo.on("change", () => {
        if (!duoFileTwo[0].files.length) {
            resetDuoTwo()
        }
        let file = duoFileTwo[0].files[0];
        if (file && file.name.split(".").pop() !== "sjr") {
            duoFileTwo.val(null)
            labelDivDuo.remove()
            pUploadDuoTwo.remove();
            $("#duoForm #labelDivDuoTwo #filenameDivDuoTwo").append(pUploadDuoTwoError);
            $("#duoForm #labelDivDuoTwo").append(labelDeleteDuoTwo);
            labelDeleteDuoTwo.click(() => {
                resetDuoTwo()
            });
            pUploadDuoTwoError.text(file.name + " is not a .sjr file !")
            formDataDuo.remove("fileTwo", file)
        } else {
            pUploadDuoTwoError.remove();
            if (duoFileOne.val().length > 0) $("#duoForm").append(labelDivDuo)
            $("#duoForm #labelDivDuoTwo #filenameDivDuoTwo").append(pUploadDuoTwo);
            $("#duoForm #labelDivDuoTwo").append(labelDeleteDuoTwo);
            labelDeleteDuoTwo.click(() => {
                resetDuoTwo()
            });
            pUploadDuoTwo.text(file.name + " (" + file.size + " bytes)")
            formDataDuo.append("fileTwo", file)
        }
    })

    let submitLabelSvg = $("<label>", {
        id: "submitLabelSvg",
        for: "submitSvgFile",
        class: "submitLabel"
    }).text("Upload");
    let labelDivSvg = $("<div>", {id: "labelDivSvg", class: "labelDiv"});
    let pUploadSvg = $("<p>")
    let pUploadSvgError = $("<p>", {class: "error"})
    let labelDeleteSvg = $("<label>", {class: "removeLabel"}).html("&#10008;")
    labelDivSvg.append(submitLabelSvg);

    let formDataSvg = new FormData();

    function resetSvg() {
        svgFile.val(null);
        labelDeleteSvg.remove();
        labelDivSvg.remove();
        pUploadSvgError.remove();
        pUploadSvg.remove();
    }

    svgFile.on("change", () => {
        if (!svgFile[0].files.length) {
            resetSvg()
        }
        let file = svgFile[0].files[0];
        if (file && file.name.split(".").pop() !== "svg") {
            soloFile.val(null)
            labelDivSvg.remove()
            pUploadSvg.remove();
            $("#svgForm #filenameDivSvg").append(pUploadSvgError);
            $("#svgForm #labelDivSvgFile").append(labelDeleteSvg);
            labelDeleteSvg.click(() => {
                resetSvg()
            });
            pUploadSvgError.text(file.name + " is not a .svg file !")
            formDataSvg.remove("fileSvg", file)
        } else {
            pUploadSvgError.remove();
            $("#svgForm").append(labelDivSvg);
            $("#svgForm #filenameDivSvg").append(pUploadSvg);
            $("#svgForm #labelDivSvgFile").append(labelDeleteSvg);
            labelDeleteSvg.click(() => {
                resetSvg()
            });
            pUploadSvg.text(file.name + " (" + file.size + " bytes)")
            formDataSvg.append("fileSvg", file)
        }

    })

    let isSJRFormSubmitted = false;
    let isSVGFormSubmitted = false;

    $('.sjrForm').on('submit', function (e) {
        isSJRFormSubmitted = true;
    });

    $('.svgForm').on('submit', function (e) {
        isSVGFormSubmitted = true;
    });

    $(window).on('beforeunload', function () {
        if ((!isSJRFormSubmitted && (soloFile.val().length > 0 || duoFileOne.val().length > 0 || duoFileTwo.val().length > 0)) || (!isSVGFormSubmitted && svgFile.val().length > 0)) {
            return "Unsaved changes";
        }
    });

})

