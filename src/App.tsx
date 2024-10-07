import "./App.css";
import Accordion from "./Components/Accordion/Accordion";
import ImageSlider from "./Components/Image-Slider/ImageSlider";
import LoadMore from "./Components/Load-More/LoadMore";
import QrCodeGenerator from "./Components/QR-Code-Generator/QrCodeGenerator";
import RandomColors from "./Components/Random Color/RandomColor";
import StarRating from "./Components/Star Rating/StarRating";
import DarkLightMode from "./Dark-Light-Mode/DarkLightMode";

function App() {
  return (
    <>
      <Accordion />
      <RandomColors />
      <StarRating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} pages={1} />
      <LoadMore />
      <QrCodeGenerator />
      <DarkLightMode />
    </>
  );
}

export default App;
