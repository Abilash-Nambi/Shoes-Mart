import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import RootLayout from "./routes/RootLayout";
import ProductsList from "./pages/productList/ProductsList";
import ProductDetail from "./pages/productDetail/ProductDetail";

let theme = createTheme({
  typography: {
    fontFamily: "Assistant, sans-serif",
    body2: {
      fontFamily: "Assistant, sans-serif",
    },
    // body2: {
    //   fontFamily: "Poppins, Arial, sans-serif",
    // },
    // You can customize other typography variants as needed
  },
  spacing: 6,
  palette: {
    primary: {
      main: "#0288d1",
    },
    secondary: {
      main: "#ab47bc",
    },
  },
});
theme = responsiveFontSizes(theme);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<ProductsList />} />
        <Route path="single-product/:id" element={<ProductDetail />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
