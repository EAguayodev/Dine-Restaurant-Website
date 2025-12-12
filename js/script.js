// home page js displaying different event types
const btnGathering = document.querySelector(".btn-gathering");
const btnSocial = document.querySelector(".btn-social");
const btnSpecial = document.querySelector(".btn-special");

const eventHeading = document.querySelector(".event-heading");
const eventDescription = document.querySelector(".event-description");
const eventImage = document.querySelector(".event-img");
const picture = eventImage.parentElement;
const sources = picture.querySelectorAll("source");

btnGathering.addEventListener("click", () => {
  eventHeading.textContent = "Family Gathering";
  eventDescription.textContent =
  "We love catering for entire families. So please bring everyone along for a special meal to remember. We’ll provide a memorable experience for all ages.";
  sources[0].srcset = "images/homepage/family-gathering-desktop.jpg";
  sources[1].srcset = "images/homepage/family-gathering-tablet.jpg";
  sources[2].srcset = "images/homepage/family-gathering-mobile.jpg";
  eventImage.src = "images/homepage/family-gathering-mobile.jpg";
});

btnSpecial.addEventListener("click", () => {
  eventHeading.textContent = "Special Events";
  eventDescription.textContent =
  "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.";
  sources[0].srcset = "images/homepage/special-events-desktop.jpg";
  sources[1].srcset = "images/homepage/special-events-tablet.jpg";
  sources[2].srcset = "images/homepage/special-events-mobile.jpg";
  eventImage.src = "images/homepage/special-events-mobile.jpg";
});

btnSocial.addEventListener("click", () => {
  eventHeading.textContent = "Social Events";
  eventDescription.textContent =
  "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.";
  sources[0].srcset = "images/homepage/social-events-desktop.jpg";
  sources[1].srcset = "images/homepage/social-events-tablet.jpg";
  sources[2].srcset = "images/homepage/social-events-mobile.jpg";
  eventImage.src = "images/homepage/social-events-mobile.jpg";
});