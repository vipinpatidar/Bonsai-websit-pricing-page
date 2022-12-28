console.profile();
const workflowArea = document.querySelector(".main-dropdown-div");
const workflowPera = document.querySelector(".workflow-sign");
const dropdownRightContent = document.querySelector(".dropdown-right-content");

workflowPera.addEventListener("mouseenter", function () {
  dropdownRightContent.style.display = "block";
});

workflowArea.addEventListener("mouseleave", function () {
  dropdownRightContent.style.display = "none";
});

document.onmouseover = function (e) {
  if (!e.target.dataset.id) return;
  document.querySelectorAll(".template-right-item").forEach((tempRight) => {
    console.log(tempRight, e.target.dataset.id);
    if (e.target.dataset.id === tempRight.dataset.id) {
      tempRight.style.display = "block";
    } else {
      tempRight.style.display = "none";
    }
  });
};

const changePeriod = document.querySelector(".toggle-btn-area");
const changePeriodBtn = document.querySelector(".toggle-btn");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const pricePera = document.querySelectorAll(".price-pera");
const monthMoney = document.querySelectorAll(".month-money");
const yearlyMoney = document.querySelectorAll(".yearly-money");
const quection = document.querySelectorAll(".quection");
const answer = document.querySelector(".qAndA-pera");

changePeriod.addEventListener("click", function () {
  console.log("hii");
  changePeriodBtn.classList.toggle("shift");
  monthly.classList.toggle("period-color");
  yearly.classList.toggle("period-color");
  pricePera.forEach((prea) => {
    prea.classList.toggle("hide-pera");
  });

  monthMoney.forEach((monthM) => {
    monthM.classList.toggle("hide-pera");
  });

  yearlyMoney.forEach((yearM) => {
    yearM.classList.toggle("hide-pera");
  });
});

quection.forEach((quection) => {
  quection.addEventListener("click", function () {
    console.log("hii");
    this.nextElementSibling.classList.toggle("hide-pera");
  });
});
console.profileEnd();
