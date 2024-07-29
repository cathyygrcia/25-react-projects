import "./App.css";
import Accordion from "./Components/Accordion/Accordion";
import RandomColors from "./Components/Random Color/RandomColor";
import StarRating from "./Components/Star Rating/StarRating";

function App() {
  return (
    <>
      <Accordion />
      <RandomColors />
      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
