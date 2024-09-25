import TreeList from "./TreeList";
import menus from "./data";
export default function TreeView(){
    return (
        <>
            <div className="treeCont">
                <TreeList menuList = {menus} />
            </div>
        </>
        
    );
}