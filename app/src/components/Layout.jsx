import { NavLink, Outlet } from 'react-router-dom'
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
        <div className="kerangka">
            <header className="kepala">
                <strong>Jurnal Latihan Olahraga</strong>
                <nav className="menu">
                {daftar_menu.map (({ke, label}) => (
                    <NavLink key={ke} to={ke} end={ke ==='/'}>
                        {label}
                    </NavLink>
                ))}
                </nav>
            </header>

            <main className="isi">
                <Outlet />
            </main>

            <footer className="kaki">
                <span>UTS Pengembangan Aplikasi Web</span>
                <span className='nama'>Refin Agus Saputra</span>
            </footer>
        </div>
    )
}