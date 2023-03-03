
// swiper js 
var swiper = new Swiper(".mySwiper", {
    rewind: true,
    autoplay: {
        delay: 4000
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// portfolio filter section 
let list = document.querySelectorAll(".list");
let filterImage = document.querySelectorAll(".filter-img-list");

for(i = 0; i < list.length; i++) {
    list[i].addEventListener("click", myFunction);
}

function myFunction() {
    let currentTab = document.querySelector(".active")
    currentTab.classList.remove("active")
    this.classList.add("active")

    let getDataFilter = this.getAttribute("data-filter");

    if(getDataFilter != "all"){
        for(i=0; i < filterImage.length; i++) {
            filterImage[i].classList.add("hide")

            let getDataItem = filterImage[i].getAttribute("data-item");
            if(getDataFilter === getDataItem) {
                filterImage[i].classList.remove("hide")
            } else{
                filterImage[i].classList.add("hide")
            }
        }
       
    }

}

// back to top
let topBtn = document.querySelector(".copy-end");
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})