const newPhoto = $("#new-photo");
const imgForm = $("#imgForm");
const urlLabel = $("label");
const urlInput = $("#urlInput");
const submitPic = $(".submit");
const container = $("main");
const photoCards = $(".photo-card");



const newPic = () => {
  newPhoto.hide();
  urlLabel.show();
  urlInput.show();
  submitPic.show();
};


const addPic = (event) => {
  // Learned that the reason a submitted link was not showing was because the page was reloading upon form submission.
  // Research of the issue led me to learn about the preventDefault function to stop the page from reloading upong link submission.   
  event.preventDefault();

  if (urlInput.val() === "") {
    alert("Please type or paste an image link!");
  } else {
    // Used upon submission of an image link
    const photoCard = $("<div></div>").addClass('photo-card');
    // photoCard.className = "photo-card";

    const imageSrc = $("<img>").addClass('imgBox');
    // imageSrc.className = "imgBox";

    const likeDislike = $("<div></div>").addClass('like-dislike');
    // likeDislike.className = "like-dislike";

    const likeButton = $("<button></button>").addClass('likeButton').text('Like');
    // likeButton.className = "likeButton";
    // likeButton.textContent = "Like";

    const dislikeButton = $("<button></button>").addClass('dislikeButton').text('Dislike');
    // dislikeButton.className = "dislikeButton";
    // dislikeButton.textContent = "Dislike";

    // likeDislike.appendChild(likeButton);
    // likeDislike.appendChild(dislikeButton);
    // photoCard.appendChild(imageSrc);
    // photoCard.appendChild(likeDislike);

    likeDislike.append(likeButton, dislikeButton);
    photoCard.append(imageSrc, likeDislike);


    // imageSrc.src = urlInput.value;
    imageSrc.attr("src", urlInput.val());
    container.append(photoCard);
    // container.appendChild(photoCard);

    urlInput.val("");
    newPhoto.show();
    urlInput.hide();
    urlLabel.hide();
    submitPic.hide();
    // newPhoto.style.display = "block";
    // urlLabel.style.display = "none";
    // urlInput.style.display = "none";
    // submitPic.style.display = "none";
  }
};


// Using forEach to select each photo card and then grabbing the buttons and icons and changing the style class to show or hide
photoCards.each(function() {
    const likeButton = $(this).find(".likeButton");
    const disButton = $(this).find(".dislikeButton");
    const likeIcon = $(this).find(".fa-heart");
    const dislikeIcon = $(this).find(".fa-thumbs-down");

    // likeButton.addEventListener("click", function() {
    //     likeIcon.classList.remove("hide");
    //     likeIcon.classList.add("show");
    //     likeButton.classList.add("hide");
    //     disButton.classList.add("hide");
    // });

    likeButton.on("click", function() {
      likeIcon.removeClass("hide").addClass("show");
      likeButton.addClass("hide");
      disButton.addClass("hide");
    });

    // disButton.addEventListener("click", function() {
    //     dislikeIcon.classList.remove("hide");
    //     dislikeIcon.classList.add("show");
    //     disButton.classList.add("hide");
    //     likeButton.classList.add("hide");
    // })

    disButton.on("click", function() {
      dislikeIcon.removeClass("hide").addClass("show");
      disButton.addClass("hide");
      likeButton.addClass("hide");
    });
});


// newPhoto.addEventListener("click", newPic);
newPhoto.on("click", newPic);


// submitPic.addEventListener("click", addPic);
submitPic.on("click", addPic);