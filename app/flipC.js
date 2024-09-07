import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import './CardFlip.css';

const FlipCard = ({ frontContent, backContent, width = '60%', height = '40%' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card-container ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
      style={{ width, height,mb:'30% '}}
      sx={{}}
    >
      <Card className="card-front">
        <CardContent>{frontContent}</CardContent>
      </Card>
      <Card className="card-back">
        <CardContent>{backContent}</CardContent>
      </Card>
    </div>
  );
};

export default FlipCard;

