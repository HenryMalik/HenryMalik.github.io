import { useState } from "react";


function App() {

    const [inputlingkaran, setinputlingkaran] = useState("");
    const [hasillingkaran, sethasillingkaran] = useState();

    function oninputlingkaran(data) {
        const text = data.target.value;
        const hasilHitung = Math.PI * text * text;
        setinputlingkaran(text);
        sethasillingkaran(hasilHitung);
    }
    return (
        <div>
            <h3>masukan nilai untuk menghitung luas lingkaran</h3>
            <input
                style={{ width: "100%" }}
                type="text"
                onChange={oninputlingkaran}
            />
            {inputlingkaran.length > 0 && (
                <h4>
                    hasil dari luas lingkaran dengan jari-jari {inputlingkaran} adalah{" "}
                    {hasillingkaran}
                </h4>
            )}
        </div>
    );
}

export default App;