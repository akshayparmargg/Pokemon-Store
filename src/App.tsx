// import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./AppRoutes";

// function App() {
//   return (
//     <Router>
//       <AppRoutes />
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Container,
} from "@mui/material";

// Create a custom theme if needed
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Example primary color
    },
    secondary: {
      main: "#dc004e", // Example secondary color
    },
    background: {
      default: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This resets the default styles */}
      <Router>
        <Container sx={{ padding: "16px" }}>
          <AppRoutes />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
