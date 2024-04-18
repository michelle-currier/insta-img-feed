import logo from './logo.svg';
import './App.css';
import { InstagramEmbed } from 'react-social-media-embed';
import { IgComponent } from './igConfig';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <script src='igConfig.js'></script>
        {/* <IgComponent></IgComponent> */}
        <h2>Todo add UI framework maybe bootstrap or gatsby!</h2>
        <p>todo add the scripts to the config once you add the ui</p>
        <div id="instagram-feed"></div>

       
        <div>
          <p>Feed embed here</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <InstagramEmbed url="https://www.instagram.com/p/CsRibFlvFXy/"></InstagramEmbed>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
