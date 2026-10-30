import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('Beranda menampilkan judul Jurnal Latihan Olahraga', () => {
  buka('/')

  expect(
    screen.getByRole('heading', {
      name: 'Jurnal Latihan Olahraga',
      level: 1
    })
  ).toBeInTheDocument()
})

test('Tambah menampilkan judul Tambah Latihan', () => {
  buka('/tambah')

  expect(
    screen.getByRole('heading', {
      name: 'Tambah Latihan',
      level: 1
    })
  ).toBeInTheDocument()
})

test('Statistik menampilkan judul Statistik Latihan', () => {
  buka('/statistik')

  expect(
    screen.getByRole('heading', {
      name: 'Statistik Latihan',
      level: 1
    })
  ).toBeInTheDocument()
})

test('Tentang menampilkan nama mahasiswa', () => {
  buka('/tentang')

  const isi = screen.getByRole('main')

  expect(
    within(isi).getByText('Refin Agus Saputra')
  ).toBeInTheDocument()
})

test('Tentang menampilkan NIM mahasiswa', () => {
  buka('/tentang')

  const isi = screen.getByRole('main')

  expect(
    within(isi).getByText('124140126')
  ).toBeInTheDocument()
})