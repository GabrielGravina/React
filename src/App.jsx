import List from "./List";

function App() {
  const fruits = [];

  const vegetables = [
    {id: 1, name:"Potato", calories: 145}, 
    {id: 2, name:"Carrot", calories: 100}, 
    {id: 3, name:"Corn", calories: 115}, 
    {id: 4, name:"Brocolli", calories: 20}, 

];




  return (
    //Utiliza a renderização condicional para mostrar a lista apenas caso seu conteúdo não seja vazio 
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>} 
    </>
  );
}

export default App
