const newPhoto = document.getElementById("new-photo");
const imgForm = document.querySelector("#imgForm");
const urlLabel = document.querySelector("label");
const urlInput = document.querySelector("#urlInput");
const submitPic = document.querySelector(".submit");
const container = document.querySelector("main");

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
    dislikeButton.className = "likeButton";
    dislikeButton.textContent = "Dislike";

    likeDislike.appendChild(likeButton);
    likeDislike.appendChild(dislikeButton);
    photoCard.appendChild(imageSrc);
    photoCard.appendChild(likeDislike);

    imageSrc.src = urlInput.value;
    container.appendChild(photoCard);
  }
};

newPhoto.addEventListener("click", newPic);

submitPic.addEventListener("click", addPic);
