import { Link, useNavigate, useParams } from "react-router-dom";
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { items, loading, error, hapus } = useKoleksi()

    if (loading) {
        return <p>Memuat data latihan...</p>
    }

    if (error) {
        return <p role="alert">Gagal memuat latihan: {error}</p>
    }

    const item = items.find((latihan) => String(latihan.id) === id)

    if (!item) {
        return (
            <section>
                <h1>Latihan tidak ditemukan</h1>
                <Link to="/koleksi">Kembali ke daftar latihan</Link>
            </section>
        )
    }

    const konfirmasiHapus = () => {
        if (window.confirm(`Hapus latihan "${item.judul}"?`)) {
            hapus(item.id)
            navigate('/koleksi')
        }
    }

    return (
        <section>
            <h1>{item.judul}</h1>

            <dl>
                <dt>ID</dt>
                <dd>{item.id}</dd>

                <dt>Kategori</dt>
                <dd>{item.kategori}</dd>

                <dt>Tanggal</dt>
                <dd>{item.tanggal}</dd>

                <dt>Durasi</dt>
                <dd>{item.durasi} menit</dd>

                <dt>Kalori Terbakar</dt>
                <dd>{item.kalori} kkal</dd>
            </dl>

            <div className="aksi">
                <button type="button" onClick={konfirmasiHapus}>
                    Hapus
                </button>

                <Link to="/koleksi">Kembali</Link>
            </div>
        </section>
    )
}