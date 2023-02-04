import { useEffect, useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  const [luaspersegi, setLuasPersegi] = useState();

  useEffect(() => {
    //jika array [] kosong maka effect akan berjalan sekali setelah render
  }, []);

  useEffect(() => {
    //jika array [] di isi dengan variable ataupun state maka setiap variable nya berubah
    //nilai akan menjalankan function effect
    if (count != 0) {
      setLuasPersegi(count * count);
    }
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        update count {count}
      </button>
      <h3>
        Luas persegi dengan sisi {count} adalah {luaspersegi}
      </h3>
    </div>
  );
};

export default Main;
