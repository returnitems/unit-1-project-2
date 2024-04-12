const newPhoto = document.getElementById("new-photo");
const imgForm = document.querySelector("imgForm");
const urlLabel = document.querySelector("label");
const urlInput = document.querySelector("#urlInput");
const submitPic = document.querySelector(".submit");
const container = document.querySelector("main");

// Used upon submission of an image link
const photoCard = document.createElement("div");
photoCard.className = "photo-card";

const imageSrc = document.createElement("img");
imageSrc.className = "imgBox";

const likeDislike = document.createElement("div");
likeDislike.className = "like-dislike";

const likeButton = document.createElement("button");
likeButton.className = "likeButton";

const dislikeButton = document.createElement("button");
dislikeButton.className = "likeButton";

likeDislike.appendChild(likeButton);
likeDislike.appendChild(dislikeButton);
photoCard.appendChild(imageSrc);
photoCard.appendChild(likeDislike);


const newPic = () => {
    newPhoto.style.display = "none";
    urlLabel.style.display = "block";
    urlInput.style.display = "block";
    submitPic.style.display = "block";
}

const addPic = () => {
    if (urlInput.value === "") {
        alert("Please type or paste an image link!");
    } else {
        imageSrc.setAttribute("src", urlInput.value);
        container.appendChild(photoCard);
    }
}

newPhoto.addEventListener("click", newPic);

submitPic.addEventListener("click", addPic);