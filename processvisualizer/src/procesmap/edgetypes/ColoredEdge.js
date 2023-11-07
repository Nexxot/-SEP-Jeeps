import React from 'react';
import { EdgeText, EdgeTextPath, EdgeTextBackground } from 'react-flow-renderer';
import { Background } from 'reactflow';

export const ColoredEdge = ({ data, edge, sourceX, sourceY, targetX, targetY, label, style = {} }) => {
    const centerX = (sourceX + targetX) / 2;
    const centerY = (sourceY + targetY) / 2;

  return (
    <g>
      <path
      fill='none'
        strokeWidth={2}
        stroke={data.color || '#ccc'} // Use the color specified in edge data or a default color
        d={`M ${sourceX} ${sourceY} Q ${centerX} ${centerY + data.curve} ${targetX} ${targetY}`} 
      />
    </g>
  );
};
