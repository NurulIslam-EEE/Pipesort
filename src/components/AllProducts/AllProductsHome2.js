import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { AllProducts } from "./AllProducts";
import CheckBoxList from "../CommonComponents/CheckBoxList";
import { Box, Typography } from "@mui/material";


export default function AllProductsHome2() {
  // fetching products

  const [products, setProducts] = React.useState([]);
  const [sort, setSort] = React.useState('');
  const [filterProducts, setFilterProducts] = React.useState([]);
  const [state, setState] = React.useState([
    {
      id: 1,
      checked: false,
      title: "men's clothing",
    },
    { id: 2, checked: false, title: "electronics" },
    { id: 3, checked: false, title: "women's clothing" },
  ]);

//   fetch data fro API
  React.useEffect(() => {
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

  const handleSorting=()=>{
let newProducts2=[...products]
let newFilterProducts2=[...filterProducts]
    
        if(sort==='high'){
            const newProducts=newProducts2.sort(function(a, b){return b.price - a.price})
            setProducts(newProducts) 
            const newFilterProducts=newFilterProducts2.sort(function(a, b){return b.price - a.price})
            setFilterProducts(newFilterProducts) 
        }else if(sort==='low'){
            const newProducts=newProducts2.sort(function(a, b){return a.price - b.price})
            setProducts( newProducts) 
            const newFilterProducts=newFilterProducts2.sort(function(a, b){return a.price - b.price})
            setFilterProducts(newFilterProducts ) 
        }
    } 
  

  const handleFilterProducts = () => {
    //filter category
let newProducts=[...products]
    const categoryChecked = state
      .filter((item) => item.checked)
      .map((item) => item.title.toLowerCase());

    if (categoryChecked.length) {
        const filterP= newProducts.filter((item) => categoryChecked.includes(item.category))
      setFilterProducts( filterP );
     
    } else {
      setFilterProducts(newProducts);
    }

    console.log("check",sort);
  };
  React.useEffect(() => {
    handleSorting()
  }, [sort]);
  React.useEffect(() => {
    handleFilterProducts();
  }, [state]);

  console.log('see',sort,filterProducts,products)

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <Grid container sx={{ maxWidth: "1400px" }}>
        <Grid item sm={3} md={3} lg={2}>
          <CheckBoxList state={state} setState={setState} />
        </Grid>
        <Grid item sm={9} md={9} lg={10}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Box
                sx={{
                  background: "white",
                  marginTop: "20px",
                  height: "60px",
                  borderRadius: "8px",
                  width: "100%",
                  display: "flex ",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 10px",
                }}
              >
                <Typography>All Products</Typography>
                <Box>
                  <label for="sort">Sort By:</label>

                  <select onChange={e=>setSort(e.target.value)} name="sort" id="sort">
                    <option  value="default">Default</option>
                    <option  value="low">Price (Low to High)</option>
                    <option   value="high">Price (High to Low)</option>
                  </select>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <AllProducts filterProducts={filterProducts} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
