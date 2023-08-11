import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#F50057",
    },
  },
  typography: {
    h2: { color: "red" },
    sonali: {
      color: "green",
    },
  },
});

function CustomTheme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default CustomTheme;
