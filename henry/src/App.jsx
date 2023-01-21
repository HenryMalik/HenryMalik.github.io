import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const arraynama = ['ilyas', 'yusuf', 'henry', 'budi'];
  const arrayNumber = [1,2,3,4,5,6,7,8,9,10,11,12]
  //use state dalam react berguna untuk menyimpan variable

  const [arraySearch,setArraySearch] = useState(arraynama)
  const [numbersearch,setnumbers] = useState(arrayNumber)
  

  function oninputberubah(data){
    const text = data.target.value;
    const hasilSearch = arrayNumber.filter((item) =>{
      return item > text
    })
    setnumbers(hasilSearch)
  }

  const tambahNilai = ()=>{
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>Vite + {count}</h1>
      <div className="card">
        <button onClick={tambahNilai}>
          tambah nilai
        </button>
        <input type="text" onChange={oninputberubah} />
        <div style={{
          display:'flex',
          flexDirection:'row'
        }}>
          {numbersearch.map((item)=>{
            return (
              <h3>{item} ,</h3>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default App
