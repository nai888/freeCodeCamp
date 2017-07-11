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
  };

  // D3-tip
  const tip = d3.tip()
    .attr("class", "d3-tip")
    .html((d) => {
      return `<p>${d.Name}</p>
        <p>Ranking: ${d.Place}, Time: ${d.Time}</p>
        ${d.Doping === "" ? "" : `<p>Doping: ${d.Doping}</p>`}`;
    });

  const xScale = d3.scaleTime()
    .domain([mintime - 10, maxtime + 10])
    .range([lPadding, w - lPadding]);

  const yScale = d3.scaleLinear()
    .domain([maxplace + 1, minplace - 1])
    .range([h - lPadding, sPadding]);

  const svg = d3.select('svg')
    .attr("width", w)
    .attr("height", h);

  svg.call(tip);

  // Data points
  svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d.Seconds))
    .attr("cy", (d) => yScale(d.Place))
    .attr("r", 5)
    .attr("class", (d) => d.Doping === "" ? "nodope" : "dope")
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);

  // Data labels
  svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .attr("x", (d) => xScale(d.Seconds + 2))
    .attr("y", (d) => yScale(d.Place))
    .attr("class", "data-label")
    .text((d) => d.Name);

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

  // Legend
  // Doping circle
  svg.append("circle")
    .attr("class", "dope")
    .attr("cx", xScale(mintime))
    .attr("cy", h - lPadding - 60)
    .attr("r", 5);

  // Doping label
  svg.append("text")
    .attr("x", xScale(mintime + 2))
    .attr("y", h - lPadding - 60)
    .attr("class", "legend-label")
    .text("Doping allegations");

  // Non-doping circle
  svg.append("circle")
    .attr("class", "nodope")
    .attr("cx", xScale(mintime))
    .attr("cy", h - lPadding - 30)
    .attr("r", 5);

  // Non-doping label
  svg.append("text")
    .attr("x", xScale(mintime + 2))
    .attr("y", h - lPadding - 30)
    .attr("class", "legend-label")
    .text("No doping allegations");
};
