import React, { useState } from 'react';

let nextId = 0;

const List = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div>
      <hr />
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />{' '}
      <button
        onClick={() => {
          setName('');
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
