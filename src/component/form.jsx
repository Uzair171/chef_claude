import React from "react"
import ClaudeRecipe from "./claudieRecipe"
import IngredientsList from "./ingredientsList"
import { preconnect } from "react-dom"

export default function Form(){

    
    const [ingredients,setIngredients] = React.useState([])
    
    const ingredientsList = ingredients.map((ingredient)=>{
       return <li className="list" key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(preValues=> [...preValues,newIngredient])
        

    }

    const [recipe, setRecipe] = React.useState(false)

    function toggle(){
        setRecipe((preValue)=> !preValue)
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

            {recipe ? <ClaudeRecipe/> : null}
        </main>
    )
};

