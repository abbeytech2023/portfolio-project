const mobileNav = document.querySelector(".btn-mobile-nav");
const logo = document.querySelector(".logo");
const btnSeeMore = document.querySelector(".mywork-btn");
const tabLink = document.querySelectorAll(".tab-links");
const activeLink = document.querySelector(".active-link");
const tabActiveLink = document.querySelector(".tab-links.active-link");
const styles = window.getComputedStyle(tabActiveLink, "::after");
console.log(styles.content);

console.log(styles.backgroundColor);

// Smooth scroll into section
// document
//   .querySelector(".main-nav-link")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     if (e.target.closest(".main-nav-link")) {
//       console.log(e.target);
//       const id = e.target.getAttribute("href");
//       console.log(id);
//       document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     }
//   });

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     if (href === "#") window.scrollTo({ top: 0, behaviour: "smooth" });
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

// theme change

const theme = document.querySelector(".theme");
const body = document.body;

const mainNavLinkAll = document.querySelectorAll(".main-nav-link");
const headerContainer = document.querySelector(".con-header");
const mainNavList = document.querySelector(".main-nav-list");
const btnHire = document.querySelector(".btn-hire");
const sectionAbout = document.querySelector(".section-about");
const workLinks = document.querySelectorAll(".work-link");
const subtitles = document.querySelectorAll(".sub-title");
const years = document.querySelectorAll(".years");
const layer = document.querySelectorAll(".layer");
const h1 = document.querySelectorAll("h1");
const aboutMe = document.querySelector(".about-me");
const headerText = document.querySelector(".header-text");
const lastNavLink = document.querySelector(".last-nav-link");

theme.addEventListener("click", () => {
  theme.textContent = "light";
  theme.style.color = "#fff";
  body.classList.toggle("dark-mode");

  h1.forEach((heading) => {
    if (body.classList.contains("dark-mode")) {
      theme.textContent = "Light-Mode";
      theme.style.color = "goldenrod";
      btnSeeMore.style.color = "#fff";
      btnSeeMore.style.backgroundColor = "rgb(221, 73, 19)";
      mobileNav.style.backgroundColor = "rgb(221, 73, 19)";
      heading.style.color = "goldenrod";
    } else {
      heading.style.color = "#fff";
      theme.textContent = "Dark-Mode";
      theme.style.color = "#fff";
      btnSeeMore.style.color = "#fff";
      btnSeeMore.style.backgroundColor = "#225252";
      mobileNav.style.backgroundColor = "#225252";
    }
  });

  workLinks.forEach((work) => {
    if (body.classList.contains("dark-mode")) {
      work.style.backgroundColor = "#000";
      work.style.color = "#fff";
      headerText.style.color = "#fff";
      lastNavLink.style.backgroundColor = "rgb(221, 73, 19)";
      btnHire.style.backgroundColor = "rgb(221, 73, 19)";
      tabActiveLink.style.setProperty("rgb(1, 30, 87)", "goldenrod");
    } else {
      work.style.backgroundColor = "blue";

      work.style.color = "#fff";
      lastNavLink.style.backgroundColor = "#225252";
      btnHire.style.backgroundColor = "#225252";
    }
  });

  mainNavLinkAll.forEach((nav) => {
    nav.classList.toggle("dark-mode");
    if (nav.classList.contains("dark-mode")) {
      nav.style.backgroundColor = "none";
    } else {
    }
  });

  subtitles.forEach((title) => {
    body.classList.contains("dark-mode")
      ? (title.style.color = "goldenrod")
      : (title.style.color = "rgb(1, 30, 87)");
  });

  years.forEach((year) => {
    body.classList.contains("dark-mode")
      ? (year.style.color = "goldenrod")
      : (year.style.color = "rgb(1, 30, 87)");
  });

  layer.forEach((lay) => {
    if (body.classList.contains("dark-mode")) {
      lay.style.color = "goldenrod";
      lay.style.backgroundColor = "#333";
      // styles.backgroundColor = "goldenrod";
      logo.style.color = "goldenrod";
      mobileNav.style.color = "goldenrod";
      aboutMe.style.backgroundColor = "goldenrod";
    } else {
      logo.style.color = "#fff";
      mobileNav.style.color = "#fff";
      aboutMe.style.backgroundColor = "#fff";
      lay.style.color = "black";
      lay.style.backgroundColor = "rgb(196, 213, 251)";
    }
  });
  sectionAbout.classList.toggle("about-light-mode");
  sectionAbout.classList.toggle("about-dark-mode");
});

//Reveal on Scroll
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    // console.log(entry.target);
    if (entry.isIntersecting) entry.target.classList.remove("hide-section");
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("hide-section");
});

const hideSection = document.querySelector(".hide-section");
console.log(hideSection);

const tabContents = document.querySelectorAll(".tab-contents");
const tabTitle = document.querySelector(".tab-titles");

tabTitle.addEventListener("click", function (e) {
  //Removing the default active-link
  tabLink.forEach((tab) => {
    tab.classList.remove("active-link");
  });
  // e.target.closest is used to select the closest tablink that is clicked on
  e.target.closest(".tab-links").classList.add("active-link");

  tabContents.forEach((tab) => tab.classList.remove("active-tab"));

  console.log(e.target);
  tabContents.forEach((tab) => {
    // console.log(tab.id);
    if (tab.id === e.target.textContent) tab.classList.add("active-tab");
    // console.log(tab);
  });
});

//----------------------Sticky Nav----------------------/
const sectionHero = document.querySelector(".con-header");
// console.log(sectionHero);
const navList = document.querySelector(".main-nav-list");
console.log(navList);

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
      navList.style.display = "flex";
    }
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
      navList.style.display = "none";
      logo.style.padding = "1rem";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

obs.observe(sectionHero);

//////////BTN MOBILE NAV///////////////////////

const mainNav = document.querySelector(".main-nav");
const navigation = document.querySelector("nav");

mobileNav.addEventListener("click", function (e) {
  e.preventDefault();
  navigation.classList.toggle("mobile-nav");
});

const work = document.querySelectorAll(".work");
const workShow = document.querySelectorAll(".work-show");

btnSeeMore.addEventListener("click", function (e) {
  e.preventDefault();
  workShow.forEach((wrk) => {
    wrk.classList.toggle("rest");
    !wrk.classList.contains("rest")
      ? (btnSeeMore.textContent = "View less")
      : (btnSeeMore.textContent = "View More");
  });
});

//////////////////////////////////////////////////////////////////////////////////
// tabLink.forEach((tab) =>
//   tab.addEventListener("click", function (e) {
//     const displayTab = e.target;

//     displayTab.classList.remove("active-link");

//     displayTab.classList.toggle("active-link");
//     // displayTab.style.dispay = "block";
//     skills.classList.toggle("active-tab");
//     console.log(showTab);
//   })
// );
