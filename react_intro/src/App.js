import logo from "./logo.svg";
import image from "./assets/image.jpg";
import "./App.css";
import ImageComponent from "./Components/ImageComponent";
import ButtonComponent from "./Components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="homework">
          <ImageComponent source={image} altext="man with book on his head" stylingClass="Image-Component" />
          <ButtonComponent btnText="Clic" stylingBtn="Button-Component" />
        </div>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
