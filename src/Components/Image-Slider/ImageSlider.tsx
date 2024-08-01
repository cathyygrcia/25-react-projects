import { useEffect, useState } from "react";

type Props = {
  url: string;
  limit: number;
  pages: number;
  author?: string;
};

type Image = {
  url: string;
  author: string;
};

export default function ImageSlider({ url, limit, pages, author }: Props) {
  const [images, setImages] = useState<Image[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?pages=${pages}&limit=${limit}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Network response is not ok");
      }

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e: any) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages(url);
  }, [url]);

  console.log(images);

  return (
    <>
      {images.map((imageItem) => (
        <p>{imageItem.author}</p>
      ))}
    </>
  );
}
