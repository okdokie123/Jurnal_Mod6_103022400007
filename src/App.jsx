import {useState} from 'react';
function App() {
  const N = 10;
  const jam = 9;
  const [judul, setJudul] = useState('Kantin Rani');

  const style = {
    color: 'blue',
    fontSize: '30px',
    fontWeight: 'bold',
  };

  return (
    <>
      <p style={style}>{judul}</p>
      <p>{jam < 12 ? 'Selamat Pagi!' : 'Selamat Siang!'}</p>
      <p> Saldo saat ini: Rp.{N * 1000}</p>
      <button disabled = {true}>Bayar</button>
    </>
  );
}

export default App;