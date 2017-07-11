import 'whatwg-fetch';

fetch('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json')
  .then(function (response) {
    return response.json()
  }).then(function (json) {
    handleData(json);
  });

const handleData = (dataset) => {

  console.log(dataset);

  const w = 1200;
  const h = 450;
  const lPadding = 60;
  const sPadding = 20;

  // here down needs to be updated

  const mintime = d3.min(dataset, (d) => d.Seconds);
  const maxtime = d3.max(dataset, (d) => d.Seconds);
  const minplace = d3.min(dataset, (d) => d.Place);
  const maxplace = d3.max(dataset, (d) => d.Place);

  console.log(maxtime);
  console.log(mintime);

  const xScale = d3.scaleTime()
    .domain([mintime - 10, maxtime + 10])
    .range([lPadding, w - lPadding]);

  const yScale = d3.scaleLinear()
    .domain([maxplace + 1, minplace - 1])
    .range([h - sPadding, sPadding]);

  const svg = d3.select('svg')
    .attr("width", w)
    .attr("height", h);

  svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d.Seconds))
    .attr("cy", (d) => yScale(d.Place))
    .attr("r", 5)
    .attr("class", (d) => d.Doping === "" ? "nodope" : "dope");

  const xAxis = d3.axisBottom(xScale);
  svg.append("g")
    .attr("transform", "translate(0," + (h - sPadding) + ")")
    .call(xAxis);

  const yAxis = d3.axisLeft(yScale);
  svg.append("g")
    .attr("transform", "translate(" + (lPadding) + ", 0)")
    .call(yAxis);
};
