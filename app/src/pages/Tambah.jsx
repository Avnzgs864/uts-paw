import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = {
    judul: '',
    kategori: 'Kardio',
    tanggal: '',
    durasi: '',
    kalori: ''
}

export default function Tambah() {
    const { tambah } = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const simpan = (e) => {
        e.preventDefault()

        if (form.judul.trim().length < 3) {
            setGalat('Judul wajib diisi, minimal 3 karakter.')
            return
        }

        const durasi = Number(form.durasi)
        const kalori = Number(form.kalori)

        if (
            !Number.isFinite(durasi) ||
            !Number.isFinite(kalori) ||
            durasi < 0 ||
            kalori < 0
        ) {
            setGalat('Durasi dan kalori harus berupa angka nol atau lebih.')
            return
        }

        setGalat('')

        tambah({
            ...form,
            judul: form.judul.trim(),
            durasi,
            kalori
        })

        navigate('/koleksi')
    }

    return (
        <form className="formulir" onSubmit={simpan} noValidate>
            <h1>Tambah Latihan</h1>

            {galat && <p role="alert">{galat}</p>}

            <label htmlFor="judul">Judul</label>
            <input
                id="judul"
                name="judul"
                type="text"
                value={form.judul}
                onChange={ubah}
            />

            <label htmlFor="kategori">Kategori</label>
            <select
                id="kategori"
                name="kategori"
                value={form.kategori}
                onChange={ubah}
            >
                <option value="Kardio">Kardio</option>
                <option value="Kekuatan">Kekuatan</option>
                <option value="Kelenturan">Kelenturan</option>
                <option value="Permainan">Permainan</option>
            </select>

            <label htmlFor="tanggal">Tanggal</label>
            <input
                id="tanggal"
                name="tanggal"
                type="date"
                value={form.tanggal}
                onChange={ubah}
            />

            <label htmlFor="durasi">Durasi</label>
            <input
                id="durasi"
                name="durasi"
                type="number"
                min="0"
                step="any"
                placeholder="Dalam menit"
                value={form.durasi}
                onChange={ubah}
            />

            <label htmlFor="kalori">Kalori Terbakar</label>
            <input
                id="kalori"
                name="kalori"
                type="number"
                min="0"
                step="any"
                placeholder="Dalam kkal"
                value={form.kalori}
                onChange={ubah}
            />

            <button type="submit">Simpan</button>
        </form>
    )
}