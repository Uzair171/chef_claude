import React from "react"

export default function Form(){

    
    const [ingredients,setIngredients] = React.useState([])
    
    const ingredientsList = ingredients.map((ingredient)=>{
       return <li className="list" key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(preValues=> [...ingredients,newIngredient])
        

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
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
};