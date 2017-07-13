(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// Map
d3.json("https://unpkg.com/world-atlas@1.1.4/world/50m.json", function (json) {
  return handleMapData(json);
});

var w = 1150;
var h = 500;

var handleMapData = function handleMapData(data) {
  var svg = d3.select("svg").attr("width", w).attr("height", h);

  svg.append("rect").attr("width", w).attr("height", h).attr("fill", "#063293");

  var map = svg.append("g");

  var path = d3.geoPath();

  map.selectAll("path").data(topojson.feature(data, data.objects.countries).features).enter().append("path").attr("fill", "#0b510f").attr("stroke", "#063293").attr("d", path);
};
/*
const handleData = (data) => {
  const nodes = data.nodes;
  const links = data.links;

  const lPadding = 60;
  const sPadding = 20;

  const svg = d3.select('svg')
    .attr("width", w)
    .attr("height", h);

  const tip = d3.tip()
    .attr("class", "d3-tip")
    .html((d) => `<p>${d.country} (${(d.code).toUpperCase()})</p>`);

  svg.call(tip);

  const simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody()
                      .distanceMin(5)
                      .distanceMax(75))
    .force("link", d3.forceLink(links))
    .force("center", d3.forceCenter(w / 2, h / 2));

  const dragstarted = (d) => {
    if (!d3.event.active) {
      simulation.alphaTarget(0.3).restart();
    }
    d.fx = d.x;
    d.fy = d.y;
  };

  const dragged = (d) => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  };

  const dragended = (d) => {
    if (!d3.event.active) {
      simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  };

  const link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
      .data(links)
      .enter()
      .append("line");

  const node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
        .attr("class", "node")
        .text((d) => d.code.toUpperCase())
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide)
        .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  const ticked = () => {
    link.attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("x", (d) => d.x = Math.max(16, Math.min(w - 16, d.x)))
      .attr("y", (d) => d.y = Math.max(16, Math.min(h - 16, d.y)));
  };

  simulation.nodes(nodes)
    .on("tick", ticked);

  simulation.force("link")
    .links(links);
};
*/

},{}]},{},[1]);
