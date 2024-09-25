import TreeList from "./TreeList";

export default function TreeItem({menu}){
    return (
        <>
            <li>
                <p>{menu.label}</p>

                {
                    menu && menu.children && menu.children.length > 0? 
                    <TreeList menuList={menu.children}/>: null
                }
            </li>
        </>
    );
}