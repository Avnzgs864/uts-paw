import { useContext } from "react";
import { KoleksiContext } from "../context/koleksiContext";

export default function useKoleksi() {
    const koleksi = useContext(KoleksiContext)

    if(!koleksi){
        throw new Error('useKoleksi harus dipakai dalam KoleksiProvider')
    }
    return koleksi
}