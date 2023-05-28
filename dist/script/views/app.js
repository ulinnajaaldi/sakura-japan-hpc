const app = () => {
  const video = document.querySelector("#myVideo");
  const playButton = document.querySelector("#playButton");
  const pauseButton = document.querySelector("#pauseButton");

  playButton.addEventListener("click", () => {
    video.play();
    playButton.classList.add("hidden");
    pauseButton.classList.remove("hidden");
  });

  video.addEventListener("mouseover", () => {
    if (!video.paused) {
      pauseButton.classList.remove("hidden");
      playButton.classList.add("hidden");
    }
  });

  video.addEventListener("mouseout", () => {
    pauseButton.classList.add("hidden");
  });

  pauseButton.addEventListener("click", () => {
    video.pause();
    pauseButton.classList.add("hidden");
    playButton.classList.remove("hidden");
  });

  pauseButton.addEventListener("mouseover", (event) => {
    event.stopPropagation();
    pauseButton.classList.remove("hidden");
  });

  const navbarElement = document.querySelector("#navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbarElement.classList.add(
        "bg-primary/10",
        "backdrop-blur",
        "mt-0",
        "py-3",
        "drop-shadow-md"
      );
      navbarElement.classList.remove("mt-16");
    } else {
      navbarElement.classList.remove(
        "bg-primary/10",
        "backdrop-blur",
        "mt-0",
        "py-3",
        "drop-shadow-md"
      );
      navbarElement.classList.add("mt-16");
    }
  });

  const cards = document.querySelectorAll("#card");
  cards.forEach((card) => {
    const cardImageContainer = card.querySelector("#cardImageContainer");
    const cardArrowContainer = card.querySelector("#cardArrowContainer");
    const cardArrow = card.querySelector("#cardArrow");
    const cardDesc = card.querySelector("#cardDesc");

    card.addEventListener("mouseout", () => {
      cardImageContainer.classList.add("blur-none");
      cardImageContainer.classList.remove("blur-[2px]");
      cardArrowContainer.classList.add("-translate-y-0");
      cardArrowContainer.classList.remove("-translate-y-56");
      cardArrow.classList.add("rotate-0");
      cardArrow.classList.remove("rotate-180");
      cardDesc.classList.add("opacity-0");
      cardDesc.classList.remove("opacity-100");
    });
    card.addEventListener("mouseover", () => {
      cardImageContainer.classList.remove("blur-none");
      cardImageContainer.classList.add("blur-[2px]");
      cardArrowContainer.classList.remove("-translate-y-0");
      cardArrowContainer.classList.add("-translate-y-56");
      cardArrow.classList.remove("rotate-0");
      cardArrow.classList.add("rotate-180");
      cardDesc.classList.remove("opacity-0");
      cardDesc.classList.add("opacity-100");
    });
  });

  const gradientGallery = document.querySelector("#gradientGallery");
  const seeMoreGallery = document.querySelector("#seeMoreGallery");
  seeMoreGallery.addEventListener("click", () => {
    gradientGallery.classList.remove("h-[400px]");
    gradientGallery.classList.add("h-[0px]");
    seeMoreGallery.classList.remove("opacity-100");
    seeMoreGallery.classList.add("opacity-0", "translate-y-5");
  });
};

export default app;
