const newPhoto = document.getElementById("new-photo");
const imgForm = document.querySelector("#imgForm");
const urlLabel = document.querySelector("label");
const urlInput = document.querySelector("#urlInput");
const submitPic = document.querySelector(".submit");
const container = document.querySelector("main");
const photoCards = document.querySelectorAll(".photo-card");
// const likeButton = document.querySelectorAll(".likeButton");
// const disButton = document.querySelectorAll(".dislikeButton");
// const likeIcon = document.querySelector(".fa-solid");
// const dislikeIcon = document.querySelector(".fa-regular");
// const likeText = document.querySelector(".like-text");
// const dislikeText = document.querySelector(".dislike-text");

const newPic = () => {
  newPhoto.style.display = "none";
  urlLabel.style.display = "block";
  urlInput.style.display = "block";
  submitPic.style.display = "block";
};

const addPic = (event) => {
  // Learned that the reason a submitted link was not showing was because the page was reloading upon form submission.
  // Research of the issue led me to learn about the preventDefault function to stop the page from reloading upong link submission.   
  event.preventDefault();

  if (urlInput.value === "") {
    alert("Please type or paste an image link!");
  } else {
    // Used upon submission of an image link
    const photoCard = document.createElement("div");
    photoCard.className = "photo-card";

    const imageSrc = document.createElement("img");
    imageSrc.className = "imgBox";

    const likeDislike = document.createElement("div");
    likeDislike.className = "like-dislike";

    const likeButton = document.createElement("button");
    likeButton.className = "likeButton";
    likeButton.textContent = "Like";

    const dislikeButton = document.createElement("button");
    dislikeButton.className = "dislikeButton";
    dislikeButton.textContent = "Dislike";

    likeDislike.appendChild(likeButton);
    likeDislike.appendChild(dislikeButton);
    photoCard.appendChild(imageSrc);
    photoCard.appendChild(likeDislike);

    imageSrc.src = urlInput.value;
    container.appendChild(photoCard);

    urlInput.value = "";
    newPhoto.style.display = "block";
    urlLabel.style.display = "none";
    urlInput.style.display = "none";
    submitPic.style.display = "none";
  }
};

// Using forEach to select each photo card and then grabbing the buttons and icons and changing the style class to show or hide
photoCards.forEach(card => {
    const likeButton = card.querySelector(".likeButton");
    const disButton = card.querySelector(".dislikeButton");
    const likeIcon = card.querySelector(".fa-heart");
    const dislikeIcon = card.querySelector(".fa-thumbs-down");

    likeButton.addEventListener("click", function() {
        likeIcon.classList.remove("hide");
        likeIcon.classList.add("show");
        likeButton.classList.add("hide");
        disButton.classList.add("hide");
    });

    disButton.addEventListener("click", function() {
        dislikeIcon.classList.remove("hide");
        dislikeIcon.classList.add("show");
        disButton.classList.add("hide");
        likeButton.classList.add("hide");
    })
})

newPhoto.addEventListener("click", newPic);

submitPic.addEventListener("click", addPic);

