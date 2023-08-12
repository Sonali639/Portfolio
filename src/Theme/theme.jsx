import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#F50057",
    },
    attention:{
        main:"#FCDE02"
    }
  },
  typography: {
    h1:{
      position: "absolute",
      top: "30%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "250px",
      color: "#f0f0f0",
      fontWeight: "700",
      fontFamily: "Playfair Display, Georgia, serif",
      lineHeight: "1.1",
      textAlign: "center",
      zIndex: -1, 
    },
    h2: { 
    color: "Black",
    fontSize: "50px",
    fontFamily: "Playfair Display, Georgia, serif"
},
h4:{
  fontSize: "34px",
    fontWeight: "400",
    lineHeight:" 1.5",
    fontFamily: "Playfair Display, Georgia, serif",
    color: "#000"
},
smallestText:{
  display: "block",
    textTransform: "uppercase",
    fontSize: "12px",
    letterSpacing: "3px",
    marginBottom: "10px",
    color: "#bfbfbf",
    fontWeight: "600"
},
    paragraph: {
        lineHeight: "1.8",
        fontSize: "16px",
        fontWeight: "400",
        background: "#fafafa",
        color: "gray",
    },
    verticalText: {
        color:"rgb(0, 0, 0.8)",
        fontFamily: "Karla, Arial, sans-serif",
        fontSize: "14px",
        textTransform: "uppercase",
        letterSpacing: "1em",
        display: "flex",
        alignItems: "center",
        writingMode: "vertical-lr",
        position: "relative",
        "::after": {
          content: '""',
          position: "absolute",
          marginTop: "5px",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "40px",
          background: "black",
        },
    }
  },
  icon: {
    socialIcons:{
        size:"20px",
        color:"black",
        margin:"10px"
    }
  }
});

function CustomTheme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default CustomTheme;
