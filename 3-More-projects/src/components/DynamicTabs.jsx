import React, { useState } from "react";
import { tabsList } from "../tabsData";
import "./css/loadmore.css";
function DynamicTabs() {
  const [activeTab, setActiveTab] = useState(null);
  const activateTab = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <h1 style={{ margin: "30px" }}>Dynamic Tabs</h1>
      <div className="tabCont">
        {tabsList && tabsList.length > 0
          ? tabsList.map((tabs) => (
              <button
                key={tabs.id}
                className={tabs.id === activeTab ? "active" : "inactive"}
                style={{ borderRadius: "0px" }}
                onClick={() => activateTab(tabs.id)}
              >
                {tabs.title}
              </button>
            ))
          : null}
      </div>
      <div className="tabData">
        {tabsList && tabsList.length > 0
          ? tabsList.map((tabs) =>
              tabs.id === activeTab ? <p>{tabs.content}</p> : null
            )
          : null}
      </div>
    </>
  );
}

export default DynamicTabs;
