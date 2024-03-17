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
        {
            title: "Project F",
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

function createAnnouncementCard() {
    // Create the announcement card container
    const announcementCard = document.createElement("div");
    announcementCard.className = "announcement-card";
    // Define the content for the announcement card
    const content = [
        { type: "title", text: "Title A"},
        { type: "text", text: "Here is some text"},
        { type: "title", text: "Title B"},
        { type: "text", text: "Here is some even more text"},
        { type: "title", text: "Title C"},
        { type: "text", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
    ];
    // Create and append the content elements
    content.forEach((item, index) => {
        const p = document.createElement("p");
        p.className = item.type == "title" ? "announcement-title" : "announcement-text";
        p.textContent = item.text;
        announcementCard.appendChild(p);
        // Add a horizontal line after every pair of title and text
        if (index % 2 === 1 && index < content.length - 1) {
            const hr = document.createElement("hr");
            hr.className = "announcement-line";
            announcementCard.appendChild(hr);
        }
    });
    return announcementCard;
}

function generateProfiles() {
    const trendingProfiles = [
        {
            handle: "@handle1",
            description: "Description for handle1",
            profilePicture: "images/avatar.png"
        },
        {
            handle: "@handle2",
            description: "Description for handle2",
            profilePicture: "images/avatar.png"
        },
        {
            handle: "@handle3",
            description: "Description for handle3",
            profilePicture: "images/avatar.png"
        },
        {
            handle: "@handle4",
            description: "Description for handle4",
            profilePicture: "images/avatar.png"
        }
    ];
    return trendingProfiles;
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

function createProfileContainer(profile) {
    // Create profile container
    const profileContainer = document.createElement("div");
    profileContainer.className = "trending-profile";
    // Create profile picture element
    const profilePicture = document.createElement("img");
    profilePicture.src = profile.profilePicture;
    profilePicture.alt = "Avatar";
    profileContainer.appendChild(profilePicture);
    // Create text container
    const textContainer = document.createElement("div");
    textContainer.className = "text-container";
    // Create handle
    const handle = document.createElement("span");
    handle.className = "handle";
    handle.textContent = profile.handle;
    textContainer.appendChild(handle);
    // Create profile description
    const description = document.createElement("span");
    description.className = "description";
    description.textContent = profile.description;
    textContainer.appendChild(description);
    // Append the text container to the profile container
    profileContainer.appendChild(textContainer);
    // Append information to card
    return profileContainer;
}

// Select card grid
const cardGrid = document.querySelector(".card-grid")
// Generate card data
const cardsData = generateCardsData();
// Generate and append cards
cardsData.forEach(card => {
    const cardHTML = createCard(card.title, card.text, card.favoriteIcon, card.viewIcon, card.shareIcon);
    cardGrid.appendChild(cardHTML);
});
// Select the announcements container
const announcementsContainer = document.querySelector(".announcements-container");
// Create the announcement card
const announcementCard = createAnnouncementCard();
// Append the announcement card to the announcements container
announcementsContainer.appendChild(announcementCard);
//Select the trending container
const trendingContainer = document.querySelector(".trending-card");
// Generate profile data
const trendingProfiles = generateProfiles(); 
// Append profile data
trendingProfiles.forEach(profile => {
    const profileContainer = createProfileContainer(profile);
    console.log(profile);
    trendingContainer.appendChild(profileContainer);
});
