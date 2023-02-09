import { select, Selection } from "d3-selection";
import styled from "@emotion/styled";
import { easeBounce, easeQuad, easeQuadIn } from "d3-ease";
import "d3-transition";
import { useEffect, useRef, useState } from "react";

const Button = styled.button`
  background-color: " blue";
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: "orange";
  }
`;

const TransitionEx: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  const [selection, setSelection] = useState<Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  > | null>(null);

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current));
    } else {
      selection
        .append("rect")
        .attr("width", 100)
        .attr("height", 100)
        .attr("fill", "orange")
        .transition()
        .duration(2000)
        .ease(easeQuadIn)
        .attr("fill", "blue")
        .attr("height", 400);
    }
  }, [selection]);

  return (
    <div>
      <svg ref={ref} height={400}></svg>
    </div>
  );
};

export default TransitionEx;
