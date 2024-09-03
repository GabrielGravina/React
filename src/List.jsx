

function List(  ){

    const fruits = [
        {id: 1, name:"Orange", calories: 45}, 
        {id: 2, name:"Apple", calories: 90}, 
        {id: 3, name:"Watermelon", calories: 75}, 
        {id: 4, name:"Strawberry", calories: 30}, 
        
    ];

    fruits.sort((a, b) => b.calories - a.calories);


    const lowCalFruits = fruits.filter(fruit => fruits.calories < 100)

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            {fruit.calories}</li>);


    return (<ol>{listItems}</ol>)

}

export default List