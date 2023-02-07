import { useEffect, useRef, useState } from "react";
import { select, Selection } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";

const data = [
  {
    name: "foo",
    number: 9000,
  },
  {
    name: "bar",
    number: 2340,
  },
  {
    name: "baz",
    number: 3463,
  },
  {
    name: "hoge",
    number: 7654,
  },
  {
    name: "piyo",
    number: 8746,
  },
];

const data1 = [
  { units: 150, color: "orange" },
  { units: 100, color: "purple" },
  { units: 50, color: "blue" },
  { units: 70, color: "red" },
  { units: 30, color: "yellow" },
  { units: 20, color: "green" },
];

const dimensions = {
  width: 800,
  height: 500,
  chartWidth: 700,
  chartHeight: 400,
  marginLeft: 100,
};

const D3 = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  > | null>(null);

  const y = scaleLinear().domain([0, 1000]).range([0, 500]);

  const x = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, 800]);

  useEffect(() => {
    // select(svgRef.current)
    //     .append('rect')

    if (!selection) {
      setSelection(select(svgRef.current));
    } else {
      const rects = selection
        .selectAll("rect")
        .data(data1)
        .attr("width", 100)
        .attr("height", (d) => d.units)
        .attr("fill", (d) => d.color)
        .attr("x", (_, i) => i * 100);

      rects
        .enter()
        .append("rect")
        .attr("width", 100)
        .attr("height", (d) => d.units)
        .attr("fill", (d) => d.color)
        .attr("x", (_, i) => i * 100);

      // selection
      //     .data(data)
      //     .append('rect')f
      //     .attr('width', d => d.width)
      //     .attr('height', d => d.height)
      //     .attr('fill', d => d.color)
    }
  }, [selection]);

  return (
    <div>
      <svg ref={svgRef} width={1000}>
        <rect />
        <rect />
        <rect />
      </svg>
    </div>
  );
};

export default D3;
