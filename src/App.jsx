import {useState} from 'react';
import KartuMenu from './components/kartuMenu.jsx';
import Panel from './components/Panel.jsx';

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
      <Panel judul="Menu Hari Ini">
        <KartuMenu nama="Nasi Ayam Geprek" harga={12700 + (N * 100)} />
        <KartuMenu nama="Es Teh Lemon" harga={6000} kategori="Minuman" />
        <KartuMenu nama="Mie Goreng Telur" harga={12000} kategori="Makanan" />
      </Panel>
    </>
  );
}

export default App;