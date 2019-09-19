import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';

let testObject = {
    publisher: "Closet Cooking",
    f2f_url: "http://food2fork.com/view/35382",
    ingredients: [
        "2 jalapeno peppers, cut in half lengthwise and seeded",
        "2 slices sour dough bread",
        "1 tablespoon butter, room temperature",
        "2 tablespoons cream cheese, room temperature",
        "1/2 cup jack and cheddar cheese, shredded",
        "1 tablespoon tortilla chips, crumbled "
    ],
    source_url: "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",
    recipe_id: "35382",
    image_url: "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",
    social_rank: 100,
    publisher_url: "http://closetcooking.com",
    title: "Jalapeno Popper Grilled Cheese Sandwich"

}

export default  function ImgMediaCard(props) {

    const [recipe, updateRecipe] = useState(testObject)

    axios.get(`https://www.food2fork.com/api/get?key=a218dcdde4ac0e9b80ee585cca2707a1&rId=${props.match.params.rId}`)
        .then((result) => updateRecipe(result.data.recipe))
        .catch(err => console.log(err))


    return (
        <Container maxWidth="md">
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={`${recipe.title}`}
                        height="300"
                        image={`${recipe.image_url}`}
                        title={`${recipe.title}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {`${recipe.title}`}
                        </Typography>


                        {
                            recipe.ingredients.map(ingredient => {
                                return (
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {ingredient}
                                    </Typography>
                                )
                            })
                        }

                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
}

// {
//     recipe: {
//     publisher: "Closet Cooking",
//     f2f_url: "http://food2fork.com/view/35382",
//     ingredients: [
//     "2 jalapeno peppers, cut in half lengthwise and seeded",
//     "2 slices sour dough bread",
//     "1 tablespoon butter, room temperature",
//     "2 tablespoons cream cheese, room temperature",
//     "1/2 cup jack and cheddar cheese, shredded",
//     "1 tablespoon tortilla chips, crumbled "
//     ],
//     source_url: "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",
//     recipe_id: "35382",
//     image_url: "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",
//     social_rank: 100,
//     publisher_url: "http://closetcooking.com",
//     title: "Jalapeno Popper Grilled Cheese Sandwich"
//     }
//     }