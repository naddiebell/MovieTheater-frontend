import React, { useState } from "react";

export default function BuyTickets() {
  const [displayTicket, setDisplayTicket] = useState(false);
 
 function handleDisplay(e){
   e.preventDefault();
    setDisplayTicket(true);
 } 
 
  return (
    <>
      <form
      onSubmit={(e)=>handleDisplay(e)}
      >
        <label for="date">Välj ett datum:</label>
        <input type="date" id="date" name="date"></input>

        <label for="movies">Välj en film: </label>
        <select id="movies" name="movies">
          <option value="Default">-</option>
          <option value="The-Princess-Bride">The Princess Bride</option>
          <option value="Pippi-Langstrumpor">Pippi Långstrumpor</option>
        </select>
        <label for="quantity">Biljetter:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          max="25"
        ></input>

        <input type="submit"
        
        ></input>
      </form>
      <p>Alla filmer börjar kl. 7</p>
      <p>Betalning är endast kontant vid dörren</p>
      <p>Priset är 50 kr per biljett</p>
      <div className="background">
        {displayTicket && (
          <div className="card">
            <img />
            <div className="container">
              <h4>
                <b>Biljetter</b>
              </h4>
              <p>Bio</p>
              <p>Datum</p>
              <p>Antal</p>
              <p>Skriv Ut</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
