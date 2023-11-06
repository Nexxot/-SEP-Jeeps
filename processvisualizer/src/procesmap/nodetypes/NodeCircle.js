import { Handle, Position } from 'reactflow';
import './css/node.css';
 
export default function NoceCircle({data}) {
  let title = data.title;
  let color = data.color;   

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div class={color + '_circle'}>
        { title != null ? // Check if title exists
         <p style={{textAlignVertical: "center",textAlign: "center"}}>{title}</p>
        :  <p></p>
        }
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );

}