import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SecondScreen() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h2>Second Screen</h2>
      {show ? (
        <div>
          <h3>{show.name}</h3>
          {show.image && <img src={show.image.medium} alt={show.name} />}
          <p>{show.summary}</p>
        </div>
      ) : (
        <p>Loading show details...</p>
      )}
    </div>
  );
}

export default SecondScreen;


