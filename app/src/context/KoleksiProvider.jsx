import { useEffect, useState } from "react";
import { KoleksiContext } from "./koleksiContext";
import useLocalStorage from "../hooks/useLocalStorage";

export function KoleksiProvider({children}) {
    const [daftarLatihan, setDaftarLatihan] = useLocalStorage('uts-paw-koleksi', null)
    const [loading, setLoading] = useState(daftarLatihan === null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (daftarLatihan !== null) return
        async function muatLatihan(){
            try {
                const respons = await fetch(`${import.meta.env.BASE_URL}data/koleksi.json`)
                if(!respons.ok){
                    throw new Error(`Data latihan gagal dimuat (status ${respons.status})`)
            }

            const dataLatihan = await respons.json()
            setDaftarLatihan(dataLatihan)
            }catch(masalah){
                setError(masalah.message)
            }finally {
                setLoading(false)
            }
        }
        muatLatihan()
    }, [daftarLatihan, setDaftarLatihan])
    const tambah = (latihanBaru) => {
        const idBaru = String(Date.now())
        
        setDaftarLatihan((daftarLama) => [
            ...(daftarLama ?? []),
            {...latihanBaru, id: idBaru},
        ])
    }
    const hapus = (idLatihan) => {
        setDaftarLatihan((daftarLama) =>
        (daftarLama ?? []).filter((latihan) => latihan.id !== idLatihan)
        )
    }
    return (
        <KoleksiContext.Provider
            value={{items: daftarLatihan ??[], loading, error, tambah, hapus}}
        >
            {children}
        </KoleksiContext.Provider>
    )
}