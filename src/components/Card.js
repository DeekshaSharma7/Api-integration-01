import React, { useState, useEffect } from "react";
import "./Card.css";

function Card() {
  const [user, setUser] = useState([]); //user initialized as an empty array and a function setUser to update the state.

  const fetchData = () => {
    fetch("https://randomuser.me/api/?nat=us&results=18&page=1") //GET request to the Random User API, fetching 18 random user profiles from the US.
      .then((response) => {
        return response.json(); // it processes the response and converts it to JSON.
      })
      .then((data) => {
        let post = data.results;
        console.log(post);
        setUser(post);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Simple API Integration Example: </h1>
      <div className="card-container">   {/*user array is mapped over to create a list of user cards.*/}
        {user.map((data) => (    
          <div key={data.id.value} className="card" >
            {" "}
            {/*  key prop is set to a unique value from the user's data. */}
            <div>
              <img src={data.picture.large} className="card-img-top" alt={data.name.first} />
            </div>
            <h5>{data.name.first + " " + data.name.last}</h5>
            <p>
              {data.location.city + ", " + data.location.state}
              <br />
              <span>{data.phone}</span>
            </p>
            <p>Email: {data.email}</p>
            <p>Age: {data.dob.age}</p>
            <p>Username: {data.login.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

/*
"fetch" in the context of an API means getting data
 from a server.You send a request to the server, and
 the server sends back the information you asked for.
  It's like ordering food from a restaurant: you ask
  for what you want, and then you get it delivered to
you.In programming, we use the fetch function to make
these requests and handle the responses.*/
