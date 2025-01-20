import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Container,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container sx={{ padding: "16px" }}>
          <AppRoutes />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
