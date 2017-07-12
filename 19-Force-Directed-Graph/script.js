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

  var tip = d3.tip().attr("class", "d3-tip").html(function (d) {
    return "<p>" + d.country + " (" + d.code.toUpperCase() + ")</p>";
  });

  svg.call(tip);

  var simulation = d3.forceSimulation(nodes).force("charge", d3.forceManyBody()).force("link", d3.forceLink(links)).force("center", d3.forceCenter(w / 2, h / 2));

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

  var link = svg.append("g").attr("class", "links").selectAll("line").data(links).enter().append("line").attr("class", "link");

  var node = svg.append("g").attr("class", "nodes").selectAll("text").data(nodes).enter().append("text").attr("class", "node").text(function (d) {
    return d.code.toUpperCase();
  }).on("mouseover", tip.show).on("mouseout", tip.hide).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));

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

    node.attr("x", function (d) {
      return d.x;
    }).attr("y", function (d) {
      return d.y;
    });
  };

  simulation.nodes(nodes).on("tick", ticked);

  simulation.force("link").links(links);
};

},{}]},{},[1]);
