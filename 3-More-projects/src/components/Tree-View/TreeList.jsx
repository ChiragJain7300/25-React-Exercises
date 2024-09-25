import TreeItem from "./TreeItem";

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