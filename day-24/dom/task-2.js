const imgArray = [
  "https://pm1.narvii.com/5750/46453b5c30aee103bc13dde7871dac678c2ed49e_hq.jpg",
  "https://vignette.wikia.nocookie.net/hunterxhunter/images/7/7d/Neferpitou_retrato.png/revision/latest?cb=20140602075947&path-prefix=es",
  "https://th.bing.com/th/id/OIP.FcAh2srGSlvyqZ8siMSbkQHaEJ?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIP.FPkTxCwptvBkNxNf0HpaZwHaEK?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIP.B75DePfoPKOApftsyiEXLAHaEo?pid=ImgDet&rs=1",
];

const buttonNext = document.createElement("button");
buttonNext.style.width = "100px";
buttonNext.style.height = "20px";
buttonNext.textContent = "Next image";
// const body = document.getElementsByName("body");
document.body.appendChild(buttonNext);

let imgFirst = 0;
for (let img of imgArray) {
  var newImg = document.createElement("img");
  newImg.setAttribute("src", img);
  //   console.log(img);
  newImg.setAttribute("id", `image${imgFirst + 1}`);
  newImg.setAttribute("class", "images");
  newImg.style.display = "none";
  document.body.appendChild(newImg);
  imgFirst += 1;
}

const newP = document.createElement("p");
newP.style.display = "none";
newP.textContent = `images array length is ${imgArray.length}`;
document.body.appendChild(newP);

buttonNext.addEventListener("click", function () {
  let randomNum = Math.ceil(Math.random() * 5);
  const displayImg = document.getElementsByClassName("images");
  for (let i = 0; i < displayImg.length; i++) {
    displayImg[i].style.display = "none";
  }
  displayImg[randomNum - 1].style.display = "block";

  newP.style.display = "flex";
  newP.style.margin = "50%, 50%";
});
