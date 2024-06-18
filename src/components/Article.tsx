import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Article.css';
import parse from 'html-react-parser';

export default function Article(props) {
  const entities = {
    '&#039;': "'",
    '&quot;': '"',
    '&ntilde;': 'ñ',
    '&eacute;': 'é',
    '&amp;': '&',
    '&uuml;': 'ü',
  };
  let formattedDate = props.date && new Date(props.date);
  formattedDate = formattedDate && formattedDate.toDateString();
  // console.log(`formattedDate `, formattedDate);
  const articleTitle = props?.title.replace(
    /&#?\w+;/,
    (match) => entities[match]
  );
  const articleBody = parse(props.body);
  const articleUrl = props.url;
  // console.log('articleTitle ', articleTitle);
  // console.log('articleBody ', articleBody);

  return (
    <a href={articleUrl} target="_blank">
      <Card>
        <CardMedia
          sx={{ height: 40 }}
          image={
            props.image
              ? props.image
              : 'https://www.kindpng.com/picc/m/699-6994704_newspaper-news-journal-headline-article-paper-transparent-background.png'
          }
          title={props.title}
        />
        <CardContent>
          <div id="wrapper">
            <div id="left">
              <img
                src={`https://dev-storm-rest-api.pantheonsite.io/${props.image}`}
              />
            </div>
            <div id="middle">
              <Typography
                gutterBottom
                variant="body2"
                color="text.secondary"
                component="div"
              >
                {formattedDate.substring(3)}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                <b>{articleTitle}</b>

                {/* <a href={articleUrl} target="_blank">
                </a> */}
              </Typography>
            </div>
            <div id="right">
              <Typography gutterBottom variant="p" component="div">
                {props.source}
              </Typography>
            </div>
          </div>

          <Typography variant="body2" color="text.secondary">
            {articleBody}
          </Typography>
        </CardContent>
        <CardActions
        // sx={{ paddingBottom: 5 }}
        >
          <b>{props.author}</b>
        </CardActions>
      </Card>
      <Divider />
    </a>
  );
}
