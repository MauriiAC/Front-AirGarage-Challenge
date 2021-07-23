import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import HoverRating from './HoverRating'
import Link from '@material-ui/core/Link';

const noImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function ParkingCard( { name, image, address, rating, review_count, url, score } ) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image= { image || noImage }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { address || 'No address loaded'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <HoverRating 
            actualValue={ rating } 
        />
        <Typography>
          Reviews: {review_count}
        </Typography>
      </CardActions>
      <CardActions>
        <Link 
          href={ url }
          target="_blank" 
          rel="noreferrer"
          >
          Web Page
        </Link>
        <Typography>
          Score: {score}
        </Typography>
      </CardActions>
    </Card>
  );
}
