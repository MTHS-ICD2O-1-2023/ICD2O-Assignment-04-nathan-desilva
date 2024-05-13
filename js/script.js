// Copyright (c) 2024 Nathan De Silva. All rights reserved
//
// Created by: Nathan De Silva
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const meatOption = document.querySelector('input[name="meat-options"]:checked').value
  const lengthOption = document.querySelector('input[name="length-options"]:checked').value
  let orderDetails = 0

  // process
  if (meatOption && lengthOption) {
    // Display the order details based on the selected options
    if (meatOption === "1") {
      orderDetails += "Meatball "
    } else if (meatOption === "2") {
      orderDetails += "Ham ";
    } else if (meatOption === "3") {
      orderDetails += "Chicken ";
    } else if (meatOption === "4") {
      orderDetails += "Turkey "
    }

    if (lengthOption === "1") {
      orderDetails += "6-inch sub."
    } else if (lengthOption === "2") {
      orderDetails += "12-inch (Footlong) sub."
    }

    // output
    document.getElementById("answer").textContent = "You ordered a " + orderDetails
  } else {
    document.getElementById("answer").textContent = "Please select both options."
  }
  // Define prices for each meat and length option
  const meatPrices = {
    "1": 5, // Meatball price
    "2": 4, // Ham price
    "3": 6, // Chicken price
    "4": 7 // Turkey price
  };

  const lengthPrices = {
    "1": 3, // 6-inch sub price
    "2": 5 // 12-inch (Footlong) sub price
  };

  // Get the selected value for the meat radio buttons
  const meatOption = document.querySelector('input[name="meatOptions"]:checked').value

  // Get the selected value for the length radio buttons
  const lengthOption = document.querySelector('input[name="lengthOptions"]:checked').value

  // Calculate the total price based on the selected options
  const totalPrice = meatPrices[meatOption] + lengthPrices[lengthOption]

  // Display the total price
  document.getElementById("answer").textContent = "Total Price: $" + totalPrice
}
