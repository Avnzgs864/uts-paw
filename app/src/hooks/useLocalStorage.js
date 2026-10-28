import { useEffect, useState } from "react";
import { data } from "react-router-dom";

export default function useLocalStorage(kunci, nilaiAwal) {
    const [data, setData] = useState (() => {
        const dataTersimpan = localStorage.getItem(kunci)
        return dataTersimpan ? JSON.parse(dataTersimpan) : nilaiAwal
    })


useEffect(() => {
    if ( data === null ){
        localStorage.removeItem(kunci)
    }else {
        localStorage.setItem(kunci, JSON.stringify(data))
    }

}, [kunci, data])

return [data, setData]
}