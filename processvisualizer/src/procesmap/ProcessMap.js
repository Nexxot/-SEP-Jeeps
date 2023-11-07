import React,{useState,useRef,useEffect} from 'react';
import ReactFlow from 'reactflow';
import NodeCircle from './nodetypes/NodeCircle.js';
import NodeOverlap from './nodetypes/NodeOverlap.js';
import { ColoredEdge } from './edgetypes/ColoredEdge.js';
import 'reactflow/dist/style.css';

const nodeTypes = { nodeCircle: NodeCircle, nodeOverlap: NodeOverlap}; // Outside to prevent rerendering and performance issues
const edgeTypes = {coloredEdge: ColoredEdge};

export default function ProcessMap() {
  let [nodes, setNodes] = useState([]);

  const edges = [{ id: '1', source: 'node1', target: 'node2' , type: 'coloredEdge',data: {color: 'blue', curve: 0}},
  { id: '2', source: 'node2', target: 'node9' , type: 'coloredEdge',data: {color: 'blue', curve: 25}},
  { id: '3', source: 'node3', target: 'node4' , type: 'coloredEdge',data: {color: 'blue', curve: 0}},
  { id: '4', source: 'node6', target: 'node7' , type: 'coloredEdge',data: {color: 'red', curve: 0}},
  { id: '5', source: 'node7', target: 'node9' , type: 'coloredEdge',data: {color: 'red', curve: 25}},
  { id: '4', source: 'node9', target: 'node3' , type: 'coloredEdge',data: {color: 'blue', curve: 25}},
  { id: '5', source: 'node9', target: 'node8' , type: 'coloredEdge',data: {color: 'red', curve: 25}}
  ];

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      let xPos = getCenterOfProcessMap().x;
      let yPos = getCenterOfProcessMap().y;
      //Start +60px down y level
      nodes = setNodes([{
        id: 'node0',
        type: 'nodeCircle',
        position: { x: 40, y: 60},
        data: {title: 'Order2Cash', color: 'blue'},
      },
      {
        id: 'node1',
        type: 'nodeCircle',
        position: { x: 40, y: 120},
        data: { color: 'blue'},
      },
      {
        id: 'node2',
        type: 'nodeCircle',
        position: { x: 250, y: 120},
        data: {color: 'blue'},
      },
      {
        id: 'node3',
        type: 'nodeCircle',
        position: { x: 750, y: 120},
        data: {color: 'blue'},
      },
      {
        id: 'node4',
        type: 'nodeCircle',
        position: { x: 900, y: 120},
        data: {color: 'blue'},
      },
      {
        id: 'node5',
        type: 'nodeCircle',
        position: { x: 40, y: 300},
        data: {title: 'Plan2Deliver', color: 'red'},
      },
      {
        id: 'node6',
        type: 'nodeCircle',
        position: { x: 40, y: 360},
        data: { color: 'red'},
      },
      {
        id: 'node7',
        type: 'nodeCircle',
        position: { x: 250, y: 360},
        data: {color: 'red'},
      },
      {
        id: 'node8',
        type: 'nodeCircle',
        position: { x: 750, y: 360},
        data: {color: 'red'},
      },
      {
        id: 'node9',
        type: 'nodeOverlap',
        position: { x: 500, y: 200},
        data: {color: 'red'},
      }
    ]);
    }
  }, []); 

  function getCenterOfProcessMap() {
    // Get the dimensions of the div
    //const divRect = mapRef.current.getBoundingClientRect();
  
    // Calculate the center coordinates
    let divRect = divRef.current.getBoundingClientRect();
    const centerX = divRect.left + divRect.left * 2;
    const centerY = divRect.top + divRect.top * 2;
  
    return { x: centerX, y: centerY };
  }

  return (
    <div ref={divRef} style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges} edgeTypes={edgeTypes} />
    </div>
  )
}
