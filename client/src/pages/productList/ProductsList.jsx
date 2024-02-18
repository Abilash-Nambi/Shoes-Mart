import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
const Wrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  padding: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    paddingLeft: "30px",
  },
  "& .poducts-buttons": {
    justifyContent: "space-between",
  },
  "& .products-card": {
    maxWidth: 350,
    minHeight: 400,
    [theme.breakpoints.down("md")]: {
      minWidth: 350,
    },
  },
}));
const API_URL = "http://localhost:7000/api/products";
const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data, "res");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {products.map((data, i) => (
          <Grid item md={3}>
            <Card key={i} className="products-card">
              <CardMedia
                className="products-image"
                component="img"
                alt={`${data.name}`}
                height="250"
                image={`${data.grid_picture_url}`}
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {data.name}
                </Typography>
              </CardContent>
              <CardActions className="poducts-buttons">
                <Button variant="contained" size="small">
                  <Link to={`single-product/${data.slug}`}>VIEW PRODUCT</Link>
                </Button>
                <Button variant="contained" size="small">
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default ProductsList;
