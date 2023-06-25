import {
  Handle,
  Node,
  NodeProps,
  Position,
  useNodeId,
  useStore,
} from "reactflow";

import { NodeResizer, NodeResizeControl } from "@reactflow/node-resizer";
import { useState } from "react";
import { DefaultHandlers } from "../DefaultHandlers";
import { PaperPlane } from "phosphor-react";

interface DatabaseAttribute {
  name: string;
  type: string;
  description: string;
}

export function DatabaseModel({ selected }: NodeProps) {
  const [attributes, setAttributes] = useState<DatabaseAttribute[]>([
    {
      name: "Status note",
      type: "text",
      description: "Brief description",
    },
    {
      name: "Due to",
      type: "date",
      description: "Date when the task is due",
    },
  ]);

  const [databaseId, setDatabaseId] = useState<string>("");

  function fetchDatabaseProperties() {
    if (databaseId === "") {
      alert("Please enter a database id");
      return;
    }

    fetch(`http://localhost:3030/database/details/${databaseId}`)
      .then((response) => response.json())
      .then((data) => {
        
        Object.keys(data).map((key) => {
          setAttributes((prev) => [ ...prev, { name: key, type: data[key].type, description: "" } ]);
        });
        
        alert("Database properties fetched");
      });
  }

  return (
    <>
      <div className="bg-indigo-50 rounded min-w-[750px] min-h-[200px] w-full h-full group px-4">
        <div className="database-header w-full flex justify-between border-b-2 border-black py-4">
          <h2 className="database-title">Tasks</h2>
          <div className="container w-auto flex items-center gap-3">
            <input
              className="database-id"
              value={databaseId}
              onChange={(e) => setDatabaseId(e.target.value)}
            />
            <button
              className="rotate-45 transform transition-all duration-300 ease-in-out hover:rotate-0"
              onClick={() => fetchDatabaseProperties()}
            >
              <PaperPlane />
            </button>
          </div>
        </div>
        <table className="attributes w-full">
          <tbody className="flex flex-col gap-1">
            {attributes.map((attribute, index) => (
              <AttributeRow key={attribute.name} attribute={attribute} />
            ))}
          </tbody>
        </table>
        {/* REACT FLOW STRUCTURE */}
        <NodeResizer
          minWidth={750}
          minHeight={200}
          isVisible={selected}
          lineClassName="border-blue-400"
          handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
        />

        <DefaultHandlers />
      </div>
    </>
  );
}
function AttributeRow({ attribute }: { attribute: DatabaseAttribute }) {
  return (
    <tr className="attribute grid grid-cols-3 w-full justify-evenly py-3 border-2 border-black-2">
      <td className="name px-2">{attribute.name}</td>
      <td className="type px-2 bg-yellow-100">
        <span className={attribute.type}>{attribute.type}</span>
      </td>
      <td className="attribute-description px-2">{attribute.description}</td>
    </tr>
  );
}
