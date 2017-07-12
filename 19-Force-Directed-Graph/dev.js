d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", (json) => handleData(json));

const handleData = (data) => {
  const nodes = data.nodes;
  const links = data.links;

  const w = 1200;
  const h = 500;
  const lPadding = 60;
  const sPadding = 20;

  const svg = d3.select('svg')
    .attr("width", w)
    .attr("height", h);

  // D3-tip
  const tip = d3.tip()
    .attr("class", "d3-tip")
    .html((d) => `<p>${d.country} (${(d.code).toUpperCase()})</p>`);

  svg.call(tip);

  // Simulation

  const simulation = d3.forceSimulation()
    .force("link", d3.forceLink(links).id())
    .force("charge", d3.forceManyBody())
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

  // Data points
  const link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
      .data(links)
      .enter()
      .append("line");

  const node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("foreignObject")
      .data(nodes)
      .enter()
      /* The flags
      .append("foreignObject")
      .attr("width", 16)
      .attr("height", 16)
      .attr("requiredExtensions", "http://www.w3.org/1999/xhtml")
      .html((d) => `<img src="flags.png" class="flag flag-${d.code}" alt="${d.country}" />`) */
      .append("circle")
      .attr("r", 5)
      .attr("fill", "black")
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide)
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

  // Finish simulation

  const ticked = () => {
    link.attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y);
  };

  simulation.nodes(nodes)
    .on("tick", ticked);
};
