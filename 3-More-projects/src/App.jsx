import "./App.css";
import DarkTheme from "./components/DarkTheme";
import DynamicTabs from "./components/DynamicTabs";
import ImageScroller from "./components/ImageScroller";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import QrcodeGenerator from "./components/QrcodeGenerator";
import StarRating from "./components/StarRating";
import TreeView from "./components/Tree-View/TreeView";
function App() {
  return (
    <>
      {/* Rating Star Components
      <StarRating noOfStars={10} size={25}/> */}

      {/* Image Slider */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=10"}/> */}

      {/* Load More Functionality */}
      {/* <LoadMore /> */}

      {/* Tree View UI component */}
      {/* <TreeView /> */}

      {/* QR Code Generator */}
      {/* <QrcodeGenerator /> */}

      {/* Light / Dark Mode switch */}
      {/* <DarkTheme /> */}

      {/* Image Scroller */}
      {/* <ImageScroller /> */}

      {/* Dynamic Tabs  */}
      <DynamicTabs />
    </>
  );
}

export default App;
