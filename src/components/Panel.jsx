function Panel({ children, judul }) {
	return (
		<section className="panel">
			{judul !== undefined && <h2>{judul}</h2>}
			{children}
		</section>
	);
}

export default Panel;
