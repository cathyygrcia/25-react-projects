import { useState } from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  noOfStars: number;
};

export default function StarRating({ noOfStars }: Props) {
  const [rating, setRating] = useState(0);

  function handleClickedStars(index: any) {
    setRating(index + 1);
    console.log(index);
  }

  return (
    <div className="w-screen h-screen flex justify-center">
      {Array.from({ length: noOfStars }, (_, index) => (
        <FaStar
          key={index}
          className={`text-6xl ${
            index < rating ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() => handleClickedStars(index)}
          onMouseOver={() => handleClickedStars(index)}
        />
      ))}
    </div>
  );
}
