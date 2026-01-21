const homeButton = document.getElementById("button1");
const aboutButton = document.getElementById("button2");

if (homeButton) {
  homeButton.addEventListener("mouseenter", () => {
    homeButton.classList.add("is-active");
  });

  homeButton.addEventListener("mouseleave", () => {
    homeButton.classList.remove("is-active");
  });
}

if (aboutButton) {
  aboutButton.addEventListener("mouseenter", () => {
    aboutButton.classList.add("is-active");
  });

  aboutButton.addEventListener("mouseleave", () => {
    aboutButton.classList.remove("is-active");
  });
}

/*window.onload = function(){
setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 3000);
}*/ // Scrolls to the botton of the page after 3 seconds (Currently not in use)

// Check if animations have already played this session
if (sessionStorage.getItem("mainAnimated")) {
  document.documentElement.classList.add("no-anim");
} else {
  // Mark that animations have played
  sessionStorage.setItem("mainAnimated", "true");
}

