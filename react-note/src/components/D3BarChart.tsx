import { useEffect, useRef, useState } from "react";
import { select, Selection } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { axisLeft, axisBottom } from "d3-axis";

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

const dimensions = {
  width: 800,
  height: 600,
  chartWidth: 700,
  chartHeight: 500,
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

  const maxValue = max(data, (d) => d.number);

  const y = scaleLinear().domain([0, maxValue!]).range([0, 500]);

  const x = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, dimensions.chartWidth])
    .paddingInner(0.05);

  const yAxis = axisLeft(y)
    .ticks(3)
    .tickFormat((d) => `${d} units`);
  const xAxis = axisBottom(x);

  useEffect(() => {
    if (!selection) {
      setSelection(select(svgRef.current));
    } else {
      const xAxisGroup = selection
        .append("g")
        .attr(
          "transform",
          `translate(${dimensions.marginLeft}, ${dimensions.chartHeight})`
        )
        .call(xAxis);

      const yAxisGroup = selection
        .append("g")
        .attr("transform", `translate(${dimensions.marginLeft}, 0)`)
        .call(yAxis);

      selection
        .append("g")
        .attr("transform", `translate(${dimensions.marginLeft}, 0)`)
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("x", (d) => x(d.name)!)
        .attr("fill", "orange")
        .attr("height", (d) => y(d.number));
    }
  }, [selection]);

  return (
    <div>
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
      ></svg>
    </div>
  );
};

export default D3;
