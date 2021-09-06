let chartHeight = 600;
let chartWidth = 800;
// Appends the empty svg to the body of the document

const svg = d3.select("body")
    .append("svg")
    .attr("width", chartWidth)
    .attr("height", chartHeight)