import React,{useState,useRef,useEffect} from 'react';
import ReactFlow from 'reactflow';
import * as d3 from 'd3';
import NodeCircle from './nodetypes/NodeCircle.js';
import NodeOverlap from './nodetypes/NodeOverlap.js';
import { ColoredEdge } from './edgetypes/ColoredEdge.js';
import 'reactflow/dist/style.css';

const nodeTypes = { nodeCircle: NodeCircle, nodeOverlap: NodeOverlap}; // Outside to prevent rerendering and performance issues
const edgeTypes = {coloredEdge: ColoredEdge};

export default function ProcessMap({currentPage, setCurrentPage}) {

  let [nodes, setNodes] = useState([{
    id: 'name1',
    type: 'nodeCircle',
    position: { x: 40, y: 60},
    data: {title: 'Order2Cash', color: 'blue'},
  },
  {
    id: 'blue1',
    type: 'nodeCircle',
    position: { x: 40, y: 120},
    data: { color: 'blue'},
  },
  {
    id: 'blue2',
    type: 'nodeCircle',
    position: { x: 250, y: 120},
    data: {color: 'blue'},
  },
  {
    id: 'blue3',
    type: 'nodeCircle',
    position: { x: 750, y: 120},
    data: {color: 'blue'},
  },
  {
    id: 'blue4',
    type: 'nodeCircle',
    position: { x: 900, y: 120},
    data: {color: 'blue'},
  },
  {
    id: 'name2',
    type: 'nodeCircle',
    position: { x: 450, y: 60},
    data: {title: 'Design2Release', color: 'purple'},
  },
  {
    id: 'purple1',
    type: 'nodeCircle',
    position: { x: 525, y: 120},
    data: { color: 'purple', edgesUpDown: true},
  },
  {
    id: 'purple2',
    type: 'nodeCircle',
    position: { x: 525, y: 500},
    data: { color: 'purple', edgesUpDown: true},
  },
  {
    id: 'purple3',
    type: 'nodeCircle',
    position: { x: 525, y: 700},
    data: { color: 'purple', edgesUpDown: true},
  },
  {
    id: 'name3',
    type: 'nodeCircle',
    position: { x: 40, y: 300},
    data: {title: 'Plan2Deliver', color: 'red'},
  },
  {
    id: 'red1',
    type: 'nodeCircle',
    position: { x: 40, y: 360},
    data: { color: 'red'},
  },
  {
    id: 'red2',
    type: 'nodeCircle',
    position: { x: 900, y: 360},
    data: { color: 'red'},
  },
  {
    id: 'overlap1_1',
    type: 'nodeOverlap',
    position: { x: 535, y: 360},
    data: { source: 'TOP'},
  },
  {
    id: 'overlap1_2',
    type: 'nodeOverlap',
    position: { x: 535, y: 360},
    data: { source: 'RIGHT'},
  },
  {
    id: 'overlap1_3',
    type: 'nodeOverlap',
    position: { x: 535, y: 360},
    data: { source: 'BOTTOM'},
  },
  {
    id: 'overlap1_4',
    type: 'nodeOverlap',
    position: { x: 535, y: 360},
    data: { source: 'LEFT'},
  }]);

  const containerRef = useRef(null);


  const edges = [
    { id: 'b1b2', source: 'blue1', target: 'blue2' , type: 'coloredEdge',data: {color: 'blue', curve: 0}},
    { id: 'b2bo1_2', source: 'blue2', target: 'overlap1_2' , type: 'coloredEdge',data: {color: 'blue', curve: 100}},
    { id: 'o1_2b3', source: 'overlap1_2', target: 'blue3' , type: 'coloredEdge',data: {color: 'blue', curve: 100}},
    { id: 'b3b4', source: 'blue3', target: 'blue4' , type: 'coloredEdge',data: {color: 'blue', curve: 0}},
    { id: 'r1o1_2', source: 'red1', target: 'overlap1_2' , type: 'coloredEdge',data: {color: 'red', curve: 0}},
    { id: 'o1_2r2', source: 'overlap1_2', target: 'red2' , type: 'coloredEdge',data: {color: 'red', curve: 0}},
    { id: 'p1o1_3', source: 'purple1', target: 'overlap1_3' , type: 'coloredEdge',data: {color: 'purple', curve: 0}},
    { id: 'o1_3p2', source: 'overlap1_3', target: 'purple2' , type: 'coloredEdge',data: {color: 'purple', curve: 0}},
    { id: 'p2p3', source: 'purple2', target: 'purple3' , type: 'coloredEdge',data: {color: 'purple', curve: 0}}
  ];

  const divRef = useRef(null);

  // useEffect(() => {
  //   if (divRef.current) {
  //     //Start +60px down y level
  //     nodes = setNodes([{
  //       id: 'name1',
  //       type: 'nodeCircle',
  //       position: { x: 40, y: 60},
  //       data: {title: 'Order2Cash', color: 'blue'},
  //     },
  //     {
  //       id: 'blue1',
  //       type: 'nodeCircle',
  //       position: { x: 40, y: 120},
  //       data: { color: 'blue'},
  //     },
  //     {
  //       id: 'blue2',
  //       type: 'nodeCircle',
  //       position: { x: 250, y: 120},
  //       data: {color: 'blue'},
  //     },
  //     {
  //       id: 'blue3',
  //       type: 'nodeCircle',
  //       position: { x: 750, y: 120},
  //       data: {color: 'blue'},
  //     },
  //     {
  //       id: 'blue4',
  //       type: 'nodeCircle',
  //       position: { x: 900, y: 120},
  //       data: {color: 'blue'},
  //     },
  //     {
  //       id: 'name2',
  //       type: 'nodeCircle',
  //       position: { x: 450, y: 60},
  //       data: {title: 'Design2Release', color: 'purple'},
  //     },
  //     {
  //       id: 'purple1',
  //       type: 'nodeCircle',
  //       position: { x: 525, y: 120},
  //       data: { color: 'purple', edgesUpDown: true},
  //     },
  //     {
  //       id: 'purple2',
  //       type: 'nodeCircle',
  //       position: { x: 525, y: 500},
  //       data: { color: 'purple', edgesUpDown: true},
  //     },
  //     {
  //       id: 'purple3',
  //       type: 'nodeCircle',
  //       position: { x: 525, y: 700},
  //       data: { color: 'purple', edgesUpDown: true},
  //     },
  //     {
  //       id: 'name3',
  //       type: 'nodeCircle',
  //       position: { x: 40, y: 300},
  //       data: {title: 'Plan2Deliver', color: 'red'},
  //     },
  //     {
  //       id: 'red1',
  //       type: 'nodeCircle',
  //       position: { x: 40, y: 360},
  //       data: { color: 'red'},
  //     },
  //     {
  //       id: 'red2',
  //       type: 'nodeCircle',
  //       position: { x: 900, y: 360},
  //       data: { color: 'red'},
  //     },
  //     {
  //       id: 'overlap1_1',
  //       type: 'nodeOverlap',
  //       position: { x: 535, y: 360},
  //       data: { source: 'TOP'},
  //     },
  //     {
  //       id: 'overlap1_2',
  //       type: 'nodeOverlap',
  //       position: { x: 535, y: 360},
  //       data: { source: 'RIGHT'},
  //     },
  //     {
  //       id: 'overlap1_3',
  //       type: 'nodeOverlap',
  //       position: { x: 535, y: 360},
  //       data: { source: 'BOTTOM'},
  //     },
  //     {
  //       id: 'overlap1_4',
  //       type: 'nodeOverlap',
  //       position: { x: 535, y: 360},
  //       data: { source: 'LEFT'},
  //     }
  //   ]);
  //   }
  // }, []);


  const onNodeClick = (event, node) => { // Loop through all connected ids and make them appear/display
    if (currentPage === "mainMetaClosed") {
      setCurrentPage("mainMetaOpened");
    } else {
      setCurrentPage("mainMetaClosed");
    }

  };

  useEffect(() => {
    const svg = d3.select(containerRef.current);
    const simulation = d3
      .forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-200))
      .force('link', d3.forceLink(edges).id(d => d.id))
      .force('center', d3.forceCenter(400, 400));

    // Implement D3 force simulation updates here

    return () => {
      // Clean up D3 simulation if necessary
      simulation.stop();
    };
  }, [nodes, edges]);

  return <div ref={containerRef}>{
    <>
    <div data-testid="process-map-id"></div>
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges} edgeTypes={edgeTypes} />
    </div>
    </>
    }</div>;

  // return (
  //   <>
  //   <div data-testid="process-map-id"></div>
  //   <div ref={divRef} style={{ width: '100vw', height: '100vh' }}>
  //     <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges} edgeTypes={edgeTypes}
  //      onNodeClick={onNodeClick} />
  //   </div>
  // </>
  // )
}
