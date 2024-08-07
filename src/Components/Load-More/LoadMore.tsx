import { useEffect, useState } from "react";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
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
    } catch (e: any) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div>Hello World</div>
    </>
  );
}
