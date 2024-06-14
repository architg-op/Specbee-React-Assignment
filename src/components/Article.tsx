import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function MediaCard(props) {
  let formattedDate = new Date(props.date);
  formattedDate = formattedDate.toDateString();
  // console.log(`formattedDate `, formattedDate);

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
            {formattedDate.substring(3)}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <b>{props.title}</b>
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
