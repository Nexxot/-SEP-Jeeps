import React, { useState } from 'react'
import ReactFlow from 'react-flow-renderer';
import NodeTimeLine from './nodetypes/NodeTimeLine';
import NodeMonth from './nodetypes/NodeMonth';
const nodeTypes = { nodeTimeLine: NodeTimeLine, nodeMonth: NodeMonth }
//!!!!!! Split zählt auch die erste id, also den node der scho existiert, check einbauen nicht vergessen
export default function ProcessTimeMap() {

    const loadedNodes = [
      {
      id: 'a.b.c',
      type: 'nodeTimeLine',
      position: { x: 30, y: 100},
      data: {title: 'O2C', color: 'blue', width: 600}
      },
      {
        id: 'b.d.e',
        type: 'nodeTimeLine',
        position: { x: 80, y: 200},
        data: {title: 'P2D', color: 'red', width: 400}
      },
      {
        id: 'c',
        type: 'nodeTimeLine',
        position: { x: 485, y: 200},
        data: {title: 'D2R', color: 'purple', width: 150}
      },
      {
        id: 'd',
        type: 'nodeTimeLine',
        position: { x: 80, y: 300},
        data: {title: 'D2R', color: 'red', width: 200}
      },
      {
        id: 'e',
        type: 'nodeTimeLine',
        position: { x: 290, y: 300},
        data: {title: 'D2R', color: 'red', width: 190}
      }
    ];

    const [displayNodes, setDisplayNodes] = useState([      
      {
        id: 'November1',
        type: 'nodeMonth',
        position: { x: 0, y: 0},
        data: { width: 200, month: 'November'}
      },
      {
        id: 'December1',
        type: 'nodeMonth',
        position: { x: 400, y: 0},
        data: { width: 200, month: 'December'}
      },
      {
        id: 'January1',
        type: 'nodeMonth',
        position: { x: 800, y: 0},
        data: {width: 200, month: 'January'}
      },
      {
        id: 'February1',
        type: 'nodeMonth',
        position: { x: 1200, y: 0},
        data: { width: 200, month: 'February'}
      },
      {
        id: 'March1',
        type: 'nodeMonth',
        position: { x: 1600, y: 0},
        data: {width: 200, month: 'March'}
      },
      {
      id: 'a.b.c', // Start node so you can click anything at all
      type: 'nodeTimeLine',
      position: { x: 35, y: 100},
      data: {title: 'O2C', color: 'blue', width: 600}
      }]);


    const onNodeClick = (event, node) => { // Loop through all connected ids and make them appear/display
      const ids = splitString(node.id);
      
      const updatedDisplayNodes = loadedNodes
        .filter((nodee) => ids.includes(splitString(nodee.id)[0]))
        .map((node) => {
          return {
            ...node,
            // Update any properties if needed
          };
        });
      
      setDisplayNodes([...displayNodes, ...updatedDisplayNodes]);
      
    };

    function splitString(inputString) {
      // Use the split method to split the input string at '.'
      const resultArray = inputString.split('.');
    
      return resultArray;
    }

    return (
      <div style={{ width: '100vw', height: '100vh'}} >
      <ReactFlow className="scrollable_container" nodeTypes={nodeTypes} nodes={displayNodes}
      zoomOnDoubleClick={false} zoomOnScroll={false} 
      panOnDrag={false}
      onNodeClick={onNodeClick}
      />
      </div>

    )
}
