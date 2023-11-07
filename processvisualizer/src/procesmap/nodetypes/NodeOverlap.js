import { Handle, Position } from 'reactflow';
import './css/node.css';
 
export default function NodeOverlap({data}) {
  let title = data.title; //Only add title if it exists
  let color = data.color;   
  
  return (
    <>

    <div>
      <div>
      <div className={'black_overlap'}></div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
    </>
  );

}