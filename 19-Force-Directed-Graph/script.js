(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json", function (json) {
  return handleData(json);
});

var handleData = function handleData(data) {
  var dataset = data.monthlyVariance;
  var baseTemp = data.baseTemperature;

  var minmonth = d3.min(dataset, function (d) {
    return d.month;
  });
  var maxmonth = d3.max(dataset, function (d) {
    return d.month;
  });
  var minyear = d3.min(dataset, function (d) {
    return d.year;
  });
  var maxyear = d3.max(dataset, function (d) {
    return d.year;
  });
  var mintemp = d3.min(dataset, function (d) {
    return d.variance;
  });
  var maxtemp = d3.max(dataset, function (d) {
    return d.variance;
  });
  var gradation = (maxtemp - mintemp) / 10;

  // Update footnotes
  var footnotes = "Temperatures are in Celsius and reported as anomalies relative to the January 1951&ndash;December 1980 average.<br />Estimated January 1951&ndash;December 1980 absolute temperature &deg;C: " + baseTemp + " +/- 0.07";
  document.getElementById("footnotes").innerHTML = footnotes;
  document.getElementById("daterange").innerHTML = minyear + "&ndash;" + maxyear;

  var w = 1200;
  var h = 400;
  var lPadding = 60;
  var sPadding = 20;

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var formatMonth = function formatMonth(m) {
    return months[m - 1];
  };

  // D3-tip
  var tip = d3.tip().attr("class", "d3-tip").html(function (d) {
    return "<p class=\"tt-date\">" + formatMonth(d.month) + " " + d.year + "</p>\n        <p class=\"tt-temp\">" + (baseTemp + d.variance).toFixed(3) + " &deg;C</p>\n        <p class=\"tt-var\">(" + d.variance + " &deg;C)</p>";
  });

  var xScale = d3.scaleTime().domain([minyear, maxyear]).range([lPadding, w - sPadding]);

  var yScale = d3.scaleLinear().domain([maxmonth, minmonth]).range([h - 2 * lPadding, 0]);

  var svg = d3.select('svg').attr("width", w).attr("height", h);

  svg.call(tip);

  // Data points
  svg.selectAll("rect").data(dataset).enter().append("rect").attr("x", function (d) {
    return xScale(d.year);
  }).attr("y", function (d) {
    return yScale(d.month);
  }).attr("width", (w - 2 * lPadding) / (maxyear - minyear)).attr("height", (h - lPadding - sPadding) / months.length).attr("class", function (d) {
    switch (true) {
      case d.variance + Math.abs(mintemp) <= gradation:
        return "data l10";
      case d.variance + Math.abs(mintemp) <= 2 * gradation:
        return "data l9";
      case d.variance + Math.abs(mintemp) <= 3 * gradation:
        return "data l8";
      case d.variance + Math.abs(mintemp) <= 4 * gradation:
        return "data l7";
      case d.variance + Math.abs(mintemp) <= 5 * gradation:
        return "data l6";
      case d.variance + Math.abs(mintemp) <= 6 * gradation:
        return "data l5";
      case d.variance + Math.abs(mintemp) <= 7 * gradation:
        return "data l4";
      case d.variance + Math.abs(mintemp) <= 8 * gradation:
        return "data l3";
      case d.variance + Math.abs(mintemp) <= 9 * gradation:
        return "data l2";
      case d.variance + Math.abs(mintemp) <= 10 * gradation:
        return "data l1";
      default:
        return "data";
    }
  }).on("mouseover", tip.show).on("mouseout", tip.hide);

  // X axis
  svg.append("g").attr("transform", "translate(0, " + (h - 2 * lPadding + (h - lPadding - sPadding) / 12) + ")").call(d3.axisBottom(xScale).tickFormat(d3.format("")));

  // Y axis
  svg.selectAll(".month-label").data(months).enter().append("text").text(function (d) {
    return d;
  }).attr("x", xScale(minyear)).attr("y", function (d, i) {
    return yScale(i + 1);
  }).attr("alignment-baseline", "middle").attr("class", "month-label").attr("transform", "translate(-5, " + (h - lPadding - sPadding) / months.length / 2 + ")");

  // X axis label
  svg.append("text").attr("transform", "translate(" + w / 2 + ", " + (h - lPadding) + ")").attr("class", "axis-label xlabel").text("Years");

  // Y axis label
  svg.append("text").attr("transform", "translate(" + sPadding + ", " + (h - 2 * lPadding) / 2 + ") rotate(-90)").attr("class", "axis-label ylabel").text("Months");

  // Legend
  var legend = function legend() {
    var arr = [];
    for (var i = 1; i <= 10; i++) {
      arr.push((i * gradation).toFixed(3));
    }
    return arr;
  };
  svg.selectAll(".legend").data(legend).enter().append("rect").attr("class", function (d, i) {
    return "legend l" + (10 - i);
  }).attr("x", function (d, i) {
    return i * 50 + lPadding;
  }).attr("y", h - 50).attr("height", 20).attr("width", 50);

  svg.selectAll(".legend-label").data(legend).enter().append("text").attr("class", "legend-label").attr("x", function (d, i) {
    return i * 50 + lPadding + 25;
  }).attr("y", h - 15).text(function (d, i) {
    return (baseTemp - Math.abs(mintemp) + i * gradation).toFixed(1) + '°';
  });
};

},{}]},{},[1]);
