import { Box } from "@mui/material";
import React from "react";
import Title from "./Title";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import loveTravel from "../Images/love-travel.jpg"
import {PiLinkSimpleDuotone} from "react-icons/pi"
import ProjectData from "./projectData"


function Projects() {
  const title = {
    backgroundTitle: "Projects",
    miniTitle: "Selected Work",
    mainTitle: "Projects Highlights",
  };



  return (
    <Box sx={{ px: 5 ,mx:3}}>
      <Title Title={title} />

      <Box sx={{ px: 2 }}>
      {ProjectData.map((data, index) => (  
        <Grid container spacing={2} sx={{ alignItems: "center", mt: index > 0 ? 5 : 0, pt: index > 0 ? 5 : 0  }}  direction={data.direction} key={index}>
          <Grid item xs={12} md={5}>
            <Item>
              <img src="" alt="" srcset={data.img} width="100%"/>
            </Item>
          </Grid>
          <Grid item xs={12} md={7} >
            <Item sx={{pl:5}}>
              <Box>
                <Typography variant="h4">{data.projectTitle}</Typography>
                <Typography variant="smallestText" sx={{ pt: 0, pb: 2 }}>
                  {data.miniTitle}
                </Typography>
                <Typography variant="paragraph">
               {data.desc}
                </Typography>
                <Box>
                  <Typography variant="body1" sx={{ pt: 2.8 ,lineHeight: "1.4",
        fontSize: "18px",
        fontWeight: "400",}}>
          <PiLinkSimpleDuotone style={{paddingRight:"5px"}}/> 
                    Links:
                  </Typography>
                  <a
                    href={data.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  
                  >
                    Live Demo
                  </a>
                  <br />
                  <a
                    href={data.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository
                  </a>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      ))}
      </Box>
    </Box>
  );
}

export default Projects;
