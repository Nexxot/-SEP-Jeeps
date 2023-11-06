import { Handle, Position } from 'reactflow';
import './css/node.css';
 
export default function NodeCircle({data}) {
  let title = data.title; //Only add title if it exists
  let color = data.color;   
  
  return (
    <>
      <Handle type="target" position={Position.Top} />
      {title && <p style={{ textAlign: "center", fontSize: 50}}>
          {title}
          </p>} 
      <div className={color + '_circle'}>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );

}