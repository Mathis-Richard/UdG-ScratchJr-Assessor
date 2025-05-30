$(function () {
    $("#temp").remove();

    console.log(data);

    let narrativeCohesionMessage = $('<div class="manualMarkMessage">This needs to be marked manually</>');
    $(".narrativeCohesion .tableRowTitle").append(narrativeCohesionMessage);


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
    let pageImagesDiv = $(".pageImagesDiv");

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
        "programSyntaxLengthAmount": 0,
        "varietyOfBlocks": 0,
        "coordination": 0,
        "repeatNumberParameters": 0,
        "narrativeCohesion": null,
        "visualCustomization": 0,
        "programmedCustomization": 0
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
            return ["Distinguished","pointsFour"]
        } else if (15 <= score && score <= 21) {
            return ["Advanced","pointsThree"]
        } else if (8 <= score && score <= 14) {
            return ["Proficient","pointsTwo"]
        } else if (2 <= score && score <= 7) {
            return ["Developing","pointsOne"]
        } else if (0 <= score) {
            return ["Budding","pointsZero"]
        } else {
            return ["Error"]
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
            updateRubric.call(this,categoryElement);
        });
    }

    function updateRubric(categoryElement) {
        let value = $(this).index()
        let categoryText = reverseCategories.get(categoryElement);
        categoriesScores[categoryText] = value;
        let score = sumScore();
        let level = findLevel();
        totalScore.find('.scoreSectionDiv .textScore').text(score);
        totalScore.find('.projectLevelSectionDiv .textLevelName').text(level[0]).removeClass("pointsZero pointsOne pointsTwo pointsThree pointsFour").addClass(level[1]);
        totalScore.find('.scoreSectionDiv .textScore').removeClass("pointsZero pointsOne pointsTwo pointsThree pointsFour").addClass(level[1]);
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
        if(categoryText === "narrativeCohesion") {
            narrativeCohesionMessage.remove();
        }
    }


    addEventListenersToCategory(programSyntaxLengthAmount);
    addEventListenersToCategory(varietyOfBlocks);
    addEventListenersToCategory(coordination);
    addEventListenersToCategory(repeatNumberParameters);
    addEventListenersToCategory(narrativeCohesion);
    addEventListenersToCategory(visualCustomization);
    addEventListenersToCategory(programmedCustomization);

    let pageImages = data.extra.pageImages;
    let characterImages = data.extra.characterImages;

    for (let page in pageImages) {
        let pageDiv = $(`<div class="pageAndCharacterDiv"></div>`);

        let pageNameAndImageDiv = $('<div class="pageNameAndImageDiv"></div>')

        pageNameAndImageDiv.append(`<img class="pageImage" src="data:image/svg+xml;base64,${pageImages[page]}" alt="Page Image">`);
        pageNameAndImageDiv.append($(`<p></p>`).text(page));
        pageDiv.append(pageNameAndImageDiv);

        let charactersDiv = $('<div class="charactersDiv"></div>');

        for (let character in characterImages[page]) {
            let characterDiv = $(`<div class="characterDiv"></div>`)
            characterDiv.append(`<img class="characterImage" src="data:image/svg+xml;base64,${characterImages[page][character]}" alt="Character Image">`).append($(`<p class="characterName"></p>`).text(character));
            charactersDiv.append(characterDiv);
        }

        pageDiv.append(charactersDiv);

        pageImagesDiv.append(pageDiv);
    }

    Object.keys(categories).forEach(category => {
        let score = data["scoring"][category]["categoryScore"];
        categoriesScores[category] = score;

        if (categories[category] !== undefined && category !== "narrativeCohesion") {
            let targetCategory = categories[category].children(".tableRowContent");
            let categoryCells = targetCategory.children();
            let selectedCell = categoryCells.eq(score);

            selectedCell.trigger("click");
        } else if(category === "narrativeCohesion") {
            let targetCategory = categories[category].children(".tableRowContent");
            let categoryCells = targetCategory.children();
            categoryCells.removeClass("selected");
        }
    });
})
