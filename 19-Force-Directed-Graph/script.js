(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", function (json) {
  return handleData(json);
});

var handleData = function handleData(data) {
  var nodes = data.nodes;
  var links = data.links;

  var w = 1200;
  var h = 500;
  var lPadding = 60;
  var sPadding = 20;

  var svg = d3.select('svg').attr("width", w).attr("height", h);

  // D3-tip
  var tip = d3.tip().attr("class", "d3-tip").html(function (d) {
    return "<p>" + d.country + " (" + d.code.toUpperCase() + ")</p>";
  });

  svg.call(tip);

  // Simulation

  var simulation = d3.forceSimulation().force("link", d3.forceLink(links).id()).force("charge", d3.forceManyBody()).force("center", d3.forceCenter(w / 2, h / 2));

  var dragstarted = function dragstarted(d) {
    if (!d3.event.active) {
      simulation.alphaTarget(0.3).restart();
    }
    d.fx = d.x;
    d.fy = d.y;
  };

  var dragged = function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  };

  var dragended = function dragended(d) {
    if (!d3.event.active) {
      simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  };

  // Data points
  var link = svg.append("g").attr("class", "links").selectAll("line").data(links).enter().append("line");

  var node = svg.append("g").attr("class", "nodes").selectAll("foreignObject").data(nodes).enter()
  /* The flags
  .append("foreignObject")
  .attr("width", 16)
  .attr("height", 16)
  .attr("requiredExtensions", "http://www.w3.org/1999/xhtml")
  .html((d) => `<img src="flags.png" class="flag flag-${d.code}" alt="${d.country}" />`) */
  .append("circle").attr("r", 5).attr("fill", "black").on("mouseover", tip.show).on("mouseout", tip.hide).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));

  // Finish simulation

  var ticked = function ticked() {
    link.attr("x1", function (d) {
      return d.source.x;
    }).attr("y1", function (d) {
      return d.source.y;
    }).attr("x2", function (d) {
      return d.target.x;
    }).attr("y2", function (d) {
      return d.target.y;
    });

    node.attr("cx", function (d) {
      return d.x;
    }).attr("cy", function (d) {
      return d.y;
    });
  };

  simulation.nodes(nodes).on("tick", ticked);
};

},{}]},{},[1]);
