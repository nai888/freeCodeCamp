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

  const minplace = d3.min(dataset, (d) => d.Place);
  const maxplace = d3.max(dataset, (d) => d.Place);
  const mintime = d3.min(dataset, (d) => d.Seconds);
  const maxtime = d3.max(dataset, (d) => d.Seconds);

  const formatTime = d3.timeFormat("%M:%S");
  const formatMins = (s) => {
    let t = new Date();
    const m = s / 60;
    const rs = s % 60;
    t.setMinutes(m, rs);
    return formatTime(t);
  }

  const xScale = d3.scaleTime()
    .domain([mintime - 10, maxtime + 10])
    .range([lPadding, w - lPadding]);

  const yScale = d3.scaleLinear()
    .domain([maxplace + 1, minplace - 1])
    .range([h - lPadding, sPadding]);

  const svg = d3.select('svg')
    .attr("width", w)
    .attr("height", h);

  // Data points
  svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d.Seconds))
    .attr("cy", (d) => yScale(d.Place))
    .attr("r", 5)
    .attr("class", (d) => d.Doping === "" ? "nodope" : "dope");

  // Data labels

  // X axis
  svg.append("g")
    .attr("transform", `translate(0, ${h - lPadding})`)
    .call(d3.axisBottom(xScale)
      .tickFormat(formatMins));

  // Y axis
  svg.append("g")
    .attr("transform", `translate(${lPadding}, 0)`)
    .call(d3.axisLeft(yScale));

  // X axis label
  svg.append("text")
    .attr("transform", `translate(${w / 2}, ${h - 10})`)
    .attr("class", "axis-label xlabel")
    .text("Race Time (minutes, normalized)");

  // Y axis label
  svg.append("text")
    .attr("transform", `translate(${sPadding}, ${(h - lPadding) / 2}) rotate(-90)`)
    .attr("class", "axis-label ylabel")
    .text("Ranking");
};
