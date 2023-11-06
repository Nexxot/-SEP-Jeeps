import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import './css/node.css';

const handleStyle = { left: 10 };
 
export default function RedNodeCircle({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div class="yellow_circle"></div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );

}