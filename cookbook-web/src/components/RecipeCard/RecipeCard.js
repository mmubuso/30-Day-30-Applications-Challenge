import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    card: {
        width: 300,
        marginTop: 30
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        fill: '#ff0000',
    },
}));

export default function RecipeCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [isFavorited, toggleFavorite] = React.useState(false)
    function handleExpandClick() {
        setExpanded(!expanded);
    }

    function handleFavorite() {
        toggleFavorite(!isFavorited)
    }

    return (
        <Card className={classes.card}>

            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={`${props.title}`}
            />
            <Link to={`/recipe/${props.rId}`}>
                <CardMedia
                    className={classes.media}
                    image={`${props.imageUrl}`}
                    title={`${props.title}`}
                />
            </Link>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Publisher {props.publisher}

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon
                        onClick={handleFavorite}
                        className={
                            isFavorited
                                ?
                                classes.avatar
                                :
                                null
                        } />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

 // f2f_url: "http://food2fork.com/view/35120"
  // image_url: "http://static.food2fork.com/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg"
  // publisher: "Closet Cooking"
  // publisher_url: "http://closetcooking.com"
  // recipe_id: "35120"
  // social_rank: 100
  // source_url: "http://www.closetcooking.com/2012/11/bacon-wrapped-jalapeno-popper-stuffed.html"
  // title: "Bacon Wrapped Jalapeno Popper Stuffed Chicken"