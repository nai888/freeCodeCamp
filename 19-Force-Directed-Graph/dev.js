d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", (json) => handleData(json));

const handleData = (data) => {
  const dataset = data.monthlyVariance;
  const baseTemp = data.baseTemperature;

  const minmonth = d3.min(dataset, (d) => d.month);
  const maxmonth = d3.max(dataset, (d) => d.month);
  const minyear = d3.min(dataset, (d) => d.year);
  const maxyear = d3.max(dataset, (d) => d.year);
  const mintemp = d3.min(dataset, (d) => d.variance);
  const maxtemp = d3.max(dataset, (d) => d.variance);
  const gradation = (maxtemp - mintemp) / 10;

  // Update footnotes
  const footnotes = `Temperatures are in Celsius and reported as anomalies relative to the January 1951&ndash;December 1980 average.<br />Estimated January 1951&ndash;December 1980 absolute temperature &deg;C: ${baseTemp} +/- 0.07`;
  document.getElementById("footnotes").innerHTML = footnotes;
  document.getElementById("daterange").innerHTML = `${minyear}&ndash;${maxyear}`;

  const w = 1200;
  const h = 400;
  const lPadding = 60;
  const sPadding = 20;

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const formatMonth = (m) => {
    return months[m - 1];
  };

  // D3-tip
  const tip = d3.tip()
    .attr("class", "d3-tip")
    .html((d) => {
      return `<p class="tt-date">${formatMonth(d.month)} ${d.year}</p>
        <p class="tt-temp">${(baseTemp + d.variance).toFixed(3)} &deg;C</p>
        <p class="tt-var">(${d.variance} &deg;C)</p>`;
    });

  const xScale = d3.scaleTime()
    .domain([minyear, maxyear])
    .range([lPadding, w - sPadding]);

  const yScale = d3.scaleLinear()
    .domain([maxmonth, minmonth])
    .range([h - (2 * lPadding), 0]);

  const svg = d3.select('svg')
    .attr("width", w)
    .attr("height", h);

  svg.call(tip);

  // Data points
  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d.year))
    .attr("y", (d) => yScale(d.month))
    .attr("width", (w - (2 * lPadding)) / (maxyear - minyear))
    .attr("height", (h - lPadding - sPadding) / months.length)
    .attr("class", (d) => {
      switch (true) {
        case d.variance + Math.abs(mintemp) <= gradation:
          return "data l10";
        case d.variance + Math.abs(mintemp) <= 2 * gradation:
          return "data l9";
        case d.variance + Math.abs(mintemp) <= 3 * gradation:
          return "data l8";
        case d.variance + Math.abs(mintemp) <= 4 * gradation:
          return "data l7";
        case d.variance + Math.abs(mintemp) <= 5 * gradation:
          return "data l6";
        case d.variance + Math.abs(mintemp) <= 6 * gradation:
          return "data l5";
        case d.variance + Math.abs(mintemp) <= 7 * gradation:
          return "data l4";
        case d.variance + Math.abs(mintemp) <= 8 * gradation:
          return "data l3";
        case d.variance + Math.abs(mintemp) <= 9 * gradation:
          return "data l2";
        case d.variance + Math.abs(mintemp) <= 10 * gradation:
          return "data l1";
        default:
          return "data";
      }
    })
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);
};
