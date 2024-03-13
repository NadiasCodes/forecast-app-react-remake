import "./App.css";
import Weather from "./Weather/Weather";

function App() {
  return (
    <div className="App">
      <div className="container-box">
        <h1 className="text-center mb-3">Weather Application</h1>
        <Weather  defaultcity="Düsseldorf"/>
      </div>
    </div>
  );
}

export default App;
