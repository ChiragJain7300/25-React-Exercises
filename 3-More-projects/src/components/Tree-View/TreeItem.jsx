import { useState } from "react";
import TreeList from "./TreeList";

export default function TreeItem({ menu }) {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <li>
        <div className="parentElem">
          <p>{menu.label}</p>
          {menu && menu.children && menu.children.length > 0 ? (
            <button className="expand" onClick={() => setExpand(!expand)}>
              {expand ? "-" : "+"}
            </button>
          ) : null}
        </div>

        {expand ? (
          menu && menu.children && menu.children.length > 0 ? (
            <TreeList menuList={menu.children} />
          ) : null
        ) : null}
      </li>
    </>
  );
}
