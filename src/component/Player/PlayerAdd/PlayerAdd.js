import React from 'react';

const PlayerAdd = (props) => {
    const add = props.playerAdd.name;
    const salary = props.playerAdd.salary;
    return (
        <div className = "player-style">
           <h2>name:{add}</h2>
           <h3>salary : ${salary}</h3> 
        </div>
    );
};

export default PlayerAdd;