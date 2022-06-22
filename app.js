const arrows = document.querySelectorAll(".arrow");
const articleLists = document.querySelectorAll(".article-list");

arrows.forEach((arrow, i) => {
  const itemNumber = articleLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 180);
    clickCounter++;
    if (itemNumber - clickCounter - ratio >= 0) {
      articleLists[i].style.transform = `translateX(${
        articleLists[i].computedStyleMap().get("transform")[0].x.value - 200
      }px)`;
    } else {
      articleLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
