import "./card/card-get-know-japan.js";

class GetKnowJapanElement extends HTMLElement {
  datas = [
    {
      title: "CULTURE",
      image: "/dist/assets/images/japan-culture.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "CULINARY",
      image: "/dist/assets/images/japan-culinary.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "TECHNOLOGY",
      image: "/dist/assets/images/japan-tech.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "TOUR",
      image: "/dist/assets/images/japan-tour.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "SEASON",
      image: "/dist/assets/images/japan-season.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  connectedCallback() {
    this.render();
  }

  render() {
    let cardList = "";
    let dataToDisplay = this.datas;
    if (window.innerWidth < 1024) {
      dataToDisplay = this.datas.slice(0, 4);
    } else {
      dataToDisplay = this.datas;
    }
    dataToDisplay.map((data) => {
      cardList += `
        <card-get-know-japan
            title="${data.title}"
            image="${data.image}"
            description="${data.description}"
        ></card-get-know-japan>
        `;
    });
    this.innerHTML = `
      <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center md:gap-0">
        ${cardList}
    </div>`;
  }
}

customElements.define("get-know-japan-element", GetKnowJapanElement);
