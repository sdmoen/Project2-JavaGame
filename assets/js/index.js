// free code camp tutorials used to help with open and close text containers

let textBtn = document.querySelector(".text-btn");
let open = document.querySelector(".overtext");
let removeTextBtn = document.querySelector(".removetext-btn");

textBtn.addEventListener("click", function () {
    open.classList.add("opentext");
});
removeTextBtn.addEventListener("click", function () {
    open.classList.remove("opentext");
});
