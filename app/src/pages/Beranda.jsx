import { Link } from "react-router-dom";
import mahasiswa from '../../mahasiswa.json'
import useKoleksi from '../hooks/useKoleksi'

export default function Beranda(){
  const { items, loading } =useKoleksi()

  const jumlahKategori =new Set(
    items.map((latihan) => latihan.kategori)
  ).size

  return(
    <section>
      <h1>Jurnal Latihan Olahraga</h1>
      <p>Tema: {mahasiswa.tema}</p>

      {loading ? (
        <p>Memuat ringkasan latihan...</p>
      ) : (
        <p>
          Ada {items.length} latihan dalam {jumlahKategori} kategori.
        </p>
      )}

      <Link to="/koleksi">Lihat semua latihan</Link>
    </section>
  )
}

