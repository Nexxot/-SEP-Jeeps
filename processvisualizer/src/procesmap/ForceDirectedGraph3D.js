import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import SpriteText from 'three-spritetext';
import * as THREE from 'three';

export default function ForceDirectedGraph({clickedNodeID, setClickedNodeID,
  cooldownTicks,setCooldownTicks,
  currentPage,setCurrentPage,
  loadedData, nodes, links}) {

  function createNodeObject(node) {
    const group = new THREE.Group();
    const matchingNode = loadedData.find((nodeSearching) => nodeSearching.id === node.id);

    if (matchingNode && matchingNode.dependant) {
     const dependantIds = matchingNode.dependant.split(' ').filter((id) => id !== '');
 
     if (dependantIds.length > 1) {
      const shape = new THREE.Mesh(
        new THREE.BoxGeometry(10,10,10), // Shape like box
        new THREE.MeshBasicMaterial({ color: 'black' })
      );
      group.add(shape);
    }else{
      // Create the node shape
      const shape = new THREE.Mesh(
        new THREE.SphereGeometry(5), // Shape like Sphere
        new THREE.MeshBasicMaterial({ color: node.color })
      );
      group.add(shape);
      } 
    }else{// If no dependancy, assume its start of HP, show label
    const shape = new THREE.Mesh(
      new THREE.SphereGeometry(5), // Shape like Sphere
      new THREE.MeshBasicMaterial({ color: node.color })
    );
    group.add(shape);
    const sprite = new SpriteText(matchingNode.hp);
    sprite.color = node.color;
    sprite.textHeight = 8;
    sprite.position.set(0, 10, 0); // Adjust the position as needed
    group.add(sprite);
    }


    return group;
  }

  const onNodeClick = (node, event) => {
    setCooldownTicks(0); //Stop all force motion when clicking
    if(currentPage === "mainMetaClosed"){
      setCurrentPage("mainMetaOpened");
    }else{
      if(clickedNodeID === node.id){
        setCurrentPage("mainMetaClosed");
      }
    }
    setClickedNodeID(node.id); // After so check for current node id works
  };

  const onBackgroundClick = (node, event) => {
    setCooldownTicks(0); //Stop all force motion when clicking
    if(currentPage === "mainMetaOpened"){
      setCurrentPage("mainMetaClosed");
    }
    setClickedNodeID(null); // After so check for current node id works
  };

  return (
    <div style={{ width: '100vw', height: '100vh'}} data-testid="process-view-3D-id">
      <ForceGraph3D
        graphData={{ nodes, links }}
        nodeLabel="id"
        linkDirectionalParticles="value"
        linkDirectionalParticleSpeed={(d) => d.value * 0.001}
        nodeThreeObject={(node) => createNodeObject(node)}
        linkCurvature={0.05}
        enableNodeDrag={false}
        cooldownTicks={cooldownTicks}
        onNodeClick={onNodeClick}
        onBackgroundClick={onBackgroundClick}
        backgroundColor='white'
      />
    </div>
  );
}
