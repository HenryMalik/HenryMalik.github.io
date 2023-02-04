import { useEffect, useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  const [luaspersegi, setLuasPersegi] = useState();
  const [luaslingkaran, setluaslingkaran] = useState();
  const [tweet, setTweet] = useState([]);
  const [serverError, setServerError] = useState("");

  const networkingTutorial = () => {
    fetch("http://127.0.0.1:3000/tweet")
      .then((res) => res.json())
      .then((data) => {
        console.log("response dari server ", data);
        setTweet(data);
      })
      .catch((err) => {
        console.log("terjadi error : " + err);
        setServerError(err.message);
      });
  };

  const [input, setinput] = useState();

  useEffect(() => {
    //jika array [] kosong maka effect akan berjalan sekali setelah render
    networkingTutorial();
  }, []);

  useEffect(() => {
    //jika array [] di isi dengan variable ataupun state maka setiap variable nya berubah
    //nilai akan menjalankan function effect
    if (count != 0) {
      setLuasPersegi(count * count);
    }
    if (count != 0) {
      setluaslingkaran(Math.PI * (count * count));
    }
  }, [count]);

  useEffect(() => {
    console.log("data telah berubah : " + input);
  }, [input])

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
      <h3>
        Luas lingkaran dengan jari-jari {count} adalah {luaslingkaran}
      </h3>
      <h3>Tweets</h3>
      <div>
        {tweet.map((item) => {
          return (
            <div>
              <h5>
                {item.name} : {item.tweet}
              </h5>
            </div>
          );
        })}

        {serverError.length > 0 && (
          <h3>Terjadi kesalahan pada server : {serverError}</h3>
        )}
      </div>
      <div>
        <input
          style={{ width: "100%" }}
          type="text"
          onChange={function (data) {
            const text = data.target.value;
            setinput(text)
          }}
        />
      </div>
    </div>
  );
};

export default Main;
