import { NavLink, Outlet } from "react-router-dom";
import './Layout.css'

const daftar_menu = [
    {ke : '/', label : 'Beranda'},
    {ke : 'koleksi', label : 'Daftar Latihan'},
    {ke : 'tambah', label : 'Tambah Latihan'},
    {ke : 'statistik', label : 'Statistik'},
    {ke : 'tentang', label : 'Tentang'}
]

export default function Layout(){
    return(
        <div className="keraangka">
            <header className="header">
                <strong>Jurnal Latihan Olahraga</strong>
                <nav className="menu"></nav>
                {daftar_menu.map (({ke, label}) => (
                    <NavLink key={ke} to={ke} end={ke ==='/'}>
                        {label}
                    </NavLink>
                ))}
            </header>

            <main className="isi">
                <Outlet />
            </main>

            <footer className="kaki">
                UTS Pengembangan Aplikasi WEB By Refin Agus Saputra
            </footer>
        </div>
    )
}