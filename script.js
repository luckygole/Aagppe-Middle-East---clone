const image = document.getElementById("scrollImage");
let scrollPosition = 0;

window.addEventListener("scroll", () => {
  const newPosition = window.scrollY;
  const rotationSpeed = (newPosition - scrollPosition) * 4; // Adjust speed multiplier here
  scrollPosition = newPosition;

  // Apply rotation based on scroll speed
  image.style.transform = `rotate(${rotationSpeed}deg)`;
});

const header = document.querySelector("header");

gsap.to("header" , {
  backgroundColor:"white",
  duration:0.9,
  scrollTrigger:{
      // markers:true,
      start:"top -10%",
      end:"top -11px",
      trigger:"nav",
      scroller:"body",
      scrub:1
  }
});