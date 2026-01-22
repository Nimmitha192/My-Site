const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //toggle mobile menu visibility
    document.body.classList.toggle("shaw-mobile-menu");
});


menuCloseButton.addEventListener("click", () => menuOpenButton.click()
    //Close the menu
);
