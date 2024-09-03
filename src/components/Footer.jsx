export default function Footer({ items }) {
  if (items.length === 0) return <footer className="stats">Daftar belanja masih kosong</footer>;

  const totalItems = items.length;
  const checkedtems = items.filter((item) => item.checked).length;
  const precentage = Math.round((checkedtems / totalItems) * 100);
  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedtems} barang sudah dibeli ({precentage}%)
    </footer>
  );
}
