import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
    const {name , salary , image} = props.player;
    const playerStyle = {height: '50px'}
    const addStyle = {border: '1px solid black', borderRadius:'10px', boxShadow: '7px 7px 6px 6px grey',
    margin : '10px', padding: '20px'}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player-style" style={addStyle} align="center">
            <img style ={playerStyle} src= {image} alt=""/>
            <h4>{name}</h4>
            <h5>Salary : ${salary}</h5>
            <button className="button" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faCheckCircle} />  Add Player</button>
        </div>
    );
};

export default Player;