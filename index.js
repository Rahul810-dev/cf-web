
    /* typewriter effect */
    const phrases = ["Ayush Kapoor"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 1000;
    const fadeDelay = 700;

    let textEl = document.getElementById("text");
    let typewriterEl = document.getElementById("typewriter");
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting && charIndex <= currentPhrase.length) {
        textEl.textContent = currentPhrase.substring(0, charIndex++);
        setTimeout(type, typingDelay);
      } else if (isDeleting && charIndex >= 0) {
        textEl.textContent = currentPhrase.substring(0, charIndex--);
        setTimeout(type, erasingDelay);
      } else if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, newTextDelay);
      } else {
        typewriterEl.classList.add("fade-out");
        setTimeout(() => {
          typewriterEl.classList.remove("fade-out");
          isDeleting = false;
          charIndex = 0;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 300);
        }, fadeDelay);
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(type, 1000);
    });

    /* custom cursor */
    const bodycursor = document.getElementById("cursor");
    document.addEventListener("mousemove", (e) => {
      bodycursor.style.left = e.clientX + "px";
      bodycursor.style.top = e.clientY + "px";

      // create trail
      const trail = document.createElement("div");
      trail.className = "trail";
      trail.style.left = e.clientX + "px";
      trail.style.top = (e.clientY + 20) + "px";
      document.body.appendChild(trail);

      setTimeout(() => trail.remove(), 600);
    });