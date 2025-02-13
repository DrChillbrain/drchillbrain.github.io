let currentOpen = null;
let scrollingToProject = false;

function toggleHatContent(index) {
  const content = document.getElementById(`hat-content-${index}`);
  const img = content.previousElementSibling;
  const hat = img.parentElement;

  if (currentOpen !== null && currentOpen !== content) {
    currentOpen.classList.remove("open");
    resetHatImage(currentOpen.previousElementSibling);
  }
  console.log("toggleHatContent:" + scrollingToProject);
  scrollToHat(hat, content, img);
}

function scrollToHat(hat, content, img) {
  if (content.classList.contains("open")) {
    content.classList.remove("open");
    resetHatImage(img);
    currentOpen = null;
  } else {
    content.classList.add("open");
    setOpenHatImage(img);
    currentOpen = content;
    console.log("scrollToHat:" + scrollingToProject);
    if (!scrollingToProject) {
      setTimeout(() => {
        hat.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  }
}

function resetHatImage(img) {
  if (img.classList.contains("hatImg1")) {
    img.src = "hatimg/LeaderHatClosed.webp";
  } else if (img.classList.contains("hatImg2")) {
    img.src = "hatimg/CollaborationHatClosed.webp";
  } else if (img.classList.contains("hatImg3")) {
    img.src = "hatimg/CreativeTechHatClosed.webp";
  } else if (img.classList.contains("hatImg4")) {
    img.src = "hatimg/GameHatClosed.webp";
  } else if (img.classList.contains("hatImg5")) {
    img.src = "hatimg/GraphicHatClosed.webp";
  } else if (img.classList.contains("hatImg6")) {
    img.src = "hatimg/ProgramHatClosed.webp";
  }
}

function setOpenHatImage(img) {
  if (img.classList.contains("hatImg1")) {
    img.src = "hatimg/LeaderHatOpen.webp";
  } else if (img.classList.contains("hatImg2")) {
    img.src = "hatimg/CollaborationHatOpen.webp";
  } else if (img.classList.contains("hatImg3")) {
    img.src = "hatimg/CreativeTechHatOpen.webp";
  } else if (img.classList.contains("hatImg4")) {
    img.src = "hatimg/GameHatOpen.webp";
  } else if (img.classList.contains("hatImg5")) {
    img.src = "hatimg/GraphicHatOpen.webp";
  } else if (img.classList.contains("hatImg6")) {
    img.src = "hatimg/ProgramHatOpen.webp";
  }
}

function scrollToProject(index) {
  scrollingToProject = true;
  const project = document.querySelectorAll(".project")[index - 1];
  const hatContent = project.closest(".hat-content");
  const hatContents = document.querySelectorAll(".hat-content");
  const hatIndex = Array.from(hatContents).indexOf(hatContent) + 1;
  if (!hatContent.classList.contains("open")) {
    toggleHatContent(hatIndex);
    setTimeout(() => {
      project.scrollIntoView({ behavior: "smooth" });
    }, 120);
  } else {
    setTimeout(() => {
      project.scrollIntoView({ behavior: "smooth" });
    }, 120);
  }
  scrollingToProject = false;
}
