import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

export default function ClaudeRecipe(props){
    return(<>
        <h1>Recipe according to provided ingredients:</h1>
        <ReactMarkdown >
            {props.recipe}
        </ReactMarkdown>
        </>
    )
}