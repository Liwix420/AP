const PHOTO = document.querySelectorAll(".photo");
const PHOTO_SHOWN = document.querySelector(".photo_shown");
console.log(PHOTO);

const POPUPBOARD = document.querySelector(".popup_hidden");

PHOTO.forEach((photo) => {
    photo.addEventListener("click", () => {
        POPUPBOARD.classList.remove("popup_hidden");
        POPUPBOARD.classList.add("popup_shown");
        let photo_src = photo.getAttribute("src");
        console.log(photo_src);
        PHOTO_SHOWN.src = photo_src;
    });
});

const XBUTTON = document.querySelector(".xbutton");
XBUTTON.addEventListener("click", () => {
    POPUPBOARD.classList.add("popup_hidden");
    POPUPBOARD.classList.remove("popup_shown");
})