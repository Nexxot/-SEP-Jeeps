import { Handle, Position } from 'reactflow';
import './css/node.css';
 
export default function NodeOverlap({data}) {
  const source = data.source;

  return (
    <>

    <div>
      <div>
      <div className={'black_overlap'}></div>
      </div>
      {source === 'TOP' && 
        <div>
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
        </div>
      }
      {source === 'RIGHT' && 
        <div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
        </div>
      }
      {source === 'BOTTOM' && 
        <div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
        </div>
      }
      {source === 'LEFT' && 
        <div>
      <Handle type="source" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
        </div>
      }
    </div>
    </>
  );

}