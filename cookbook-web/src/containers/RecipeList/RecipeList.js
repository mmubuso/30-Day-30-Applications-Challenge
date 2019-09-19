import React from 'react'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import './RecipeList.css'
import Typography from '@material-ui/core/Typography';

export default function RecipeList(props) {


    return (
        <div>
            <Typography className='typo2' variant="h2" gutterBottom>
                {
                    props.canShowList
                        ?
                        "Recipes"
                        :
                        null
                }
            </Typography>
            <div className='list-cards'>
                {
                    props.canShowList
                        ?
                        props.recipes.map(reciepe => {
                            return (
                                <RecipeCard
                                    rId={reciepe.recipe_id}
                                    key={reciepe.recipe_id}
                                    imageUrl={reciepe.image_url}
                                    title={reciepe.title}
                                    publisher={reciepe.publisher}
                                />
                            )
                        })
                        :
                        null
                }
            </div>
        </div>
    )
}
