// src/components/IngredientList.jsx
const IngredientList = ({availableIngredients, handleAddIngredient}) => {
    
    return( 
        <ul>
            {availableIngredients.map((ingredient, index) => {
               return <li key={index} style={{backgroundColor: ingredient.color}}>{ingredient.name} <button onClick={() => handleAddIngredient(ingredient)}>+</button></li>
            })}
        </ul>
    );
  };
  
  export default IngredientList;
  