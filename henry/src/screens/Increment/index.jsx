import { useState } from "react";


function App() {

  const [hitung, sethitung] = useState(1)

  return (
    <div>
      <h1>nilai sekarang : {hitung}</h1>
      <button
        onClick={function () {
          sethitung(hitung + 1)
        }}
      >
        tambah increment +1
      </button>
    </div>
  )
}

export default App;
