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

//Navbar handleOnScroll
const navbarElement = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navbarElement.classList.add(
      "bg-primary/10",
      "backdrop-blur",
      "mt-0",
      "py-3",
      "drop-shadow-md"
    );
  } else {
    navbarElement.classList.remove(
      "bg-primary/10",
      "backdrop-blur",
      "mt-0",
      "py-3",
      "drop-shadow-md"
    );
  }
});
