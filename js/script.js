document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  const cards = document.querySelectorAll(".work-card");
  const btn = document.getElementById("show-all");


  // Bolt: Simplified script. Removed redundant card hiding loop as cards are now hidden via HTML classes.
  // This reduces Total Blocking Time (TBT) on page load.

  // Бургер
  burger?.addEventListener("click", () => {
    nav?.classList.toggle("active");
    burger?.classList.toggle("active");
  });

  // Скрытие карточек
  let expanded = false;

  btn?.addEventListener("click", () => {
    expanded = !expanded;
    cards.forEach((card, index) => {
      if (index >= 6) {
        card.classList.toggle("hidden", !expanded);
      }
    });
    btn.textContent = expanded ? "show less" : "show all";
    btn.scrollIntoView({behavior:'smooth', block: 'end'})
  });

  // Fancybox
  Fancybox.bind("[data-fancybox]", {

    hash: true,
    Thumbs: {
      key: "f",
    },
    compact: false,
    wheel: "slide",
    contentClick: "toggleCover",

    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },

    Images: {
      Panzoom: {
        panMode: "mousemove",
        mouseMoveFactor: 10,
        mouseMoveFriction: 0.1,
      },
    },
      
    Html: {
      youtube: {
        controls: 1,
        showinfo: 0,
        rel: 0,
        fs: 0,
      },
    }, 
  

  })
});
