import { Link } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Home Page</h1>
      <Link to="increment">Increment</Link>
      <Link to="persegi">LuasPersegi</Link>
      <Link to="segitiga">LuasSegitiga</Link>
      <Link to="filter">FIlterArray</Link>
    </div>
  );
}

export default App;
