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

  const tip = d3.tip()
    .attr("class", "d3-tip")
    .html((d) => `<p>${d.country} (${(d.code).toUpperCase()})</p>`);

  svg.call(tip);

  const simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody())
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
      .append("line")
        .attr("class", "link");

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

    node.attr("x", (d) => d.x)
      .attr("y", (d) => d.y);
  };

  simulation.nodes(nodes)
    .on("tick", ticked);

  simulation.force("link")
    .links(links);
};
