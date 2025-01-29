$(function () {
    $("#temp").remove();

    console.log(data);

    let updatedScore = 0;
    let updatedLevel = 0;

    let programSyntaxLengthAmount = $(".programSyntaxLengthAmount");
    let varietyOfBlocks = $(".varietyOfBlocks");
    let coordination = $(".coordination");
    let repeatNumberParameters = $(".repeatNumberParameters");
    let narrativeCohesion = $(".narrativeCohesion");
    let visualCustomization = $(".visualCustomization");
    let programmedCustomization = $(".programmedCustomization");
    let totalScore = $(".totalScore");

    let categories = {
        "programSyntaxLengthAmount": programSyntaxLengthAmount,
        "varietyOfBlocks": varietyOfBlocks,
        "coordination": coordination,
        "repeatNumberParameters": repeatNumberParameters,
        "narrativeCohesion": narrativeCohesion,
        "visualCustomization": visualCustomization,
        "programmedCustomization": programmedCustomization,
    };
    let reverseCategories = new Map(
        [
            [programSyntaxLengthAmount, 'programSyntaxLengthAmount'],
            [varietyOfBlocks, 'varietyOfBlocks'],
            [coordination, 'coordination'],
            [repeatNumberParameters, 'repeatNumberParameters'],
            [narrativeCohesion, 'narrativeCohesion'],
            [visualCustomization, 'visualCustomization'],
            [programmedCustomization, 'programmedCustomization']])


    let categoriesScores = {
        "programSyntaxLengthAmount": null,
        "varietyOfBlocks": null,
        "coordination": null,
        "repeatNumberParameters": null,
        "narrativeCohesion": null,
        "visualCustomization": null,
        "programmedCustomization": null
    }

    function sumScore() {
        let total = 0;
        for (category of Object.keys(categoriesScores)) {
            let current = categoriesScores[category];
            if (current !== null && current !== undefined) total += current;
        }
        return total;
    }

    function findLevel() {
        let score = sumScore();
        if (22 <= score && score <= 28) {
            return "Distinguished"
        } else if (15 <= score && score <= 21) {
            return "Advanced"
        } else if (8 <= score && score <= 14) {
            return "Proficient"
        } else if (2 <= score && score <= 7) {
            return "Developing"
        } else if (0 <= score) {
            return "Budding"
        } else {
            return "Error"
        }
    }

    for (let category of Object.keys(categories)) {
        let score = data["scoring"][category]["categoryScore"]
        categoriesScores[category] = score;
        if (categories[category] !== undefined) {
            let targetCategory = categories[category].children(".tableRowContent");
            let categoryCells = targetCategory.children();
            categoryCells.eq(score).addClass("selected");
        }
    }

    function addEventListenersToCategory(categoryElement) {
        let allCells = categoryElement.find(".tableRowContentCell");
        allCells.on("click", function () {
            let value = $(this).index();
            let categoryText = reverseCategories.get(categoryElement);
            categoriesScores[categoryText] = value;
            sumScore();
            findLevel();
            totalScore.find('.scoreSectionDiv .textScore').text(sumScore());
            totalScore.find('.projectLevelSectionDiv .textLevelName').text(findLevel());
            allCells.not(this).removeClass("selected");
            $(this).addClass("selected");
        });
    }

    addEventListenersToCategory(programSyntaxLengthAmount);
    addEventListenersToCategory(varietyOfBlocks);
    addEventListenersToCategory(coordination);
    addEventListenersToCategory(repeatNumberParameters);
    addEventListenersToCategory(narrativeCohesion);
    addEventListenersToCategory(visualCustomization);
    addEventListenersToCategory(programmedCustomization);


    totalScore.find('.scoreSectionDiv .textScore').text(sumScore())
    totalScore.find('.projectLevelSectionDiv .textLevelName').text(findLevel())


})