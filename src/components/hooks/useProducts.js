import { useEffect, useState } from "react";

const useProducts = (initial) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState(initial);
  const [state, setState] = useState([
    {
      id: 1,
      checked: false,
      title: "men's clothing",
    },
    { id: 2, checked: false, title: "electronics" },
    { id: 3, checked: false, title: "women's clothing" },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch("https://fakestoreapi.com/products");
      // convert data to json
      const json = await data.json();
      setProducts(json);
      setFilterProducts(json);
    };
    fetchData();
  }, []);

  const handleFilterProducts = () => {
    //filter category

    const categoryChecked = state
      .filter((item) => item.checked)
      .map((item) => item.title.toLowerCase());

    if (categoryChecked.length) {
        setFilterProducts(products.filter((item) =>
        categoryChecked.includes(item.category)
      )) 
    //   console.log(categoryChecked,filterProducts);
    }
  };

  useEffect(()=>{
    handleFilterProducts()
  },[state,products])
//   console.log(state,filterProducts)

  return { products, filterProducts ,state, setState};
};
export default useProducts;
