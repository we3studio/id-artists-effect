gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    autoRaf: true,
  });

  const container = document.querySelector(".effect .container");
  const cardsContainer = container.querySelector(".cards");
  const cards = document.querySelectorAll(".card");
  const distance = cardsContainer.clientWidth - window.innerWidth;

  const scrollTween = gsap.to(cardsContainer, {
    x: -distance,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 0.3,
      start: "top top",
      end: "+=" + distance * 0.8,
    },
  });

  cards.forEach((card) => {
    const values = {
      x: (Math.random() * 20 + 30) * (Math.random() < 0.5 ? 1 : -1),
      y: (Math.random() * 6 + 10) * (Math.random() < 0.5 ? 1 : -1),
      rotation: (Math.random() * 10 + 10) * (Math.random() < 0.5 ? 1 : -1),
    };

    gsap.fromTo(
      card,
      {
        rotation: values.rotation,
        xPercent: values.x,
        yPercent: values.y,
      },
      {
        rotation: -values.rotation,
        xPercent: -values.x,
        yPercent: -values.y,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          containerAnimation: scrollTween,
          start: "left 120%",
          end: "right -20%",
          scrub: 0.3,
        },
      },
    );
  });
});
