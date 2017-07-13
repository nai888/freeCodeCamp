(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  // Map constants
  var w = 937.28;
  var h = 500;

  var svg = d3.select("svg").attr("width", w).attr("height", h);

  svg.append("rect").attr("class", "map-bkg").attr("width", w).attr("height", h);

  var projection = d3.geoNaturalEarth2();

  // World map
  d3.json("https://unpkg.com/world-atlas@1.1.4/world/50m.json", function (json) {
    return handleMapData(json);
  });

  var handleMapData = function handleMapData(data) {
    var map = svg.append("g").attr("class", "map");

    var dataObject = topojson.feature(data, data.objects.countries);

    var path = d3.geoPath(projection.fitSize([w, h], dataObject));

    map.selectAll("path").data(dataObject.features).enter().append("path").attr("class", "map-path").attr("d", path);
  };

  // Meteorite data
  d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json", function (json) {
    return handleMeteorData(json);
  });

  var handleMeteorData = function handleMeteorData(data) {
    var meteors = svg.append("g").attr("class", "meteors");
  };
});

},{}]},{},[1]);
