function generateCardsData() {
    const cardsData = [
        {
            title: "Project A",
            text: "Project A text",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
        {
            title: "Project B",
            text: "Project B text",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
        {
            title: "Project C",
            text: "Project C text",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
        {
            title: "Project D",
            text: "Project D text",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
        {
            title: "Project E",
            text: "Project E text",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
        {
            title: "Project F",
            text: "Project F text",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
    ];
    return cardsData;
}

function createCard(title, text, favoriteIcon, viewIcon, shareIcon) {
    //Create card container
    const card = document.createElement("div");
    card.className = "card";
    // Create title element
    const titleElement = document.createElement("h4");
    titleElement.textContent = title;
    card.appendChild(titleElement);
    // Create text element
    const textElement = document.createElement("p");
    textElement.textContent = text;
    card.appendChild(textElement);
    // Create icons container
    const iconsContainer = document.createElement("div");
    iconsContainer.className = "cards-icons";
    // Create favorite icon element
    const favoriteIconElement = document.createElement("img");
    favoriteIconElement.src = favoriteIcon;
    favoriteIconElement.alt = "Favorite";
    iconsContainer.appendChild(favoriteIconElement);
    // Create view icon element
    const viewIconElement = document.createElement("img");
    viewIconElement.src = viewIcon;
    viewIconElement.alt = "View";
    iconsContainer.appendChild(viewIconElement);
    // Create share icon element
    const shareIconElement = document.createElement("img");
    shareIconElement.src = shareIcon;
    shareIconElement.alt = "Share";
    iconsContainer.appendChild(shareIconElement);
    // Append icons container to card
    card.appendChild(iconsContainer);

    return card;
}

// Select card grid
const cardGrid = document.querySelector(".card-grid")
// Generate card data
const cardsData = generateCardsData();
// Generate and append cards
cardsData.forEach(card => {
    const cardHTML = createCard(card.title, card.text, card.favoriteIcon, card.viewIcon, card.shareIcon);
    console.log(cardHTML);
    cardGrid.appendChild(cardHTML);
});