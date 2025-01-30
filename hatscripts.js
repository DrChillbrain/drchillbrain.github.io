document.addEventListener("DOMContentLoaded", function () {
  const hatImages = document.querySelectorAll(".Hat");

  hatImages.forEach((hatImage) => {
    hatImage.addEventListener("click", function () {
      const contentDiv = this.nextElementSibling;

      if (contentDiv.style.maxHeight) {
        contentDiv.style.maxHeight = null;
        contentDiv.style.opacity = 0;
      } else {
        contentDiv.style.maxHeight = contentDiv.scrollHeight + "px";
        contentDiv.style.opacity = 1;
      }
    });
  });
});
