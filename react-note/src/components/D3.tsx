import { useEffect, useRef, useState } from "react"
import { select, Selection } from "d3-selection"

const data = [{width: 200, height: 150, color: 'orange'}]
const data1 = [
    { units: 150, color: 'orange' },
    { units: 100, color: 'purple' },
    { units: 50, color: 'blue' },
    { units: 70, color: 'red' },
    { units: 30, color: 'yellow' },
    { units: 20, color: 'green' },
]


const D3 = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const [selection, setSelection] = useState<Selection<SVGSVGElement | null, unknown, null, undefined> | null>(null);

    useEffect(() => {
        // select(svgRef.current)
        //     .append('rect')

        if(!selection) {
            setSelection(select(svgRef.current))
        }else{
            const rects = selection
                .selectAll('rect')
                .data(data1)
                .attr('width', 100)
                .attr('height', d => d.units)
                .attr('fill', d => d.color)
                .attr('x', (_, i) => i * 100)
            
            rects
                .enter()
                .append('rect')
                .attr('width', 100)
                .attr('height', d => d.units)
                .attr('fill', d => d.color)
                .attr('x', (_, i) => i * 100)
            // selection
            //     .data(data)
            //     .append('rect')
            //     .attr('width', d => d.width)
            //     .attr('height', d => d.height)
            //     .attr('fill', d => d.color)

        }
    }, [selection])
    
    return (
        <div>
            <svg ref={svgRef} width={1000} >
                <rect/>
                <rect/>
                <rect/>
            </svg>
        </div>
    )
}

export default D3