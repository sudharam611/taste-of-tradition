var swiper = new Swiper(".testimonial-carousel", {
  centeredSlide: true,
  freeMode: true,
  loop: true,
  speed: 1000,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: true,

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;
window.addEventListener("scroll", () => {
  if (
    pageYOffset > container.offsetTop - container.offsetHeight - 700 &&
    activated === false
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;

      let count = 0;
      function updateCount() {
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;
          counter.innerHTML = count;
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();
      activated = true;
    });
  } else if (
    pageYOffset < container.offsetTop - container.offsetHeight - 500 ||
    (pageYOffset === 0 && activated === true)
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
    });
    activated = false;
  }
});
