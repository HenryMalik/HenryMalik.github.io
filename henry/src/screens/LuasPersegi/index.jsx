import { useState } from "react";


function App() {

  const [inputpersegi, setinputpersegi] = useState("");
  const [hasilpersegi, sethasilpersegi] = useState();

  function oninputpersegi(data) {
    const text = data.target.value;
    const hasilHitung = text * text;
    setinputpersegi(text);
    sethasilpersegi(hasilHitung);
  }
  return (
    <div>
      <h3>masukan nilai untuk menghitung luas persegi</h3>
      <input
        style={{ width: "100%" }}
        type="text"
        onChange={oninputpersegi}
      />
      {inputpersegi.length > 0 && (
        <h4>
          hasil dari luas persegi dengan sisi {inputpersegi} adalah{" "}
          {hasilpersegi}
        </h4>
      )}
    </div>
  );
}

export default App;
