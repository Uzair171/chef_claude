import React from "react"
import MistralRecipe from "./mistralRecipe"
import IngredientsList from "./ingredientsList"
import { preconnect } from "react-dom"
import getRecipeFromMistral  from "../ai.js"

export default function Form(){

    
    const [ingredients,setIngredients] = React.useState([])
    
    const ingredientsList = ingredients.map((ingredient)=>{
       return <li className="list" key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(preValues=> [...preValues,newIngredient])
        

    }

    const [recipe, setRecipe] = React.useState("")

    async function toggle() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    return(
        <main>
            <form 
                action={handleSubmit}
                className="form" >
            <input 
                type="text"
                placeholder="e.g. oregeno"
                aria-label="Add Ingredient"
                name="ingredient"/>
                <button  >
                    <span>+</span> Add Ingredient
                </button>

            </form>
            <IngredientsList
                ingredientsList = {ingredientsList}
                toggle = {toggle}
                
            />

            {recipe ? <MistralRecipe
            recipe={recipe} 
            /> : null}
        </main>
    )
};

