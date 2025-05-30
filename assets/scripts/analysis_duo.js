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
    let pageImagesDivOne = $(".projectOneDiv .pageImagesDiv");

    let programSyntaxLengthAmountTwo = $(".projectTwoDiv .programSyntaxLengthAmount");
    let varietyOfBlocksTwo = $(".projectTwoDiv .varietyOfBlocks");
    let coordinationTwo = $(".projectTwoDiv .coordination");
    let repeatNumberParametersTwo = $(".projectTwoDiv .repeatNumberParameters");
    let narrativeCohesionTwo = $(".projectTwoDiv .narrativeCohesion");
    let visualCustomizationTwo = $(".projectTwoDiv .visualCustomization");
    let programmedCustomizationTwo = $(".projectTwoDiv .programmedCustomization");
    let totalScoreTwo = $(".projectTwoDiv .totalScore");
    let pageImagesDivTwo = $(".projectTwoDiv .pageImagesDiv");

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
        if (22 <= score && score <= 28) {
            return ["Distinguished", "pointsFour"]
        } else if (15 <= score && score <= 21) {
            return ["Advanced", "pointsThree"]
        } else if (8 <= score && score <= 14) {
            return ["Proficient", "pointsTwo"]
        } else if (2 <= score && score <= 7) {
            return ["Developing", "pointsOne"]
        } else if (0 <= score) {
            return ["Budding", "pointsZero"]
        } else {
            return ["Error"]
        }
    }


    for (let category of Object.keys(categoriesOne)) {
        let score = dataA["scoring"][category]["categoryScore"]
        categoriesScoresOne[category] = score;
        if (categoriesOne[category] !== undefined) {
            let targetCategory = categoriesOne[category].children(".tableRowContent");
            let categoryCells = targetCategory.children();
            categoryCells.eq(score).addClass("selected");
        }
    }

    for (let category of Object.keys(categoriesTwo)) {
        let score = dataB["scoring"][category]["categoryScore"]
        categoriesScoresTwo[category] = score;
        if (categoriesTwo[category] !== undefined) {
            let targetCategory = categoriesTwo[category].children(".tableRowContent");
            let categoryCells = targetCategory.children();
            categoryCells.eq(score).addClass("selected");
        }
    }

    function addEventListenersToCategory(categoryElement, categoriesScores, reverseCategories, totalScore, categories) {
        updateRubric(categoryElement, categoriesScores, reverseCategories, totalScore, categories);
    }

    function updateRubric(categoryElement, categoriesScores, reverseCategories, totalScore, categories) {
        let allCells = categoryElement.find(".tableRowContentCell");
        allCells.on("click", function () {
            let value = $(this).index();
            let categoryText = reverseCategories.get(categoryElement);
            categoriesScores[categoryText] = value;
            let score = sumScore(categoriesScores);
            let level = findLevel(categoriesScores);
            totalScore.find('.scoreSectionDiv .textScore').text(score);
            totalScore.find('.projectLevelSectionDiv .textLevelName').text(level[0]).removeClass("pointsZero pointsOne pointsTwo pointsThree pointsFour").addClass(level[1]);
            totalScore.find('.scoreSectionDiv .textScore').removeClass("pointsZero pointsOne pointsTwo pointsThree pointsFour").addClass(level[1]);
            allCells.not(this).removeClass("selected");
            $(this).addClass("selected");
        });
    }

    addEventListenersToCategory(programSyntaxLengthAmountOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    addEventListenersToCategory(varietyOfBlocksOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    addEventListenersToCategory(coordinationOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    addEventListenersToCategory(repeatNumberParametersOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    addEventListenersToCategory(narrativeCohesionOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    addEventListenersToCategory(visualCustomizationOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    addEventListenersToCategory(programmedCustomizationOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);

    addEventListenersToCategory(programSyntaxLengthAmountTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    addEventListenersToCategory(varietyOfBlocksTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    addEventListenersToCategory(coordinationTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    addEventListenersToCategory(repeatNumberParametersTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    addEventListenersToCategory(narrativeCohesionTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    addEventListenersToCategory(visualCustomizationTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    addEventListenersToCategory(programmedCustomizationTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);

    let pageImagesOne = dataA.extra.pageImages;
    let characterImagesOne = dataA.extra.characterImages;

    for (let page in pageImagesOne) {
        let pageDiv = $(`<div class="pageAndCharacterDiv"></div>`);

        let pageNameAndImageDiv = $('<div class="pageNameAndImageDiv"></div>')

        pageNameAndImageDiv.append(`<img class="pageImage" src="data:image/svg+xml;base64,${pageImagesOne[page]}" alt="Page Image">`);
        pageNameAndImageDiv.append(`<p>${page}</p>`);
        pageDiv.append(pageNameAndImageDiv);

        let charactersDiv = $('<div class="charactersDiv"></div>');

        for (let character in characterImagesOne[page]) {
            let characterDiv = $(`<div class="characterDiv"></div>`)
            characterDiv.append(`<img class="characterImage" src="data:image/svg+xml;base64,${characterImagesOne[page][character]}" alt="Character Image">`).append(`<p class="characterName">${character}</p>`);
            charactersDiv.append(characterDiv);
        }

        pageDiv.append(charactersDiv);

        pageImagesDivOne.append(pageDiv);
    }

    let pageImagesTwo = dataB.extra.pageImages;
    let characterImagesTwo = dataB.extra.characterImages;

    for (let page in pageImagesTwo) {
        let pageDiv = $(`<div class="pageAndCharacterDiv"></div>`);

        let pageNameAndImageDiv = $('<div class="pageNameAndImageDiv"></div>')

        pageNameAndImageDiv.append(`<img class="pageImage" src="data:image/svg+xml;base64,${pageImagesTwo[page]}" alt="Page Image">`);
        pageNameAndImageDiv.append(`<p>${page}</p>`);
        pageDiv.append(pageNameAndImageDiv);

        let charactersDiv = $('<div class="charactersDiv"></div>');

        for (let character in characterImagesTwo[page]) {
            let characterDiv = $(`<div class="characterDiv"></div>`)
            characterDiv.append(`<img class="characterImage" src="data:image/svg+xml;base64,${characterImagesTwo[page][character]}" alt="Character Image">`).append(`<p class="characterName">${character}</p>`);
            charactersDiv.append(characterDiv);
        }

        pageDiv.append(charactersDiv);

        pageImagesDivTwo.append(pageDiv);
    }

    updateRubric(programSyntaxLengthAmountOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    updateRubric(varietyOfBlocksOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    updateRubric(coordinationOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    updateRubric(repeatNumberParametersOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    updateRubric(visualCustomizationOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);
    updateRubric(programmedCustomizationOne, categoriesScoresOne, reverseCategoriesOne, totalScoreOne, categoriesOne);

    updateRubric(programSyntaxLengthAmountTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    updateRubric(varietyOfBlocksTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    updateRubric(coordinationTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    updateRubric(repeatNumberParametersTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    updateRubric(visualCustomizationTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
    updateRubric(programmedCustomizationTwo, categoriesScoresTwo, reverseCategoriesTwo, totalScoreTwo, categoriesTwo);
})
