import { Handle, Position } from 'reactflow';
import './css/node.css';
 
export default function NoceCircle({data}) {
  const title = data.title;
  const color = data.color;

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div class={color + '_circle'}>
        {title}
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );

}