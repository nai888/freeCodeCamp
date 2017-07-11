d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", (json) => handleData(json));

const handleData = (data) => {
  const nodes = data.nodes;
  const links = data.links;

  const w = 1200;
  const h = 400;
  const lPadding = 60;
  const sPadding = 20;

  // D3-tip
  const tip = d3.tip()
    .attr("class", "d3-tip")
    .html((d) => `<p>${d.country} (${d.code})</p>`);

  const svg = d3.select('svg')
    .attr("width", w)
    .attr("height", h);

  svg.call(tip);

  // Data points
  
    // Add these to each data point for tooltips
    // .on("mouseover", tip.show)
    // .on("mouseout", tip.hide);
};
