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
import { router } from "./routes/Routes";

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
