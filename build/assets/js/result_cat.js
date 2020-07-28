"use strict";

var inputName = document.querySelector("input[name=name]");
var inputWeight = document.querySelector("input[name=currentWeight]");
var inputBcs = document.querySelector("select[name=bcs]");
var inputFoodKcal = document.querySelector("input[name=food_kcal]");
var inputCanKcal = document.querySelector("input[name=can_kcal]");
var inputCanAmount = document.querySelector("input[name=can_amount]");
var resultName = document.querySelector("#js_result_name");
var resultWeight1 = document.querySelector("#js_result_weight_1");
var resultWeight2 = document.querySelector("#js_result_weight_2");
var resultWeekGoal = document.querySelector("#js_result_week_goal");
var resultWeek = document.querySelector("#js_result_week");
var resultKcal = document.querySelector("#js_result_kcal");
var resultWater = document.querySelector("#js_result_water");
var resultFood = document.querySelector("#js_result_food");
var catModal = document.querySelector("#catModal");
var catModalBtn = document.querySelector("#catModalBtn");
var catModalclose = document.querySelector("#closebtn");
var catPopDiv1 = document.querySelector("#catPopDiv1");
var catPopText1 = document.querySelector("#catPopText1");
var catPopDiv2 = document.querySelector("#catPopDiv2");
var catPopText2 = document.querySelector("#catPopText2");

function closecatModal(event) {
  catModal.style.display = "none";
  console.log("hi");
}

function handlecatModal(event) {
  catModal.style.display = "block";
}

function handleModalWindow(event) {
  if (event.target == catModal) {
    catModal.style.display = "none";
  }
}

function handlecatPop1(event) {
  catPopText1.classList.toggle("show");
}

function handlecatPop2(event) {
  catPopText2.classList.toggle("show");
}

function handleNameInput(event) {
  var name = inputName.value;
  resultName.innerHTML = name;
}

function kcalCalculator(event) {
  weight = inputWeight.value;
  bcs = inputBcs.value;
  food_kcal = inputFoodKcal.value;
  can_kcal = inputCanKcal.value;
  can_amount = inputCanAmount.value;
  ideal_weight_1 = weight / bcs;
  ideal_weight = Math.round(ideal_weight_1 * 100) / 100;
  goal = weight - ideal_weight;
  resultWeight1.innerHTML = Math.round(goal * 100) / 100;
  resultWeight2.innerHTML = ideal_weight;

  if (goal == 0) {
    resultWeekGoal.innerHTML = 0;
    resultWeek.innerHTML = 0;
  } else {
    weekly_lose = weight / 100 * 1;
    console.log(weekly_lose);
    weekly_lose = Math.round(weekly_lose * 100) / 100;
    resultWeekGoal.innerHTML = weekly_lose;
    week = Math.round(goal / weekly_lose);
    resultWeek.innerHTML = week;
  }

  ideal_kcal_1 = Math.pow(ideal_weight, 0.75);
  ideal_kcal = ideal_kcal_1 * 70;
  ideal_kcal = Math.round(ideal_kcal);
  resultKcal.innerHTML = ideal_kcal;
  water = 40 * weight;
  resultWater.innerHTML = Math.round(water);
  food_kcal_1g = food_kcal / 1000;
  var can = can_kcal * can_amount;
  var food_amount_1 = ideal_kcal - can;
  var food_amount = food_amount_1 / food_kcal_1g;
  resultFood.innerHTML = Math.round(food_amount * 100) / 100;
}

function init() {
  inputName.addEventListener("input", handleNameInput);
  inputWeight.addEventListener("input", kcalCalculator);
  inputBcs.addEventListener("input", kcalCalculator);
  inputFoodKcal.addEventListener("input", kcalCalculator);
  inputCanKcal.addEventListener("input", kcalCalculator);
  inputCanAmount.addEventListener("input", kcalCalculator);
  catModalBtn.addEventListener("click", handlecatModal);
  window.addEventListener("click", handleModalWindow);
  catModalclose.addEventListener("click", closecatModal);
  catPopDiv1.addEventListener("click", handlecatPop1);
  catPopDiv2.addEventListener("click", handlecatPop2);
}

if (catPopText1) {
  init();
}