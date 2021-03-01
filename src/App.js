import { useEffect, useState } from 'react';
import './App.css';
import Cart from './component/Player/Cart/Cart';
import Player from './component/Player/Player';
import PlayerAdd from './component/Player/PlayerAdd/PlayerAdd';
import playerList from './fakeData/fakeData.json';


function App() {
 const [players, setPlayers] = useState([]);
 const [playerCart , setPlayerCart] = useState([]);
 const [playerAdd , setPlayerAdd] = useState([]);
 
     useEffect(() => {
       setPlayers(playerList);
     },[])

     const handleAddPlayer = (players) => {
       const newCart = [...playerCart, players];
       setPlayerCart(newCart);
       const newPlayer = [...playerAdd, players];
       setPlayerAdd(newPlayer);
     };

    return(
      <div style = {{textAlign: 'center'}}>
        <h1>FIFA BEST XI</h1>
        
        <h4>Player selected :{playerCart.length}</h4>
        <Cart cart={playerCart}></Cart>

        <div>
        { 
          playerAdd.map(playerAdd => <PlayerAdd playerAdd={playerAdd}>
            handleAddPlayer={handleAddPlayer}
          </PlayerAdd>)
        }
        </div>
        
          <div>
          {
            players.map(player => <Player player={player}
               handleAddPlayer={handleAddPlayer} ></Player>)
          }
          </div>
        
      </div>

    );
   
    }
export default App;