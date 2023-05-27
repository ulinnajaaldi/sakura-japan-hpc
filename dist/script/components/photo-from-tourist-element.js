import "./slider/tourist-slider.js";

class PhotoFromTouristElement extends HTMLElement {
  datas = [
    {
      destination: "TSUHIMA ISLAND",
      photoBy: "MAIK KOZOZKI",
      image: "/dist/assets/images/tourist-1.png",
    },
    {
      destination: "JAPANESE COUNTRY",
      photoBy: "ULINNAJA A",
      image: "/dist/assets/images/tourist-2.png",
    },
    {
      destination: "TSUHIMA JAPANESE",
      photoBy: "MAIK ULINNAJA",
      image: "/dist/assets/images/tourist-1.png",
    },
  ];

  connectedCallback() {
    this.render();
  }

  render() {
    let sliderImageWrapper = "";
    this.datas.map((data) => {
      sliderImageWrapper += `
        <div class="swiper-slide">
          <img
            src="${data.image}"
            alt="${data.destination}"
            class="h-[540px] w-[768px] object-cover"
          />
        </div>`;
    });
    const touristSlider = document.createElement("tourist-slider");
    touristSlider.setAttribute("imageItem", sliderImageWrapper);
    this.appendChild(touristSlider);

    var swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    swiper.on("slideChange", () => {
      var index = swiper.realIndex;
      var slide = this.datas[index];
      document.querySelector("#destination").textContent = slide.destination;
      document.querySelector("#photoBy").textContent = slide.photoBy;
    });
  }
}

customElements.define("photo-from-tourist-element", PhotoFromTouristElement);
