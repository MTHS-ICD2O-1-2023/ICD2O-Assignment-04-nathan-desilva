// Copyright (c) 2024 Nathan De Silva. All rights reserved
//
// Created by: Nathan De Silva
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // input
  const TAX = 1.13
  const COST_SIX_INCH = 1
  const COST_TWELVE_INCH = 1.75
  const COST_MEATBALL = 7.0
  const COST_HAM = 5.0
  const COST_CHICKEN = 5.5
  const COST_TURKEY = 6.0
  let costLength = 0
  let cost = 0
  let price = 0

  // input
  const subMeat = parseInt(document.getElementById("option-1").value)
  const subLength = parseInt(document.getElementById("option-5").value)

  // process
  if (subLength == 6) {
    costLength = COST_SIX_INCH
  } else {
    costLength = COST_TWELVE_INCH
  }

  if (subMeat == 1) {
    cost = COST_MEATBALL
  } else if (subMeat == 2) {
    cost = COST_HAM
  } else if (subMeat == 3) {
    cost = COST_CHICKEN
  } else {
    cost = COST_TURKEY
  }

  price = costLength * cost * TAX

  // output
  document.getElementById("answer").innerHTML =
    "Your total comes to $" +
    price.toFixed(2) +
    ". Thank you for eating at Subway!"
}
