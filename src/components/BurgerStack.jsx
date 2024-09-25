

// `src/components/BurgerStack.jsx`
const BurgerStack = ({ stack, handleRemoveIngredient }) => {
    return (
        <ul>
            {stack.map((ingredient, index) => {
                return (
                    <li key={index} style={{backgroundColor: ingredient.color}}>{ingredient.name} <button onClick={() => handleRemoveIngredient(index)}>X</button></li>
                )
            })}
        </ul>
    );
  };
  
  export default BurgerStack;
  