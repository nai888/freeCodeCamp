document.addEventListener("DOMContentLoaded", function (event) {
  // Map constants
  const w = 937.28;
  const h = 500;

  const svg = d3.select("svg")
    .attr("width", w)
    .attr("height", h);

  svg.append("rect")
    .attr("class", "map-bkg")
    .attr("width", w)
    .attr("height", h);

  const projection = d3.geoNaturalEarth2();

  const tip = d3.tip()
    .attr("class", "d3-tip")
    .html((d) => `<p class="meteor-name"><strong>${d.properties.name}</strong></p>
      <p>Mass: ${d3.format(",")(d.properties.mass)}</p>
      <p>${d.properties.fall} on ${d3.timeFormat("%a, %b %e, %Y")(new Date(d.properties.year))}</p>`);

  svg.call(tip);

  // World map
  d3.json("https://unpkg.com/world-atlas@1.1.4/world/50m.json", (json) => handleMapData(json));

  const handleMapData = (data) => {
    const map = svg.append("g")
      .attr("class", "map");

    const dataObject = topojson.feature(data, data.objects.countries);

    const path = d3.geoPath(projection.fitSize([w, h], dataObject));

    map.selectAll("path")
      .data(dataObject.features)
      .enter()
      .append("path")
      .attr("class", "map-path")
      .attr("d", path);

    // Meteorite data
    d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json", (json) => handleMeteoriteData(json));
  };

  const handleMeteoriteData = (data) => {
    const dataset = data.features;

    const meteorites = svg.append("g")
      .attr("class", "meteorites");

    const minMass = d3.min(dataset, (d) => +d.properties.mass);
    const maxMass = d3.max(dataset, (d) => +d.properties.mass);

    const massScale = d3.scalePow()
      .exponent(0.4)
      .domain([minMass, maxMass])
      .range([2, 30]);

    meteorites.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("class", "meteorite")
      .attr("cx", (d) => d.geometry !== null ? projection(d.geometry.coordinates)[0] : -50)
      .attr("cy", (d) => d.geometry !== null ? projection(d.geometry.coordinates)[1] : -50)
      .attr("r", (d) => massScale(d.properties.mass))
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide);
  };
});
