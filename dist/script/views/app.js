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
  const hamburger = document.querySelector("#hamburger");
  const navlist = document.querySelector("#navlist");
  const slice1 = document.querySelector("#slice1");
  const slice2 = document.querySelector("#slice2");
  const slice3 = document.querySelector("#slice3");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbarElement.classList.add(
        "bg-primary/10",
        "backdrop-blur",
        "mt-0",
        "py-3",
        "drop-shadow-md"
      );
      navbarElement.classList.remove("mt-8", "xl:mt-16");

      navlist.classList.remove("-top-8");
      navlist.classList.add("top-0");
    } else {
      navbarElement.classList.remove(
        "bg-primary/10",
        "backdrop-blur",
        "mt-0",
        "py-3",
        "drop-shadow-md"
      );
      navbarElement.classList.add("mt-8", "xl:mt-16");
      navlist.classList.remove("top-0");
      navlist.classList.add("-top-8");
    }
  });

  // Hamburger toogle
  hamburger.addEventListener("click", () => {
    navlist.classList.toggle("hidden");
    hamburger.classList.remove("gap-2");
    hamburger.classList.add("gap-0");
    slice1.classList.toggle("rotate-45");
    slice2.classList.toggle("hidden");
    slice3.classList.toggle("-rotate-45");
    slice3.classList.toggle("-translate-y-1");

    if (navlist.classList.contains("hidden")) {
      hamburger.classList.remove("gap-0");
      hamburger.classList.add("gap-2");
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
    gradientGallery.classList.remove("h-[300px]", "md:h-[400px]");
    gradientGallery.classList.add("h-[0px]");
    seeMoreGallery.classList.remove("opacity-100");
    seeMoreGallery.classList.add("opacity-0", "translate-y-5");
  });
};

export default app;
