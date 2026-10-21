import LabelHarga from './labelHarga.jsx';

function KartuMenu({ nama, harga, kategori = 'Makanan' }) {
	return (
		<article>
			<h2>{nama}</h2>
			<p>Harga: <LabelHarga nilai={harga} /></p>
			<p>Kategori: {kategori}</p>
		</article>
	);
}

export default KartuMenu;
