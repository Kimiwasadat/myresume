'use client'
import Image from "next/image";
import { Box, Container, Stack, Typography, AppBar, Toolbar, Button, IconButton, ThemeProvider, Card, createTheme, Grid, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import './globals.css';
import atGif from '../public/at.gif';
import ksjpg from '../public/ks.jpg'
import FlipC from './flipC.js'
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Divider from '@mui/material/Divider';
import Groups2Icon from '@mui/icons-material/Groups2';
import { useHistory } from 'react-router-dom'


const handleCardClick = () => {
  window.location.href = 'https://docs.google.com/document/d/16OWxg84fuKydJ71ILmG-j95H2Lepzb0zaqfQZchCU5Q/pub';  // Opens in the current tab
};
const ProgressBar = ({ progress, name, boxwidth }) => {
  return (
    <Stack sx={{ alignItems: "inherit"}}>
      <Stack direction="row" width="100%">
      <Typography>{name}</Typography>
      <Box sx={{width:`${boxwidth}%`}}></Box>
      <Typography textAlign={'right'}>{progress}%</Typography>    
    </Stack>
    <Stack sx={{width:'90%', alignItems: "center", justifyContent: "center"}}>
    
    <Box sx= {{backgroundColor:'#abf7b1',height:20, borderRadius:'20px',width:'100%'}}>
    <Box 
      sx={{
        display:'flex',
        width: `${progress}%`,    // Dynamic width based on progress
        height: 20,               // Fixed height for the progress bar
        backgroundColor: '#00ab41',  // Color of the progress bar
        borderRadius: '20px',      // Optional rounded corners
        transition: 'width 0.3s ease-in-out' // Smooth transition for width changes
      }}/>
    </Box>
    </Stack>
    </Stack>
    
  );
};

const cardData = [
  {
    id: 1,
    frontContent: (
      <>
        <Typography sx={{ color: 'black', p: 2, textAlign: 'left', mt:'-10%' }} variant="h4"> About me</Typography>
        <Box sx={{ ml: '5%', mr: '5%' }}>
          <Typography variant='h6' sx={{ textAlign: 'left' }}>
            Hi, I'm an aspiring software engineer looking to make a difference in the software industry. I'm currently pursuing my bachelor's in Computer Science at The City College of New York. You can learn more about me below, I look forward to hearing more from you.
          </Typography>
        </Box>
      </>
    ),
    backContent: (
      <>
     
        <Typography variant="h5" mt="-5%">Here are some of my Interests</Typography>
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={8}>
          <Stack>
          <Typography variant="h6">Photography</Typography>
          <Image
                src="/ksimage/5.jpg" 
                alt="Avatar"
                width={250}
                height={300}
                style={{mb:'-80%'}} 
              />
          </Stack>
          <Stack>
          <Typography variant="h6">Exploring</Typography>
          <Image
                src="/ksimage/12.jpg" 
                alt="Avatar"
                width={250}
                height={300}
                style={{mb:'-80%'}} 
              />
          </Stack>
          <Stack>
          <Typography variant="h6">Video Games</Typography>
          <Image
                src="/ksimage/8.jpg" 
                alt="Avatar"
                width={250}
                height={300}
                style={{mb:'-80%'}} 
              />
          </Stack>
        </Stack>
      </>
    ),
  },
];
const cardData2 = [
  {
    id: 2,
    frontContent: (
      <>
        <Box sx={{ width: "100%", height: "400px", borderRadius: '20px', color: "#FAF9F6", textAlign: 'right' }}>
          <Box sx={{ color: 'black' }}>
            <Typography sx={{ color: 'black', mb:'2%'}} variant="h4"> Experience</Typography>
            <Box sx={{ ml: '0%', mr: '2%' }}>
              <Typography variant='h6' sx={{ textAlign: 'inherit' }}>
              I have acquired and honed several hard and soft skills through various experiences. From making a full-stack application to leading and winning hackathons, I have developed a strong foundation in software development, problem-solving, teamwork, and leadership, which I am eager to apply in real-world challenges and future opportunities. (Click me to see more...)
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    ),
    backContent: (
      <>
      <Typography variant="h5">Skills</Typography>
       
      
      <Stack direction='row' sx={{ padding:0, display:'flex', ml:"-20%"}} spacing={4}>
        
        <Stack sx={{ width:'90%', textAlign:'left', alignItems:'left',}} >
        <Typography variant='h6'sx={{textAlign:'left'}}> <SettingsEthernetIcon fontSize='medium' />Programming Experience</Typography> 
        <Stack sx={{ mr:"-20%"}}>
        <ProgressBar progress={70} boxwidth={65} name="HTML" sx={{alignItems:'left'}}/>
        <ProgressBar progress={50} boxwidth={70} name="C++ " sx={{alignItems:'left'}}/>
        <ProgressBar progress={90} boxwidth={63} name="Python" sx={{alignItems:'left'}}/>
        <ProgressBar progress={80} boxwidth={61} name="NodeJS" sx={{alignItems:'left'}}/>
        <ProgressBar progress={60} boxwidth={55} name="JavaScript" sx={{alignItems:'left'}}/>
        </Stack>
        </Stack> 
        <Stack sx={{ width:'80%',display:'flex', textAlign:'center', alignItems:'RIGHT',}}>
        <Typography variant="h6"sx={{mt:'1%'}}> <LightbulbIcon/> Personal</Typography>
        <Stack sx={{ml:"30%", mr:"-60%"}}>
        <ProgressBar progress={90} boxwidth={40} name="Communication" sx={{alignItems:'left'}}/>
        <ProgressBar progress={70}  boxwidth={46}name="Collaboration " sx={{alignItems:'left'}}/>
        <ProgressBar progress={85}  boxwidth={50}name="Adaptability" sx={{alignItems:'left'}}/>
        <ProgressBar progress={95}  boxwidth={53}name="Work Ethic" sx={{alignItems:'left'}}/>
        </Stack>
        </Stack> 
        {/*<Typography variant="h6"><Groups2Icon/> Excellent Collaborator, communicates and works well with others</Typography> */}
        </Stack>
        
      </>
    ),
  },
];

const cardData3 = [
  {
    id: 3,
    frontContent: (
      <>
        <Box sx={{ width: "90%", height: "400px", borderRadius: '20px', color: "#FAF9F6", textAlign: 'left' }}>
          <Box sx={{ color: 'black', p: 2 }}>
            <Typography sx={{ color: 'black', p: 2 }} variant="h4"> Resume</Typography>
            <Box sx={{ ml: '5%', mr: '5%' }}>
              <Typography variant='h6' sx={{ textAlign: 'inherit' }}>
                Wanna skip the sweet talk and see what I've done, that's fine. Click on the card to access my resume...
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    ),
    backContent: (
      <>
        <div >
        <Typography  variant="h5">Resume Link</Typography>
    
        <Typography>resume stuff.</Typography>
        </div>
      </>
    ),
  }

];
const cardData4 = [

];

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
        <AppBar position="sticky" enableColorOnDark>
          <Toolbar sx={{postion:'sticky', top: '0'}}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              =
            </IconButton>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around' }}>
              <Button href="#aboutme">
              <Typography variant="h6" color="white">About Me</Typography></Button>
              <Button href="#experience" ><Typography variant="h6" color="white">Experience</Typography></Button>
              <Button href="#resume"><Typography variant="h6"  color="white">Resume</Typography></Button>
              <Button><Typography variant="h6" color="white">Contact</Typography></Button>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      {/* Background Section */}
      <Box sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${atGif.src})`,
        backgroundBlendMode: 'darken',
        backgroundPosition: 'bottom',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Stack>
            <Box>
              <Image
                src="/avatar.jpg" 
                alt="Avatar"
                width={250}
                height={250}
                style={{ borderRadius: "50%", backgroundSize: 'cover' }} 
              />
            </Box>
            <Typography variant="h4" sx={{ mt: 2, color: 'white' }}>
              Kimiwa Sadat
            </Typography>
            <Typography variant="h5" sx={{ color: 'white' }}>
              {text}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* About Me Section */}
      <Box id="aboutme" sx={{ width: "100%", height: "auto", borderRadius: '20px', color: "#FAF9F6", ml:'3%',mt:'5%'}}>
        <Box sx={{ color: 'black', }}>
          <Grid container spacing={4}>
            {cardData.map((card, index) => (
                <FlipC
                  frontContent={card.frontContent}
                  backContent={card.backContent}
                  width="60%"
                  height="500px"
                />
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ width: "90%", height: "400px", borderRadius: '20px', color: "#FAF9F6", textAlign: 'left', mt:'25%', ml:'45%'}}>
      <div id="experience">
      {cardData2.map((card, index) => (
                <FlipC 
                  frontContent={card.frontContent}
                  backContent={card.backContent}
                  width="60%"
                  height="500px"
                  padding='0px'
                />
            ))}
      </div>
      </Box>
      <Box id="resume"sx={{ width: "80%", height: "auto", borderRadius: '20px', color: "#FAF9F6", mt:'30%', ml:'3%' }}>
        <Box sx={{ color: 'black',}}>
          <Grid container spacing={4}>
            {cardData3.map((card, index) => (
                <FlipC
                  frontContent={card.frontContent}
                  backContent={card.backContent}
                  href='https://docs.google.com/document/d/16OWxg84fuKydJ71ILmG-j95H2Lepzb0zaqfQZchCU5Q/pub'
                  width="80%"
                  height="500px"
                />
            ))}
          </Grid>
        </Box>
      </Box>
      <Stack sx={{ itemAlign:'center', position:'relative', ml:'auto', mr:"auto", justifyContent:'center', mt:'30%'}}>
      <Card sx={{width:'1100px', height:'500px' }}>
        <Box>
          <Typography> This is all my projects</Typography>
        </Box>
      </Card>
      </Stack>

    

      {/* Footer */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography>Kimiwa Sadat - All rights reserved</Typography>
      </Box>
    </Stack>
  );
}
