import { Handle, Node, NodeProps, Position, useNodeId, useStore } from 'reactflow';
import { NodeResizer, NodeResizeControl } from '@reactflow/node-resizer';
import { DefaultHandlers } from '../DefaultHandlers';

export function Square({ selected }: NodeProps) {
  return (
    <>
      <div className="bg-violet-500 rounded min-w-[200px] min-h-[200px] w-full h-full group">
        <NodeResizer 
          minWidth={200} 
          minHeight={200} 
          isVisible={selected} 
          lineClassName="border-blue-400"
          handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
        />

        <DefaultHandlers/>
      </div>
    </>
  )
}