import TreeList from "./TreeList";
import menus from "./data";
import "../css/treeView.css";
export default function TreeView() {
  return (
    <>
      <div className="treeCont">
        <TreeList menuList={menus} />
      </div>
    </>
  );
}
