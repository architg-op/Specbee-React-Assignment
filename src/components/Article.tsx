import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function MediaCard(props) {
  return (
    <>
      <Card sx={{ maxWidth: 2000, paddingLeft: 50 }}>
        <CardMedia
          sx={{ height: 40 }}
          image={props.image}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            component="div"
          >
            {props.date}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.body}
          </Typography>
        </CardContent>
        <CardActions sx={{ paddingBottom: 5 }}>{props.author}</CardActions>
      </Card>
      <Divider />
    </>
  );
}
