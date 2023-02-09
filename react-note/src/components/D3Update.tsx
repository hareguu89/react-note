import { useEffect, useRef, useState } from "react";
import { select, Selection } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { axisBottom, axisLeft } from "d3-axis";

const initialData = [
  {
    name: "foo",
    units: 9000,
  },
  {
    name: "bar",
    units: 2340,
  },
  {
    name: "baz",
    units: 3463,
  },
  {
    name: "hoge",
    units: 7654,
  },
  {
    name: "piyo",
    units: 8746,
  },
];

const dimensions = {
  width: 800,
  height: 600,
  chartWidth: 700,
  chartHeight: 500,
  marginLeft: 100,
};

const D3Update = () => {
  const refs = useRef<SVGSVGElement | null>(null);
  const [data, setData] = useState(initialData);
  const [selection, setSelection] = useState<Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  > | null>(null);

  const maxValue = max(data, (d) => d.units);

  let y = scaleLinear().domain([0, maxValue!]).range([dimensions.height, 0]);

  let x = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, dimensions.chartWidth])
    .paddingInner(0.05);

  const yAxis = axisLeft(y)
    .ticks(3)
    .tickFormat((d) => `${d} units`);
  const xAxis = axisBottom(x);

  useEffect(() => {
    if (!selection) {
      setSelection(select(refs.current));
    } else {
      selection
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("height", (d) => dimensions.chartHeight - y(d.units))
        .attr("x", (d) => x(d.name)!)
        .attr("y", (d) => y(d.units))
        .attr("fill", "orange");
    }
  }, [selection]);

  useEffect(() => {
    if (selection) {
      y = scaleLinear().domain([0, maxValue!]).range([dimensions.height, 0]);

      x = scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, dimensions.chartWidth])
        .paddingInner(0.05);
      const rects = selection.selectAll("rect").data(data);

      rects.exit().remove();
      rects
        .attr("width", x.bandwidth)
        .attr("height", (d) => dimensions.chartHeight - y(d.units))
        .attr("x", (d) => x(d.name)!)
        .attr("y", (d) => y(d.units))
        .attr("fill", "orange");

      rects.enter().append("rect");
    }
  }, [data]);

  const addRandomUnits = () => {
    const dataToBeAdded = {
      name: `${Math.random() * 100}`,
      units: Math.floor(Math.random() * 80 + 20),
    };
    setData([...data, dataToBeAdded]);
  };

  const removeList = () => {
    if (!data.length) {
      return;
    }

    const slicedData = data.slice(0, data.length - 1);
    setData(slicedData);
  };

  return (
    <div>
      <svg ref={refs} width={dimensions.width} height={dimensions.height}></svg>
      <button onClick={addRandomUnits}>add</button>
      <button onClick={removeList}>remove</button>
    </div>
  );
};

export default D3Update;
