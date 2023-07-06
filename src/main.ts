import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Swiper from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", function () {
  /* Video Play */
  const video = document.getElementById("myVideo") as HTMLVideoElement;
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  /*Our work slider*/
  // @ts-ignore
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    freeMode: true,
    initialSlide: 1,
    pagination: false,
  });

  $(".who-we-are-wrapper").each(function () {
    let sectionHeading = $(this).find(".who-we-are-p");
    let sectionSpans = $(this).find(".wave-link");
    let sectionItems = $(this).find(".about_item");

    sectionSpans.each(function (index) {
      let relatedImages = sectionItems.eq(index).find(".about_image");

      gsap.matchMedia().add("(min-width: 992px)", () => {
        let tl = gsap.timeline({ paused: true, defaults: { duration: 0.2 } });
        tl.set($(this), { zIndex: 3 });
        tl.to(relatedImages, {
          opacity: 1,
          // scale: 1,
          // move: 1,
          ease: "power4.out",
        });
        tl.fromTo(
          sectionHeading,
          { color: "#000000" },
          { color: "rgba(0, 0, 0, 0.2)" },
          "<"
        );

        $(this).on("mouseenter", function () {
          tl.timeScale(1);
          tl.play();
        });
        $(this).on("mouseleave", function () {
          tl.timeScale(2);
          tl.reverse();
        });
      });
    });
  });

  gsap.utils
    .toArray<HTMLElement>("[mt-el=background]")
    .forEach(function (elem) {
      var color = elem.getAttribute("data-color") as string;
      if (color !== null) {
        ScrollTrigger.create({
          trigger: elem,
          start: "top 0%",
          end: "bottom 0%",
          onEnter: () =>
            gsap.to("main", {
              backgroundColor: color,
              duration: 0.3,
              ease: "power2.inOut",
            }),
          onLeave: () =>
            gsap.to("main", {
              backgroundColor: color,
              duration: 0.3,
              ease: "power2.inOut",
            }),
          onLeaveBack: () =>
            gsap.to("main", {
              backgroundColor: color,
              duration: 0.3,
              ease: "power2.inOut",
            }),
          onEnterBack: () =>
            gsap.to("main", {
              backgroundColor: color,
              duration: 0.3,
              ease: "power2.inOut",
            }),
          markers: true,
        });
      }
    });
  // Get all the scroll sections
  const sections = document.querySelectorAll<HTMLElement>(
    "[mt-el=background-2]"
  );
  // Loop through each section
  sections.forEach(function (section) {
    // Create a ScrollTrigger for each section
    gsap.registerPlugin(ScrollTrigger);

    // Set up the animation
    gsap.to(section, {
      background: "linear-gradient(#DEEAFF 0%, #DEEAFF 80%, #05086A 100%)",
      scrollTrigger: {
        trigger: section,
        start: "top 20%",
        end: "bottom 10%",
        scrub: true, // Smoothly animate the background gradient
      },
    });
  });
});
