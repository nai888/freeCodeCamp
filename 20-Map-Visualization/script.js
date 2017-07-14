(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  // Map constants
  var w = 937.28;
  var h = 500;

  var svg = d3.select("svg").attr("width", w).attr("height", h);

  svg.append("rect").attr("class", "map-bkg").attr("width", w).attr("height", h);

  var projection = d3.geoNaturalEarth2();

  var tip = d3.tip().attr("class", "d3-tip").html(function (d) {
    return "<p class=\"meteor-name\"><strong>" + d.properties.name + "</strong></p>\n      <p>Mass: " + d.properties.mass + "</p>\n      <p>" + d.properties.fall + " on " + d3.timeFormat("%a, %b %e, %Y")(new Date(d.properties.year)) + "</p>";
  });

  svg.call(tip);

  // World map
  d3.json("https://unpkg.com/world-atlas@1.1.4/world/50m.json", function (json) {
    return handleMapData(json);
  });

  var handleMapData = function handleMapData(data) {
    var map = svg.append("g").attr("class", "map");

    var dataObject = topojson.feature(data, data.objects.countries);

    var path = d3.geoPath(projection.fitSize([w, h], dataObject));

    map.selectAll("path").data(dataObject.features).enter().append("path").attr("class", "map-path").attr("d", path);

    // Meteorite data
    d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json", function (json) {
      return handleMeteoriteData(json);
    });
  };

  var handleMeteoriteData = function handleMeteoriteData(data) {
    var dataset = data.features;

    var meteorites = svg.append("g").attr("class", "meteorites");

    var minMass = d3.min(dataset, function (d) {
      return +d.properties.mass;
    });
    var maxMass = d3.max(dataset, function (d) {
      return +d.properties.mass;
    });

    var massScale = d3.scalePow().exponent(0.3).domain([minMass, maxMass]).range([2, 20]);

    meteorites.selectAll("circle").data(dataset).enter().append("circle").attr("class", "meteorite").attr("cx", function (d) {
      return d.geometry !== null ? projection(d.geometry.coordinates)[0] : -50;
    }).attr("cy", function (d) {
      return d.geometry !== null ? projection(d.geometry.coordinates)[1] : -50;
    }).attr("r", function (d) {
      return massScale(d.properties.mass);
    }).on("mouseover", tip.show).on("mouseout", tip.hide);
  };
});

},{}]},{},[1]);
