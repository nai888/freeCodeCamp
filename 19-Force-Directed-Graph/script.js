(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function (json) {
  return handleData(json);
});

var handleData = function handleData(data) {
  var nodes = data.nodes;
  var links = data.links;

  var w = 1200;
  var h = 400;
  var lPadding = 60;
  var sPadding = 20;

  // D3-tip
  var tip = d3.tip().attr("class", "d3-tip").html(function (d) {
    return "<p>" + d.country + " (" + d.code + ")</p>";
  });

  var svg = d3.select('svg').attr("width", w).attr("height", h);

  svg.call(tip);

  // Data points

  // Add these to each data point for tooltips
  // .on("mouseover", tip.show)
  // .on("mouseout", tip.hide);
};

},{}]},{},[1]);
