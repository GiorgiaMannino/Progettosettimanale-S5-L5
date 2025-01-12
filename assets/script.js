window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".heroSection");
  const navItem5 = document.querySelector("nav ul li:nth-child(5)");

  const headerBottom = header.getBoundingClientRect().bottom;

  const heroSectionBottom = heroSection.getBoundingClientRect().bottom;

  if (headerBottom >= heroSectionBottom) {
    header.classList.add("sticky-header");
    navItem5.classList.add("active");
  } else {
    header.classList.remove("sticky-header");
    navItem5.classList.remove("active");
  }
});
