const loader = document.querySelector(".circle");
const right = document.querySelector(".section-right");
const left = document.querySelector(".section-left");
const covers = document.querySelector("#loader-wrapper");
const fade = function () {
  loader.classList.add("loader");
  right.classList.add("loader");
  left.classList.add("loader");
  covers.classList.add("loader");
};

window.addEventListener("load", () => setTimeout(fade, 3000));

gsap.registerPlugin(ScrollTrigger);

window.addEventListener(
  "load",
  () =>
    function () {
      gsap.from(".p", {
        autoAlpha: 0,
        x: "100%",
        duration: 0.5,
        delay: 5,
      });
      gsap.from(".female1", {
        autoAlpha: 0,
        x: "-100%",
        duration: 0.5,
        delay: 5,
      });
    }
);
// gsap.from(".p", {
//   autoAlpha: 0,
//   x: "100%",
//   duration: 0.5,
//   delay: 4,
// });

// gsap.from(".female1", {
//   autoAlpha: 0,
//   x: "-100%",
//   duration: 0.5,
//   delay: 4,
// });
gsap.to(".topSection p", {
  x: "-150%",

  scrollTrigger: {
    trigger: ".emptySection",
    toggleActions: "restart pause reverse continue",
    start: "top 80%",
    end: "bottom 100%",
    scrub: 1,
    pin: ".topSec",
    // markers: true,
  },
});

gsap.to(".female1", {
  x: "300%",

  scrollTrigger: {
    trigger: ".emptySection",

    toggleActions: "restart pause reverse continue",
    start: "top 80%",
    end: "bottom 100%",
    scrub: 1,
    // pin: ".female1",
  },
});

gsap.from(".tribe", {
  autoAlpha: 0,
  y: "-100%",
  duration: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".tops",

    toggleActions: "restart none none none",
    start: "top 60%",

    // scrub: 1,
    // pin: ".female1",
  },
});

//slider effect for UnderBoss tribe

const underBoss = document.querySelector(".underBossImg");
const ubPrev = document.querySelector(".prev");
const ubNext = document.querySelector(".next");
let ubCount = 1;

ubNext.addEventListener("click", function () {
  console.log("haa");
  if (ubCount >= 1 && ubCount < 10) {
    ubCount += 1;
    gsap.fromTo(
      underBoss,
      {
        autoAlpha: 0,
        x: "50%",
        duration: 0.5,
        ease: "power4",
      },
      { autoAlpha: 1, x: "0%" }
    );
    underBoss.src = `./mafia images/Underboss Tribe/${ubCount}.png`;
    console.log(ubCount);
  }
});

ubPrev.addEventListener("click", function () {
  if (ubCount >= 2 && ubCount <= 10) {
    ubCount -= 1;
    underBoss.src = `./mafia images/Underboss Tribe/${ubCount}.png`;
    gsap.fromTo(
      underBoss,
      {
        autoAlpha: 0,
        x: "-50%",
        ease: "power4",
      },
      { autoAlpha: 1, x: "0%" }
    );
  }
});

//slider effect for consigliere tribe

const consig = document.querySelector(".consigliereImg");
const ctPrev = document.querySelector(".prevCT");
const ctNext = document.querySelector(".nextCT");
let ctCount = 1;

ctNext.addEventListener("click", function () {
  if (ctCount >= 1 && ctCount < 10) {
    ctCount += 1;
    gsap.fromTo(
      consig,
      {
        autoAlpha: 0,
        x: "50%",
        duration: 0.5,
        ease: "power4",
      },
      { autoAlpha: 1, x: "0%", duration: 0.5 }
    );
    consig.src = `./mafia images/Consigliere tribe/${ctCount}.png`;
  }
});

ctPrev.addEventListener("click", function () {
  if (ctCount >= 2 && ctCount <= 10) {
    ctCount -= 1;
    consig.src = `./mafia images/Consigliere tribe/${ctCount}.png`;
    gsap.fromTo(
      consig,
      {
        autoAlpha: 0,
        x: "-30%",
        duration: 0.5,
        ease: "power4",
      },
      { autoAlpha: 1, x: "0%" }
    );
  }
});

//slider effect for capo tribe

const capo = document.querySelector(".capoImg");
const cpPrev = document.querySelector(".prevCP");
const cpNext = document.querySelector(".nextCP");
let cpCount = 1;

cpNext.addEventListener("click", function () {
  if (cpCount >= 1 && cpCount < 20) {
    cpCount += 1;
    gsap.fromTo(
      capo,
      {
        autoAlpha: 0,
        x: "50%",
        duration: 0.5,
        ease: "power4",
      },
      { autoAlpha: 1, x: "0%", duration: 0.5 }
    );
    capo.src = `./mafia images/Capo Tribe/${cpCount}.png`;
  }
});

cpPrev.addEventListener("click", function () {
  if (cpCount >= 2 && cpCount <= 20) {
    cpCount -= 1;
    capo.src = `./mafia images/Capo Tribe/${cpCount}.png`;
    gsap.fromTo(
      capo,
      {
        autoAlpha: 0,
        x: "-30%",
        duration: 0.5,
        ease: "power4",
      },
      { autoAlpha: 1, x: "0%" }
    );
  }
});

//slider effect for soldiers tribe

const soldiers = document.querySelector(".soldiersImg");
const sPrev = document.querySelector(".prevS");
const sNext = document.querySelector(".nextS");
let sCount = 1;

sNext.addEventListener("click", function () {
  if (sCount >= 1 && sCount < 50) {
    sCount += 1;

    gsap.fromTo(
      soldiers,
      {
        autoAlpha: 0,
        x: "50%",
        duration: 0.5,
        ease: "power4",
      },
      { autoAlpha: 1, x: "0%", duration: 0.5 }
    );
    soldiers.src = `./mafia images/soldier/${sCount}.png`;
  }
});

sPrev.addEventListener("click", function () {
  if (sCount >= 2 && sCount <= 50) {
    sCount -= 1;
    soldiers.src = `./mafia images/soldier/${sCount}.png`;
    gsap.fromTo(
      soldiers,
      {
        autoAlpha: 0,
        x: "-30%",
        duration: 0.5,
        ease: "power4",
      },
      { autoAlpha: 1, x: "0%" }
    );
  }
});
