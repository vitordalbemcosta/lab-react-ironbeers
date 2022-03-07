import React, { useState, useEffect } from "react";
import NavBar from "../../ Components/NavBar/NavBar";
import axios from "axios";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    
    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then((response) => {
                console.log(response.data)
                setBeers(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [beers]);
    
    

    
    return (
        <>
            <NavBar></NavBar>
        {beers.map((beer) => (
          <div key={beer._id}>
            <img src={beer.image_url} alt="beer img" />
            <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p> Created By: {beer.contributed_by}</p>
                
          </div>
        ))}
        <NavBar />
      </>
    );
}

export default AllBeersPage;
