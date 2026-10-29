import { useState }from 'react'
import useKoleksi from '../hooks/useKoleksi'
import KotakPencarian from '../components/KotakPencarian'
import KartuItem from '../components/KartuItem'

export default function Koleksi() {
      const { items, loading, error } = useKoleksi()
    const [cari, setCari] = useState('')
    const [kategori, setKategori] = useState('Semua')

    if (loading) {
        return <p>Memuat data latihan...</p>
    }

    if (error) {
        return <p role="alert">Gagal memuat latihan: {error}</p>
    }

    const daftarKategori = [
        'Semua',
        ...new Set(items.map((item) => item.kategori))
    ]

    const tampil = items.filter(
        (item) =>
            item.judul.toLowerCase().includes(cari.toLowerCase()) &&
            (kategori === 'Semua' || item.kategori === kategori)
    )

    return (
        <section>
            <h1>Daftar Latihan</h1>

            <div className="alat-koleksi">
                <KotakPencarian
                    nilai={cari}
                    onUbah={setCari}
                />

                <select
                    aria-label="Kategori"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                >
                    {daftarKategori.map((namaKategori) => (
                        <option key={namaKategori} value={namaKategori}>
                            {namaKategori}
                        </option>
                    ))}
                </select>
            </div>

            {tampil.length === 0 ? (
                <p>Tidak ada latihan yang cocok.</p>
            ) : (
                <div className="daftar-kartu">
                    {tampil.map((item) => (
                        <KartuItem key={item.id} item={item} />
                    ))}
                </div>
            )}
        </section>
    )
}