"use strict";
// SELECTIONS
const container = document.querySelector(".container");
const allTabs = document.querySelectorAll(".tab");
// EVENT HANDLERS
container.addEventListener("click", function (e) {
  const clicked = e.target;
  const currentTab = document.querySelector(
    `[data-tab="${clicked.dataset.number}"]`
  );
  if (!clicked.classList.contains("item")) return;
  if (!currentTab.classList.contains("hidden"))
    return currentTab.classList.add("hidden");
  const tab = document.querySelector(`[data-tab="${clicked.dataset.number}"]`);
  allTabs.forEach((tab) => tab.classList.add("hidden"));
  tab.classList.remove("hidden");
});
