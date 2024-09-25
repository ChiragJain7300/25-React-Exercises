import './App.css'
import ImageSlider from './components/ImageSlider'
import StarRating from "./components/StarRating"
function App() {

  return (
    <>
      {/* Rating Star Components
      <StarRating noOfStars={10} size={25}/> */}

      <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=10"}/>
    </>
  )
}

export default App
