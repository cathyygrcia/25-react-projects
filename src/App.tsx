import "./App.css";
import Accordion from "./Components/Accordion/Accordion";
import ImageSlider from "./Components/Image-Slider/ImageSlider";
import RandomColors from "./Components/Random Color/RandomColor";
import StarRating from "./Components/Star Rating/StarRating";

function App() {
  return (
    <>
      <Accordion />
      <RandomColors />
      <StarRating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} pages={1} />
    </>
  );
}

export default App;
