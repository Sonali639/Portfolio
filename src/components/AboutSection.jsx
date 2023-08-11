import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoUnsplash } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Button from "@mui/material/Button";

function AboutSection(props) {
  return (
    <Box sx={{px:3.6}}>
      <Typography
        variant="h1">
        About
      </Typography>
      <Grid
       container
       spacing={2}
       direction={props.order ? "row-reverse" : "row"}
       sx={{
        position: "relative",
        zIndex: 1,

         top: "110px",
         maxWidth: "100%",
         marginLeft: "auto",
         marginRight: "auto",
         alignItems: "center",
       }}
   
      >
        <Grid item xs={12} md={4.8} >
          <Item>
            <img
              srcSet="https://images.unsplash.com/photo-1512310604669-443f26c35f52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2534&q=80"
              alt=""
              width="100%"
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={7.2}>
          <Item sx={{ pl: props.order ? 0 : 12 }}>
            <Box>
              <Typography variant="h2" gutterBottom>
                Sonali Saluja
              </Typography>
              <Grid container spacing={2} sx={{ p: 3 }}>
                <Grid item md={2} sm={2}>
                  <Item>
                    <Typography variant="verticalText">About</Typography>
                  </Item>
                </Grid>
                <Grid item md={10} sm={2}>
                  <Item>
                    <Typography variant="paragraph">
                      UT A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth. Even the all-powerful Pointing has no
                      control about the blind texts it is an almost
                      unorthographic life.
                    </Typography>
                    <Box sx={{ py: 2.8, display: "flex" }}>
                      <Box sx={{ pr: 0.5 }}>
                        <BiLogoGmail
                          size={20}
                          sx={{ px: 2 }}
                          color="theme.palette.attention.main"
                        />
                      </Box>
                      <Box sx={{ px: 0.5 }}>
                        <AiOutlineGithub size={20} sx={{ px: 2 }} />
                      </Box>
                      <Box sx={{ px: 0.5 }}>
                        <AiFillLinkedin size={20} sx={{ px: 2 }} />
                      </Box>
                      <Box sx={{ px: 0.5 }}>
                        <AiOutlineInstagram size={20} sx={{ px: 2 }} />
                      </Box>
                      <Box sx={{ px: 0.5 }}>
                        <BiLogoUnsplash size={20} />
                      </Box>
                      <Box sx={{ px: 0.5 }}>
                        <CiFacebook size={20} />
                      </Box>
                    </Box>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "0px",
                        color: "#4d4d4d",
                        py: 1.2,
                        px: 2.5,
                        "&:hover": {
                          backgroundColor: "#FCDE02",
                          borderColor: "#FCDE02",
                          color: "#000000",
                        },
                      }}
                    >
                      Download CV
                    </Button>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;
