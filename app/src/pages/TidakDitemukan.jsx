import { Link } from "react-router-dom";

export default function TidakDitemukan() {
  return (
    <section>
      <h1>404</h1>
      <p>halaman Tidak Dapat Ditemukan</p>
      <Link to="/">Kembali ke Beranda</Link>
    </section>
  )
}