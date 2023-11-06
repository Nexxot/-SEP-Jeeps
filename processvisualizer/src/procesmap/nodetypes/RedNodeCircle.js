import { Handle, Position } from 'reactflow';
import './css/node.css';
 
export default function RedNodeCircle() {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div class="red_circle"></div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );

}