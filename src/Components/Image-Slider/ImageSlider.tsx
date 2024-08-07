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

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occurred{errorMsg}</div>;
  }

  console.log(images);

  return (
    <>
      <div className="flex justify-center items-center relative w-1/3">
        <BsArrowLeftCircleFill className="text-3xl" />
        {images && images.length
          ? images.map((imageItem) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className="current-image"
              />
            ))
          : null}
        <BsArrowRightCircleFill className="text-3xl" />
        <span>
          {images && images.length
            ? images.map((_, index) => <button key={index}></button>)
            : null}
        </span>
      </div>
    </>
  );
}
