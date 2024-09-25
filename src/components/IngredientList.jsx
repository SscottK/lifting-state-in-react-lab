// src/components/IngredientList.jsx
const IngredientList = ({availableIngredients}) => {
    
    return( 
        <ul>
            {availableIngredients.map((ingredient) => {
               return <li style={{backgroundColor: ingredient.color}}>{ingredient.name} <button>+</button></li>
            })}
        </ul>
    );
  };
  
  export default IngredientList;
  