import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Iframe from "react-iframe";

const Home = () => {
  const [phone, setPhone] = useState("");
  const changeNumber = (value) => {};
  return (
    <>
      <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
        <Box component="div" display="block">
          <Button>GET ASSETS</Button>

          <Typography variant="h2">
            <a href="https://wa.me/923495025995">Send Message</a>
          </Typography>
          <Typography variant="h3">Title</Typography>
          <Typography variant="body1">Body</Typography>
          <Typography variant="body2">Body lite</Typography>
        </Box>
      </Box>

      {/* <Iframe
        url="https://www.w3schools.com"
        width="100%"
        height="100%"
        id="googleIframe"
        display="initial"
        position="relative"
      /> */}
    </>
  );
};

export default Home;
