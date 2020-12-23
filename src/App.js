import React, {useEffect, useState} from 'react';
import Login from './Components/Login/Login'
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState('');
  const [tracker, setTracker] = useState('');
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log("user", user);
      })
    }
    console.log("i have a token", token);
  }, [])
  return (
    <div className="app__">
    {
      token ? (
        <h1>i am logged in</h1>
      ) : (
        <Login/>
      )
    }
    </div>
  );
}

export default App;
