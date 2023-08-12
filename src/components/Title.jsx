import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function Title(props) {
  return (
<Box sx={{paddingBottom: "140px"}}>
<Typography variant="h1">{props.Title.backgroundTitle}</Typography>
      <Box
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,

          top: "30px",
        }}
      >
        <Typography variant="smallestText" gutterBottom>
          {props.Title.miniTitle}
        </Typography>
        <Typography variant="h4" gutterBottom sx={{    marginBottom: "1.5em",}}>
          {props.Title.mainTitle}
        </Typography>
      </Box>
</Box>
  )
}

export default Title
