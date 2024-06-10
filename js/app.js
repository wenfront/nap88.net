function OpenNav(){
    document.getElementById("nav").style.width = "65%";
}
    function CloseNav(){
        document.getElementById("nav").style.width = "0%";
}
// slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
