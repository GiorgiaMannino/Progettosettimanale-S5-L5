window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".heroSection");
  const navItem5 = document.querySelector("nav ul li:nth-child(5)");

  // Ottieni la posizione del bordo inferiore dell'header
  const headerBottom = header.getBoundingClientRect().bottom;

  // Ottieni la posizione del bordo inferiore della heroSection
  const heroSectionBottom = heroSection.getBoundingClientRect().bottom;

  // Se la base dell'header tocca la base della heroSection, aggiungi la classe
  if (headerBottom >= heroSectionBottom) {
    header.classList.add("sticky-header");
    navItem5.classList.add("active"); // Aggiungi classe anche al 5° elemento
  } else {
    header.classList.remove("sticky-header");
    navItem5.classList.remove("active"); // Rimuovi classe dal 5° elemento
  }
});
