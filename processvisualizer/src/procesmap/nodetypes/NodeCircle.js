import { Handle, Position } from 'reactflow';
import './css/node.css';

export default function NodeCircle({ data }) {
  const title = data.title; // Only add title if it exists
  const color = data.color;
  const isStartNode = data.isStartNode;
  const isEndNode = data.isEndNode;
  // Define an offset value for the Handle components
  const handleOffsetX = -20; // Adjust this value as needed

  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {title ?
          <p style={{ textAlign: "center", fontSize: 30, WebkitTextFillColor: color}}>
            {title}
          </p> :       //If its a label nodel, just text, else normal node
          <div> 
            <div>
              <div className={color + '_circle'}></div>
            </div>
            <div>
              <Handle type="target" position={Position.Left} />
              <Handle type="source" position={Position.Right} />
           </div>
         </div>
      }
    </div>
    </div>
  );
}
