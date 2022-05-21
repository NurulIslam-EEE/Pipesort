import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';

export default function SingleProduct({product}) {
    const {title,image,description,price,rating}=product
   
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display='flex' justifyContent='space-between' width='100%'>
        <Typography gutterBottom variant="h5" component="div">
         $ {price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
      
         <Rating name="half-rating-read" value={rating.rate} readOnly />
        </Typography>
        </Box>
     
       
      </CardActions>
    </Card>
  );
}
