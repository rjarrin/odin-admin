function generateCardsData() {
    const cardsData = [
        {
            title: "Project A",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
        {
            title: "Project B",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
        {
            title: "Project C",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
        {
            title: "Project D",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
        {
            title: "Project E",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            favoriteIcon: 'icons/star-box.svg',
            viewIcon: 'icons/eye-circle.svg',
            shareIcon: 'icons/share-circle.svg'
        },
        {
            title: "Project F",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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