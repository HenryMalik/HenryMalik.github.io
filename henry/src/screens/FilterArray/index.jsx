import { useState } from "react";

function App() {
  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //use state dalam react berguna untuk menyimpan variable
  const [numbersearch, setnumbers] = useState(arrayNumber);

  function oninputberubah(data) {
    const text = data.target.value; //mengambil nilai input dari user
    const hasilSearch = arrayNumber.filter((item) => {
      //memfilter "arrayNumber" yang memiliki nilai lebih besar dari inputan user
      return item > text;
    });
    setnumbers(hasilSearch); //hasil dari filter dimasukan ke dalam state "numbersearch" agar terupdate secara realtime
  }

  return (
    <div>
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
      </div>
    </div>
  );
}

export default App;
