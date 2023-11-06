import React,{useState,useRef,useEffect} from 'react';
import ReactFlow from 'reactflow';
import NodeCircle from './nodetypes/NodeCircle.js';
import RedNodeCircle from './nodetypes/RedNodeCircle.js';
import GreenNodeCircle from './nodetypes/GreenNodeCircle.js';
import BlueNodeCircle from './nodetypes/BlueNodeCircle.js';
import PurpleNodeCircle from './nodetypes/PurpleNodeCircle.js';
import YellowNodeCircle from './nodetypes/YellowNodeCircle.js';
import 'reactflow/dist/style.css';

const nodeTypes = { nodeCircle: NodeCircle}; // Outside to prevent rerendering and performance issues

export default function ProcessMap() {
  let [nodes, setNodes] = useState([]);

  const edges = [
    { id: 'edge1',type: 'redEdge', source: 'node1', target: 'node2', markerEnd: 'edgeMarkerRed',animated: false },
    { id: 'edge2', source: 'node2', target: 'node3', animated: false },
  ];

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      let xPos = getCenterOfProcessMap().x;
      let yPos = getCenterOfProcessMap().y;
      nodes = setNodes([{
        id: 'node1',
        type: 'nodeCircle',
        data: { label: 'Node 1' },
        position: { x: xPos, y: yPos},
        data: {title: 'Test', color: 'red'},
      },
      {
        id: 'node2',
        type: 'nodeCircle',
        data: { label: 'Node 2' },
        position: { x: xPos, y: yPos + 300},
        data: {color: 'blue'},
      },
      {
        id: 'node3',
        type: 'nodeCircle',
        data: { label: 'Node 3' },
        position: { x: xPos, y: yPos + 600 },
        data: {color: 'yellow'},
      }]);
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
      <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges} />
    </div>
  )
}
