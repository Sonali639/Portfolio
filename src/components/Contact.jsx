import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Title from "./Title";

function Contact() {
  const contactInfo = [
  
    {
      icon: <FiPhoneCall />,
      text: "+91 6395673945",
    },
    {
      icon: <AiOutlineMail />,
      text: "sonaisauja9005@gmai.com",
    },
  ];

  const title=
    {
        backgroundTitle:"Contact",
        miniTitle:"Contact",
        mainTitle:"Contact Me"
    }
  

  return (
    <Box sx={{ py: 5, px:5 }}>
     <Title Title={title}/>
      <Box sx={{ px: 2,  }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Item>
              <Typography variant="h5">Contact Information:</Typography>

              {contactInfo.map((info, index) => (
                <Grid key={index} item md={12} sx={{ pt: 2.5, px: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item md={1}>
                      <Item sx={{ pt: 1 }}>{info.icon}</Item>
                    </Grid>
                    <Grid item md={11}>
                      <Item>
                        <Typography variant="paragraph">{info.text}</Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Item>
          </Grid>
          <Grid item xs={12} md={7} sx={{}}>
            <Item>
              <Box>
                <TextField
                  id="outlined-basic"
                  label="Message"
                  multiline 
                  rows={7}
                  fullWidth
                  InputProps={{
                    style: {
                      color: "gray"
                    },
                  }}
                />
                <Box sx={{display:"flex", gap: 3.5,pt:3.5}}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      color: "gray", 
                    },
                  }}
                />
                <TextField
                 fullWidth
                  id="outlined-basic"
                  label="Email"  
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      color: "gray", 
                    },
                  }}
                />
                </Box>
                <Button
                      variant="outlined"
                      sx={{
                        border: "1px solid ",
                        borderRadius: "0px",
                        backgroundColor: "#FCDE02",
                          borderColor: "#FCDE02",
                          color: "#000000",
                        py: 1.2,
                        px: 2.5,
                        mt:3,
                        "&:hover":{
backgroundColor:"#E6CE25",
borderColor: "#E6CE25",
                       }
                      }}
                    >
                      Send Message
                    </Button>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Contact;
