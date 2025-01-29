$(function () {
    $("#temp").remove();

    let updatedScoreOne = 0;
    let updatedLevelOne = 0;

    let updatedScoreTwo = 0;
    let updatedLevelTwo = 0;

    let programSyntaxLengthAmountOne = $(".projectOneDiv .programSyntaxLengthAmount");
    let varietyOfBlocksOne = $(".projectOneDiv .varietyOfBlocks");
    let coordinationOne = $(".projectOneDiv .coordination");
    let repeatNumberParametersOne = $(".projectOneDiv .repeatNumberParameters");
    let narrativeCohesionOne = $(".projectOneDiv .narrativeCohesion");
    let visualCustomizationOne = $(".projectOneDiv .visualCustomization");
    let programmedCustomizationOne = $(".projectOneDiv .programmedCustomization");
    let totalScoreOne = $(".projectOneDiv .totalScore");

    let programSyntaxLengthAmountTwo = $(".projectTwoDiv .programSyntaxLengthAmount");
    let varietyOfBlocksTwo = $(".projectTwoDiv .varietyOfBlocks");
    let coordinationTwo = $(".projectTwoDiv .coordination");
    let repeatNumberParametersTwo = $(".projectTwoDiv .repeatNumberParameters");
    let narrativeCohesionTwo = $(".projectTwoDiv .narrativeCohesion");
    let visualCustomizationTwo = $(".projectTwoDiv .visualCustomization");
    let programmedCustomizationTwo = $(".projectTwoDiv .programmedCustomization");
    let totalScoreTwo = $(".projectTwoDiv .totalScore");

    let categoriesOne = {
        "programSyntaxLengthAmount": programSyntaxLengthAmountOne,
        "varietyOfBlocks": varietyOfBlocksOne,
        "coordination": coordinationOne,
        "repeatNumberParameters": repeatNumberParametersOne,
        "narrativeCohesion": narrativeCohesionOne,
        "visualCustomization": visualCustomizationOne,
        "programmedCustomization": programmedCustomizationOne,
    };
    let reverseCategoriesOne = new Map(
        [
            [programSyntaxLengthAmountOne, 'programSyntaxLengthAmount'],
            [varietyOfBlocksOne, 'varietyOfBlocks'],
            [coordinationOne, 'coordination'],
            [repeatNumberParametersOne, 'repeatNumberParameters'],
            [narrativeCohesionOne, 'narrativeCohesion'],
            [visualCustomizationOne, 'visualCustomization'],
            [programmedCustomizationOne, 'programmedCustomization']])


    let categoriesScoresOne = {
        "programSyntaxLengthAmount": null,
        "varietyOfBlocks": null,
        "coordination": null,
        "repeatNumberParameters": null,
        "narrativeCohesion": null,
        "visualCustomization": null,
        "programmedCustomization": null
    }

    let categoriesTwo = {
        "programSyntaxLengthAmount": programSyntaxLengthAmountTwo,
        "varietyOfBlocks": varietyOfBlocksTwo,
        "coordination": coordinationTwo,
        "repeatNumberParameters": repeatNumberParametersTwo,
        "narrativeCohesion": narrativeCohesionTwo,
        "visualCustomization": visualCustomizationTwo,
        "programmedCustomization": programmedCustomizationTwo,
    };
    let reverseCategoriesTwo = new Map(
        [
            [programSyntaxLengthAmountTwo, 'programSyntaxLengthAmount'],
            [varietyOfBlocksTwo, 'varietyOfBlocks'],
            [coordinationTwo, 'coordination'],
            [repeatNumberParametersTwo, 'repeatNumberParameters'],
            [narrativeCohesionTwo, 'narrativeCohesion'],
            [visualCustomizationTwo, 'visualCustomization'],
            [programmedCustomizationTwo, 'programmedCustomization']])


    let categoriesScoresTwo = {
        "programSyntaxLengthAmount": null,
        "varietyOfBlocks": null,
        "coordination": null,
        "repeatNumberParameters": null,
        "narrativeCohesion": null,
        "visualCustomization": null,
        "programmedCustomization": null
    }

    function sumScore(categoriesScores) {
        let total = 0;
        for (category of Object.keys(categoriesScores)) {
            let current = categoriesScores[category];
            if (current !== null && current !== undefined) total += current;
        }
        return total;
    }

    function findLevel(categoriesScores) {
        let score = sumScore(categoriesScores);
        console.log(score)
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

    function addEventListenersToCategory(categoryElement, categoriesScores, reverseCategories, totalScore) {
        let allCells = categoryElement.find(".tableRowContentCell");
        allCells.on("click", function () {
            let value = $(this).index();
            let categoryText = reverseCategories.get(categoryElement);
            categoriesScores[categoryText] = value;

            totalScore.find('.scoreSectionDiv .textScore').text(sumScore(categoriesScores));
            totalScore.find('.projectLevelSectionDiv .textLevelName').text(findLevel(categoriesScores));
            allCells.not(this).removeClass("selected");
            $(this).addClass("selected");
        });
    }

    function initializeScores(categories, categoriesScores, data) {
        for (let category of Object.keys(categories)) {
            let score = data["scoring"][category]["categoryScore"]
            categoriesScores[category] = score;
            if (categories[category] !== undefined) {
                let targetCategory = categories[category].children(".tableRowContent");
                let categoryCells = targetCategory.children();
                categoryCells.eq(score).addClass("selected");
            }
        }
    }

    addEventListenersToCategory(programSyntaxLengthAmountOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne);
    addEventListenersToCategory(varietyOfBlocksOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne);
    addEventListenersToCategory(coordinationOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne);
    addEventListenersToCategory(repeatNumberParametersOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne);
    addEventListenersToCategory(narrativeCohesionOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne);
    addEventListenersToCategory(visualCustomizationOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne);
    addEventListenersToCategory(programmedCustomizationOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne);

    addEventListenersToCategory(programSyntaxLengthAmountTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo);
    addEventListenersToCategory(varietyOfBlocksTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo);
    addEventListenersToCategory(coordinationTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo);
    addEventListenersToCategory(repeatNumberParametersTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo);
    addEventListenersToCategory(narrativeCohesionTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo);
    addEventListenersToCategory(visualCustomizationTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo);
    addEventListenersToCategory(programmedCustomizationTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo);

    initializeScores(categoriesOne, categoriesScoresOne, dataA);
    initializeScores(categoriesTwo, categoriesScoresTwo, dataB);

    totalScoreOne.find('.scoreSectionDiv .textScore').text(sumScore(categoriesScoresOne))
    totalScoreOne.find('.projectLevelSectionDiv .textLevelName').text(findLevel(categoriesScoresOne))

    totalScoreTwo.find('.scoreSectionDiv .textScore').text(sumScore(categoriesScoresTwo))
    totalScoreTwo.find('.projectLevelSectionDiv .textLevelName').text(findLevel(categoriesScoresTwo))

})