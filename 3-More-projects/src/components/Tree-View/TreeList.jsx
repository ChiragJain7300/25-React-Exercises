import TreeItem from "./TreeItem";
import "../css/treeView.css"
export default function TreeList({menuList}){
    return (
        <>
            <ul>
                {
                    menuList.map((menu) => (
                        <TreeItem menu={menu} />
                    ))
                }
            </ul>
        </>
    );
}