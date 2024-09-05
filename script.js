var elemC = document.querySelector(".elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

var loader = document.querySelector("#loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 4200);

document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  });
});

// document.querySelectorAll("#child1").addEventListener("mouseenter", function () {
//   gsap.to("#cursor", {
//     transform: `translate(-50%,-50%) scale(1)`,
//   });
// });

// document.querySelector("#child1").addEventListener("mouseleave", function () {
//   gsap.to("#cursor", {
//     transform: `translate(-50%,-50%) scale(0)`,
//   });
// });

document.querySelectorAll(".child").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: `translate(-50%,-50%) scale(1)`,
    });
  });
});

document.querySelectorAll(".child").forEach(function (elem) {
  elem.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: `translate(-50%,-50%) scale(0)`,
    });
  });
});
