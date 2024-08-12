import { useState, useEffect } from "react";

type Products = {
  id: number;
  thumbnail: string;
  title: string;
};

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      if (!response.ok) {
        throw new Error("No data found");
      }
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
      }
      console.log(result);
    } catch (e: any) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <>
      <div className="flex flex-col gap-5">
        {loading && <p>Loading data! Please wait...</p>}
        <div className="grid grid-cols-4 gap-2.5">
          {products.length > 0
            ? products.map((item) => (
                <div
                  key={item.id}
                  className="p-5 border-solid border-2 flex flex-col justify-center items-center"
                >
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            : !loading && <p>No products available.</p>}
        </div>
        <div className="flex justify-center text-white">
          <button
            onClick={() => setCount(count + 1)}
            className="flex justify-center w-1/5 bg-gray-600"
            disabled={loading}
          >
            Load More Products
          </button>
        </div>
      </div>
    </>
  );
}
