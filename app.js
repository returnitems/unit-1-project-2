const newPhoto = document.getElementById("new-photo");
const imgForm = document.querySelector("imgForm");
const urlLabel = document.querySelector("label");
const urlInput = document.querySelector("#urlInput");
const submitPic = document.querySelector(".submit");


const newPic = () => {
    newPhoto.style.display = "none";
    urlLabel.style.display = "block";
    urlInput.style.display = "block";
    submitPic.style.display = "block";
}

newPhoto.addEventListener("click", newPic);

