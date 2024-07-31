import { useState } from "react";

type Props = {
  url: string;
  limit: number;
  pages: number;
};

export default function ImageSlider({ url, limit, pages }: Props) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl: string) {
    try {
      const response = await fetch(`${getUrl}?pages=${pages}&limit=${limit}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Network response is not ok");
      }

      if (data) {
        setImages(data);
      }
    } catch (e: any) {
      setErrorMsg(e.message);
    }
  }

  return <></>;
}
