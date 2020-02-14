"use strict";

var sampleData = [
  22,
  43,
  55,
  96,
  67,
  89,
  240,
  200,
  100,
  96,
  58,
  33,
  43,
  55,
  96,
  67,
  89,
  200,
  180,
  100,
  96
];

// Function that will draw the bar chart
function drawBarChart(dataset, idOfContainer) {
  var chartContainer = _div(idOfContainer);

  if (typeof dataset != "object") {
    return;
  }
  //grab the width of the container
  var widthOfContainer = chartContainer.scrollWidth;
  //grab the height of the container
  var heightOfContainer = chartContainer.scrollHeight;
  //determine the width of each bar based on the number of data in the dataset
  var widthOfBar = parseInt(widthOfContainer / dataset.length) - 2;

  for (var i = 0; i < dataset.length; i++) {
    // create our div element
    var divElement = document.createElement("div");
    //static attributes
    divElement.setAttribute("class", "div2");
    //dynamic attributes
    divElement.style.marginLeft = parseInt(i * 2 + i * widthOfBar) + "px";
    divElement.style.height = parseInt(dataset[i]) + "px";
    divElement.style.width = parseInt(widthOfBar) + "px";
    divElement.style.top = heightOfContainer - parseInt(dataset[i]) - 1 + "px";
    chartContainer.appendChild(divElement);
  }
  return false;
}

function _div(id) {
  return document.getElementById(id);
}

drawBarChart(sampleData, "div1");
