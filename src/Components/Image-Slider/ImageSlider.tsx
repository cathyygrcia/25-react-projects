import { useState } from "react";

export default function ImageSlider() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl: any) {
    try {
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data) {
        setImages(data);
      }
    } catch (e: any) {
      setErrorMsg(e.message);
    }
  }

  return <></>;
}
