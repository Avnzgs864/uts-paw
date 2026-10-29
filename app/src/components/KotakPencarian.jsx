export default function KotakPencarian({ nilai, onUbah }) {
    return (
        <input
            type="search"
            placeholder="Cari judul latihan..."
            aria-label="Cari judul latihan"
            value={nilai}
            onChange={(e) => onUbah(e.target.value)}
        />
    )
}