// Initialize Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Loader
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.to("#loader-text", {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    })
        .to("#loader-text", {
            opacity: 0,
            duration: 0.5,
            delay: 0.5
        })
        .to("#loader", {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut"
        });
});

// Scroll Triggers
gsap.to("#feature-img", {
    scrollTrigger: {
        trigger: "#omakase",
        start: "top center",
        toggleClass: "revealed",
        toggleActions: "play none none reverse"
    }
});
