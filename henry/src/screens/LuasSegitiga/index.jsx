import { useState } from "react";

function App() {

    const [tinggi, settinggi] = useState("");
    const [alas, setalas] = useState("");
    const [hasiltiga, sethasiltiga] = useState();

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

    return (
        <div className="App">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}
            >
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
