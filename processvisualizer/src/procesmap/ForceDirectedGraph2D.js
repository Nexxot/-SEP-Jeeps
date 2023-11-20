import React, { useEffect, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

export default function ForceDirectedGraph2D({ viewClickCounter,
  clickedNodeID, setClickedNodeID,
   cooldownTicks,setCooldownTicks,currentPage,setCurrentPage
  ,loadedData, nodes, links}) {
  const graphRef = useRef(null);

  function decidePaint({ id, x, y }, color,ctx) {
   // Find the corresponding node in loadedData based on the id
    const matchingNode = loadedData.find((node) => node.id === id);

    if (matchingNode && matchingNode.dependant) {
     const dependantIds = matchingNode.dependant.split(' ').filter((id) => id !== '');
 
     if (dependantIds.length > 1) {
       nodePaintRectangle({ id, x, y }, color,ctx);
     } else {
       nodePaintCircle({ id, x, y }, color, ctx);
     }
    } else { // If no dependancy, assume its start of HP, show label
      nodePaintCircle({ id, x, y }, color, ctx);
        ctx.fillStyle = color;
        ctx.font = '10px Sans-Serif';
        ctx.textAlign = 'center';
        ctx.fillText(matchingNode.hp, x, y - 10); // Adjust the position and label as needed
    }
  }

  function nodePaintRectangle({ x, y }, color,ctx) {
    ctx.fillStyle = color; // If you dont set color here, and set it manually, it breaks, node not clickable
    ctx.fillRect(x - 6, y - 4, 12, 8);
  }

  function nodePaintCircle({ x, y }, color, ctx) {
    ctx.fillStyle = color;
    ctx.beginPath(); 
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false); 
    ctx.fill(); 
  }

  const onNodeClick = (node, event) => {
    setCooldownTicks(0); //Stop all force motion when clicking
    if(currentPage === "mainMetaClosed"){
      setCurrentPage("mainMetaOpened");
    }else{
      setCurrentPage("mainMetaClosed");
    }
    setClickedNodeID(node.id); // After so check for current node id works
  };

  const onBackgroundClick = (node, event) => {
    setCooldownTicks(0); //Stop all force motion when clicking
    if(currentPage === "mainMetaOpened"){
      setCurrentPage("mainMetaClosed");
    }else{
      if(clickedNodeID === node.id){
        setCurrentPage("mainMetaClosed");
      }
    }
    setClickedNodeID(null); // After so check for current node id works
  };

  useEffect(() => {
    if(viewClickCounter === 0){ // Apply more force at the beginning
      graphRef.current.d3Force('charge').strength(-30);
    }else{
      graphRef.current.d3Force('charge').strength(-10);
    }
    graphRef.current.d3Force('link').strength(0.85);
    graphRef.current.zoom(1.5) //Vllt dynamic machen?
  });

 
  return (
    <div style={{ width: '100vw', height: '84.7vh' }} data-testid="process-view-id">
      <ForceGraph2D
        ref={graphRef}
        graphData={{ nodes, links }}
        nodeLabel="id"
        linkDirectionalParticles="value"
        linkDirectionalParticleSpeed={(d) => d.value * 0.001}
        nodeCanvasObject={(node, ctx) => 
            {  
                    decidePaint(node, node.color,ctx)
            }}
        nodePointerAreaPaint={decidePaint}
        linkCurvature={0.075}
        enableNodeDrag={false}
        cooldownTicks={cooldownTicks}
        autoPauseRedraw={false} // TODO FOR LATER, AUTO REDRAW?
        onNodeClick={onNodeClick}
        onBackgroundClick={onBackgroundClick}
      />

    </div>
  );
}
