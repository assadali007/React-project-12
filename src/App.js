
import boxes from './boxes';
import React from 'react';
import Box from './Box.js'

function App() {

    const [squares,setSquares] = React.useState(boxes);
    console.log(squares)


    function toggle(id) {

       setSquares(prevSquares => {
           return prevSquares.map((square) => {
               return square.id === id ? {...square, on:!square.on} : square
           })
       })

    }

    const squareElements = squares.map(square => (

        <Box
            key={square.id}
            id={square.id}
            on={square.on}
            toggle={() => toggle(square.id)}

        />

    ))


    return (
        <main>
            <h1>Boxes will go here</h1>
            {squareElements}
        </main>
    )
}

export default App;
