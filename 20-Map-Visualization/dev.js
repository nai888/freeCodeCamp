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
  };

  // Meteorite data
  d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json", (json) => handleMeteorData(json));

  const handleMeteorData = (data) => {
    const meteors = svg.append("g")
      .attr("class", "meteors");
  };
});
