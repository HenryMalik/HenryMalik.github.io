import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const arraynama = ["ilyas", "yusuf", "henry", "budi"];
  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //use state dalam react berguna untuk menyimpan variable

  const [arraySearch, setArraySearch] = useState(arraynama);
  const [numbersearch, setnumbers] = useState(arrayNumber);
  const [hitungsearch, setHitung] = useState(0);

  const [inputpersegi, setinputpersegi] = useState("");
  const [hasilpersegi, sethasilpersegi] = useState();

  const [tinggi, settinggi] = useState("");
  const [alas, setalas] = useState("");
  const [hasiltiga, sethasiltiga] = useState();

  function oninputberubah(data) {
    const text = data.target.value; //mengambil nilai input dari user
    const hasilSearch = arrayNumber.filter((item) => {
      //memfilter "arrayNumber" yang memiliki nilai lebih besar dari inputan user
      return item > text;
    });
    setnumbers(hasilSearch); //hasil dari filter dimasukan ke dalam state "numbersearch" agar terupdate secara realtime
  }
  function oninputpersegi(data) {
    const text = data.target.value;
    const hasilHitung = text * text;
    setinputpersegi(text);
    sethasilpersegi(hasilHitung);
  }

  function oninputalas(data) {
    const text = data.target.value;
    setalas(text);
  }

  function oninputtinggi(data) {
    const text = data.target.value;
    settinggi(text);
  }

  function hitungluassegitiga() {
    const hasilhitung = (alas * tinggi) / 2;
    sethasiltiga(hasilhitung);
  }

  const tambahNilai = () => {
    setCount(count + 1); //mengupdate state "count" secara realtime
  };

  return (
    <div className="App">
      <h3>Nilai = {count}</h3>
      <div className="card">
        <button onClick={tambahNilai}>tambah nilai</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <h3>Masukan angka untuk memfilter array</h3>
        <input
          style={{ width: "100%" }}
          type="text"
          onChange={oninputberubah} //untuk memanggil function tiap input berubah
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {numbersearch.map((item, index) => {
            return (
              <h3>
                {item}
                {index < numbersearch.length - 1 ? "," : ""}
              </h3>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-star",
            width: "100%",
          }}
        >
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-star",
            width: "100%",
          }}
        >
          <h3>masukan nilai alas segitiga</h3>
          <input style={{ width: "100%" }} type="text" onChange={oninputalas} />
          <h3>masukan nilai tinggi segitiga</h3>
          <input
            style={{ width: "100%" }}
            type="text"
            onChange={oninputtinggi}
          />
          <button onClick={hitungluassegitiga}>hitung luas segitiga</button>
          {alas.length > 0 && tinggi.length > 0 && (
            <h4>
              hasil dari luas segitiga dengan alas {alas} dan tinggi {tinggi}{" "}
              adalah {hasiltiga}
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
