import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const API_URL = "http://localhost:7000/api/products";

const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  "& .product-detail": {
    paddingTop: theme.spacing(9),
    [theme.breakpoints.down("md")]: {
      paddingTop: 0,
    },
  },
  "& .product-size": {
    paddingBottom: "20px",
  },
  "& .product-image-grid": {
    [theme.breakpoints.down("md")]: {
      height: "303px",
    },
  },
  "& .product-image": {
    [theme.breakpoints.down("md")]: {
      width: "320px",
    },
  },
}));
const ProductDetail = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();
  //console.log(product, "res");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);

      setProduct(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  function centsToINR(cents, exchangeRate) {
    const a = (cents / 100) * exchangeRate;
    const str_a = a.toString();
    const result = str_a.slice(0, 7);
    return result;
  }
  return (
    <Wrapper>
      <Grid container spacing={3}>
        <Grid item md={6} className="product-image-grid">
          <img
            className="product-image"
            src={product.main_picture_url}
            alt={product.name}
            width="600px"
          />
        </Grid>
        <Grid item md={6}>
          <Box className="product-detail">
            <Typography variant="h6">Brand:{product.brand_name}</Typography>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body1">In Stock</Typography>
            <Rating name="read-only" value={3} readOnly />
            <Typography variant="h4">
              ₹{centsToINR(product.retail_price_cents, 0.043)}
            </Typography>
            <Typography variant="body1">Color:{product.color}</Typography>
          </Box>
          <Box className="product-size">
            <Typography variant="body1">
              <div
                dangerouslySetInnerHTML={{
                  __html: product.story_html,
                }}
              />
            </Typography>
            <Typography>
              <Typography variant="body1">Available Size</Typography>
              {product?.size_range?.map((data) => `${data} ,    `).slice(0, 6)}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              size="large"
              startIcon={<AddShoppingCartIcon />}
              color="error"
              sx={{ marginRight: 5 }}
            >
              ADD TO BAG
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<FavoriteBorderIcon />}
              color="success"
            >
              BUY NOW
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ProductDetail;
