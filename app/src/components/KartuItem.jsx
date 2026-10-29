import { Link } from "react-router-dom";
export default function KartuItem({ item }) {
    const { id, judul, kategori, tanggal, durasi, kalori } = item

    return (
        <article className="kartu">
            <h3>
                <Link to={`/koleksi/${id}`}>{judul}</Link>
            </h3>

            <p>{kategori} · Tanggal: {tanggal}</p>
            <p>Durasi: {durasi} menit</p>
            <p>Kalori Terbakar: {kalori} kkal</p>
        </article>
    )
}