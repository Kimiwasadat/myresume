'use client'
import Image from "next/image";
import { Box, Container, Stack, Typography, AppBar, Toolbar, IconButton, ThemeProvider, createTheme, Card, CardContent } from "@mui/material";
import React, { useState, useEffect } from "react";
import './globals.css';
import atGif from '../public/at.gif';
import ksjpg from '../public/ks.jpg'

export default function Home() {
  const [text, setText] = useState('');
  const [fullText, setFullText] = useState('Aspiring Software Engineer');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index]);

  const AppPallate = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#07122E',
      },
    },
  });

  return (
    <Stack>
      <ThemeProvider theme={AppPallate}>
  <AppBar position="static" enableColorOnDark>
    <Toolbar>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        =
      </IconButton>

      <IconButton>
        <Box sx={{ mr: 20, pl: 20 }}>
          <Typography variant="h6" component="div" color="white" sx={{ flexGrow: 1 }}>
            About Me
          </Typography>
        </Box>
      </IconButton>

      <IconButton>
        <Box sx={{ mr: 20, pl: 20 }}>
          <Typography variant="h6" component="div" color="white" sx={{ flexGrow: 1 }}>
            Experience
          </Typography>
        </Box>
      </IconButton>

      <IconButton>
        <Box sx={{ mr: 20, pl: 20 }}>
          <Typography variant="h6" component="div" color="white" sx={{ flexGrow: 1 }}>
            Resume
          </Typography>
        </Box>
      </IconButton>

      <IconButton>
        <Box sx={{ mr: 20, pl: 20 }}>
          <Typography variant="h6" component="div" color="white" sx={{ flexGrow: 1 }}>
            Contact
          </Typography>
        </Box>
      </IconButton>
    </Toolbar>
  </AppBar>
</ThemeProvider>

      {/* Background Section */}
      <Box sx={{
        width: '100%',
        minHeight: '100vh',  // Ensure it covers the viewport height
        backgroundSize: 'cover',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${atGif.src})`,
        backgroundBlendMode: 'darken',
        backgroundPosition: 'bottom',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Container maxwidth="lg" style={{ textAlign: "center" }}>
          <Stack sx={{ pt: '-100px' }}>
            <Box sx={{ pt: '-150px', mt:'-20%' }}>
              <Image
                src="/avatar.jpg" 
                alt="Avatar"
                width={250}
                height={250}
                style={{ 
                  mt:'-150%',
                  borderRadius: "50%",
                  backgroundSize: 'cover', 
                }} 
              />
            </Box>
          </Stack>
          <Box sx={{
            display: 'flex',
            
            ml: '10%',
            mr: "10%",
            textAlign: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant="h4" style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'white'
            }}>
              Kimiwa Sadat
            </Typography>
          </Box>
          <Typography variant="h5" style={{
            width: '100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'white',
          }}>
            {text}
          </Typography>
        </Container>
      </Box>

      {/* About Me Section */}
      <Box sx={{ p: '0%', mt: '5%' }}>
        <Stack sx={{ ml: '10%', mr: '5%' }}>
          <Card sx={{ width: "60%", height: "400px", radius: '20px', color: "#FAF9F6" }}>
            <CardContent sx={{ color: 'black', p: 2 }}>
              <Typography sx={{ color: 'black', p: 2 }} variant="h4"> About me</Typography>
              <Box sx={{ ml: '5%', mr: '5%' }}>
                <Typography variant='h6'>
                  Hi, I'm an aspiring software engineer looking to make a difference in the software industry. I'm currently pursuing my bachelor's in Computer Science at The City College of New York. You can learn more about me below, I look forward to hearing more from you.
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Image
                src="/ks.jpg" 
                alt="justmeig"
                width={300}
                height={400}
                style={{ 
                  mt:'-150%',

                  backgroundSize: 'cover', 
                }} 
              />
        </Stack>
      </Box>

      {/* Additional Sections (if needed) */}
      <Stack sx={{ ml: '40%', mr: '5%', mt: '25%' }}>
        <Card sx={{ width: "90%", height: "400px", radius: '20px', color: "#FAF9F6", textAlign: 'right' }}>
          <CardContent sx={{ color: 'black', p: 2 }}>
            <Typography sx={{ color: 'black', p: 2 }} variant="h4"> Experience</Typography>
            <Box sx={{ ml: '5%', mr: '5%' }}>
              <Typography variant='h6' sx={{ textAlign: 'inherit' }}>
              Below is a comprehensive list of the hard and soft skills that I have acquired and honed through various experiences. These skills not only highlight my technical proficiency but also my ability to adapt and excel in diverse environments.
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Box><Typography>Kimiwa Sadat All rights reserved</Typography></Box>
      </Stack>
    </Stack>
  );
}
