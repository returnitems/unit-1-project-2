const newPhoto = document.getElementById("new-photo");
const imgForm = document.querySelector("#imgForm");
const urlLabel = document.querySelector("label");
const urlInput = document.querySelector("#urlInput");
const submitPic = document.querySelector(".submit");
const container = document.querySelector("main");
const likeButton = document.querySelector(".likeButton");
const disButton = document.querySelector(".dislikeButton");
const likeIcon = document.getElementById("like");
const dislikeIcon = document.getElementById("dislike");
const likeText = document.getElementById("like-text");
const dislikeText = document.getElementById("dislike-text");

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

newPhoto.addEventListener("click", newPic);

submitPic.addEventListener("click", addPic);

likeButton.addEventListener("mouseover", heart = () => {
    likeText.style.display = "none";
    likeIcon.style.display = "inline-block";
});

likeButton.addEventListener("mouseout", text = () => {
    likeText.style.display = "inline-block";
    likeIcon.style.display = "none";
});

disButton.addEventListener("mouseover", thumbDown = () => {
    dislikeText.style.display = "none";
    dislikeIcon.style.display = "inline-block";
});

disButton.addEventListener("mouseout", text = () => {
    dislikeText.style.display = "inline-block";
    dislikeIcon.style.display = "none";
});