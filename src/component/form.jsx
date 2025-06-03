import React from "react"

export default function Form(){

    
    const [ingredients,setIngredients] = React.useState([])
    
    const ingredientsList = ingredients.map((ingredient)=>{
       return <li key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(preValues=> [...preValues,newIngredient])
    }

    

    return(
        <main>
            <form 
                onSubmit={handleSubmit}
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