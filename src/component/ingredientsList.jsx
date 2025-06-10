export default function IngredientsList(props){

    
    
    if (props.ingredientsList.length === 0) {
        return null; // Don't render anything if no ingredients
    }
    return(
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{props.ingredientsList}</ul>
                { props.ingredientsList.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button  className="recipie-button"onClick={props.toggle}>Get a recipe</button>
                    
                </div>}
            </section>
    )
}