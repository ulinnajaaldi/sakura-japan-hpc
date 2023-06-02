class CardGetKnowJapan extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="relative h-[421px] select-none cursor-pointer" id="card">
      <div
        class="relative h-full w-full blur-none"
        id="cardImageContainer"
      >
        <img
          src="${this.getAttribute("image")}"
          alt="${this.getAttribute("title")}"
          class="h-full w-full object-cover object-bottom"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
        ></div>
      </div>
      <div
        class="absolute bottom-5 left-1/2 w-full -translate-x-1/2 px-10"
      >
        <div
          class="flex -translate-y-0 flex-col items-center transition-all duration-300"
          id="cardArrowContainer"
        >
          <p class="text-lg sm:text-2xl xl:text-3xl font-medium">${this.getAttribute(
            "title"
          )}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            class="rotate-0 duration-300"
            id="cardArrow"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
              />
              <path
                fill="white"
                d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.121l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12l5.657-5.658Z"
              />
            </g>
          </svg>
        </div>
        <p
          class="absolute bottom-3 left-1/2 w-full -translate-x-1/2 px-2 sm:px-7 xl:px-10 pt-8 text-center text-base xl:text-lg opacity-0 transition-all duration-300"
          id="cardDesc"
        >
        ${this.getAttribute("description")}
        </p>
      </div>
    </div>`;
  }
}

customElements.define("card-get-know-japan", CardGetKnowJapan);
