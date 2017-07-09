import 'whatwg-fetch';
import * as d3 from 'd3';

fetch('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json')
  .then(function (response) {
    return response.json()
  }).then(function (json) {
    handleData(json);
  });

const handleData = (data) => {
  // Update footnotes
  document.getElementById("footnotes").innerText = data.description;

  const dataset = data.data;

  const w = 1200;
  const h = 450;
  const lPadding = 60;
  const sPadding = 20;

  const minDate = new Date(dataset[0][0]);
  const maxDate = new Date(dataset[274][0]);

  const xScale = d3.scaleTime()
    .domain([minDate, maxDate])
    .range([lPadding, w - sPadding]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([h - sPadding, sPadding]);

  const svg = d3.select('svg')
    .attr("width", w)
    .attr("height", h);

  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(new Date(d[0])))
    .attr("width", (d) => w / dataset.length)
    .attr("y", (d) => yScale(d[1]))
    .attr("height", (d) => h - sPadding - yScale(d[1]))
    .append("title")
    .html((d) => `${d3.format("$,")(d[1])} B\n${d3.timeFormat("%B %Y")(new Date(d[0]))}`);

  const xAxis = d3.axisBottom(xScale);
  svg.append("g")
    .attr("transform", "translate(0," + (h - sPadding) + ")")
    .call(xAxis);

  const yAxis = d3.axisLeft(yScale);
  svg.append("g")
    .attr("transform", "translate(" + (lPadding) + ", 0)")
    .call(yAxis);
};
