import React, { useContext } from 'react'

export default function Score(props) {

    // const { score, level, multiplier } = useContext(ScoreContext);

    // return (
    //     <div>
    //         <h1>Score: {score}</h1>
    //         <h1>Level: {level}</h1>
    //         {multiplier === 0 ? " " : <h1>Multiplier: {multiplier}</h1>}
    //     </div>
    // )


    return (
        <div className="scorebar">
            <h1>Score: 0</h1>
            <h1>Level: 1</h1>
            <h1>Multiplier: 1</h1>
        </div>
    )
}