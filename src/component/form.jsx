export default function Form(){

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsList = ingredients.map((ingredient)=>{
       return <li key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
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