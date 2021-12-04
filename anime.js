let textWrapper = document.querySelector('.title');




textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.title .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1,
    delay: (el, i) => 150 * (i+1)
  });
