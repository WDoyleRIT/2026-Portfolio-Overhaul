window.onload = function(){
setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 3000);
}

// Check if animations have already played this session
if (sessionStorage.getItem("mainAnimated")) {
  document.documentElement.classList.add("no-anim");
} else {
  // Mark that animations have played
  sessionStorage.setItem("mainAnimated", "true");
}