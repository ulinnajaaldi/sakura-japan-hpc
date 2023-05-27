class TouristSlider extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <div class="container mt-14 flex items-center justify-center gap-16">
          <div class="flex-1">
            <img
              src="/dist/assets/logo.png"
              alt="Logo Sakura Japan"
              class="mb-7 h-[68px] w-[68px]"
            />
            <p class="text-[25px] font-semibold text-accent">対馬島</p>
            <h1 class="pt-1 text-[50px] font-bold" id="destination">
                TSUHIMA ISLAND
            </h1>
            <p class="py-8 text-lg font-medium tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <div class="flex items-center justify-between text-lg font-bold">
              <p class="text-white/50">PHOTO BY</p>
              <p id="photoBy">MAIK KOZOZKI</p>
            </div>
          </div>
          <div class="swiper mySwiper w-[768px]">
            <div class="swiper-wrapper" id="sliderWrapper">
                ${this.getAttribute("imageItem")}
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
        `;
  }
}

customElements.define("tourist-slider", TouristSlider);
