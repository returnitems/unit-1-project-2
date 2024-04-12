const newPhoto = document.getElementById("new-photo");

const hideButton = () => {
    newPhoto.style.display = "none";
}

newPhoto.addEventListener("click", hideButton);

