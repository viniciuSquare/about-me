import { Handle, Position } from "reactflow";

export function DefaultHandlers() {
  return (
    <>
      <Handle 
        id="top"
        type="source" 
        position={Position.Top} 
        className="-top-5 bg-transparent w-3 h-3 border-2 border-blue-400" 
      />
      <Handle 
        id="bottom"
        type="source" 
        position={Position.Bottom} 
        className="-bottom-5 bg-transparent w-3 h-3 border-2 border-blue-400" 
      />
      <Handle 
        id="left"
        type="source" 
        position={Position.Left} 
        className="-left-5 bg-transparent w-3 h-3 border-2 border-blue-400" 
      />
      <Handle 
        id="right"
        type="source" 
        position={Position.Right} 
        className="-right-5 bg-transparent w-3 h-3 border-2 border-blue-400" 
      />
    </>
  )
}