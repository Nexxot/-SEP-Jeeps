import React,{useRef, useEffect, useState} from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

export default function ProcessMap() {
  let [nodes, setNodes] = useState([]);

  let edges = [
    { id: 'edge1', source: 'node1', target: 'node2', animated: false },
    { id: 'edge2', source: 'node2', target: 'node3', animated: false },
  ];

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      // Calculate the center of the div and set it in the center constant
      //center.current = getCenterOfProcessMap(divRef.current);
      nodes = setNodes([{
        id: 'node1',
        type: 'default',
        data: { label: 'Node 1' },
        position: { x: getCenterOfProcessMap().x, y: getCenterOfProcessMap().y },
      },
      {
        id: 'node2',
        type: 'default',
        data: { label: 'Node 2' },
        position: { x: getCenterOfProcessMap().x, y: getCenterOfProcessMap().y + 100},
      },
      {
        id: 'node3',
        type: 'default',
        data: { label: 'Node 3' },
        position: { x: getCenterOfProcessMap().x, y: getCenterOfProcessMap().y + 200 },
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
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  )
}
