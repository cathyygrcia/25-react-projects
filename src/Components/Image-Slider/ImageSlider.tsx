import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

type Props = {
  url: string;
  limit: number;
  pages: number;
};

type Image = {
  download_url: string;
  author: string;
  id: number;
};

export default function ImageSlider({ url, limit, pages }: Props) {
  const [images, setImages] = useState<Image[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${pages}&limit=${limit}`);
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

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occurred: {errorMsg}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="relative w-full md:w-1/2 lg:w-1/3 mx-auto">
      <BsArrowLeftCircleFill
        className="text-3xl absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white mx-5"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.author}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "rounded-lg w-full shadow-outline transition-opacity duration-500"
                  : "rounded-lg w-full hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="text-3xl absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white mx-5"
        onClick={handleNext}
      />
      <div className="flex justify-center mt-4">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-4 w-4 rounded-full cursor-pointer m-1 ${
                  currentSlide === index ? "bg-gray-600" : "bg-black"
                }`}
              ></button>
            ))
          : null}
      </div>
    </div>
  );
}
