const main = function() {
  const buildings = [
    {
      name: "Burj Khalifa",
      height: "828"
    },
    {
      name: "Shanghai Tower",
      height: "623"
    },
    {
      name: "Abraj Al-Bait Clock Tower",
      height: "601"
    },
    {
      name: "Ping An Finance Centre",
      height: "599"
    },
    {
      name: "Lotte World Tower",
      height: "544.5"
    },
    {
      name: "One World Trade Center",
      height: "541.3"
    },
    {
      name: "Guangzhou CTF Finance Center",
      height: "530"
    }
  ];

  const container = d3.select("#chart-container");
  const svg = container
    .append("svg")
    .attr("width", 1400)
    .attr("height", 700)
    .style("border", "1px solid black");

  svg
    .selectAll()
    .data(buildings)
    .enter()
    .append("rect")
    .attr("height", building => building.height / 2)
    .attr("width", 30)
    .attr("x", (building, index) => index * 80 + 100)
    .attr("y", building => 500 - building.height / 2)
    .attr("border", "3")
    .style("stroke", "black")
    .style("stroke-width", 1)
    .style("fill", "yellow");

  svg
    .selectAll()
    .data(buildings)
    .enter()
    .append("text")
    .attr("x", (building, index) => index * 80 + 100)
    .attr("y", building => 500 - building.height / 2)
    .attr(
      "transform",
      (building, index) =>
        "rotate(90," + (index * 80 + 100) + " " + (511 - building.height / 2) + ")"
    )
    .text(building => building.name);
};

window.onload = main;
