import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../routes/RootLayout";
import ProductsList from "../pages/productList/ProductsList";
import ProductDetail from "../pages/productDetail/ProductDetail";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<ProductsList />} />
        <Route path="single-product/:id" element={<ProductDetail />} />
      </Route>
    </Route>
  )
);
