import { useState } from 'react';
import LabelHarga from './labelHarga.jsx';

function KartuMenu({ nama, harga, kategori = 'Makanan' }) {
	const [jumlah, setJumlah] = useState(0);
	const [catatan, setCatatan] = useState('');

	function tambah() {
		setJumlah((jumlahSekarang) => jumlahSekarang + 1);
	}

	return (
		<article className="kartu">
			<h3>{nama}</h3>
			<p>Harga: <LabelHarga nilai={harga} /></p>
			<p>Kategori: {kategori}</p>
			<div className="kontrol">
				<button type="button" onClick={() => setJumlah((jumlahSekarang) => Math.max(0, jumlahSekarang - 1))} disabled={jumlah === 0}>
					-
				</button>
				<span>{jumlah}</span>
				<button type="button" onClick={tambah}>
					+
				</button>
			</div>
			<p>{jumlah === 0 ? 'Belum dipesan' : <>Subtotal: <LabelHarga nilai={harga * jumlah} /></>}</p>
			{jumlah >= 5 && <span className="badge">Pesanan banyak</span>}
			<label>
				Catatan pesanan
				<input value={catatan} onChange={(event) => setCatatan(event.target.value)} />
			</label>
			{catatan && <p>Catatan: {catatan}</p>}
		</article>
	);
}

export default KartuMenu;
