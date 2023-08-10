import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
type props = {
    id: number;
    name: string;
    description: string;
    founded: string;
    employees: string;
    funding: number;
    currentInvestmentStage: string;
}

export default function ActionAreaCard({id, name, description, founded, employees, funding, currentInvestmentStage}: props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {founded} | {employees} | {funding} | {currentInvestmentStage}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}