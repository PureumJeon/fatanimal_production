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
var dogModal = document.querySelector("#dogModal");
var dogModalBtn = document.querySelector("#dogModalBtn");
var dogModalclose = document.querySelector("#closebtn");
var dogPopDiv2 = document.querySelector("#dogPopDiv2");
var dogPopText2 = document.querySelector("#dogPopText2");
var dogPopDiv3 = document.querySelector("#dogPopDiv3");
var dogPopText3 = document.querySelector("#dogPopText3");

function closeDogModal(event) {
  dogModal.style.display = "none";
  console.log("hi");
}

function handleDogModal(event) {
  dogModal.style.display = "block";
}

function handleModalWindow(event) {
  if (event.target == dogModal) {
    dogModal.style.display = "none";
  }

  console.log("sss");
}

function handleDogPop2(event) {
  dogPopText2.classList.toggle("show");
}

function handleDogPop3(event) {
  dogPopText3.classList.toggle("show");
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
    weekly_lose = weight / 100 * 2;
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
  water = 60 * weight;
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
  dogModalBtn.addEventListener("click", handleDogModal);
  window.addEventListener("click", handleModalWindow);
  dogModalclose.addEventListener("click", closeDogModal);
  dogPopDiv2.addEventListener("click", handleDogPop2);
  dogPopDiv3.addEventListener("click", handleDogPop3);
}

if (dogPopText2) {
  init();
}