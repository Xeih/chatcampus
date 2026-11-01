# CampusChat

Aplikasi chat web real-time untuk komunikasi mahasiswa di lingkungan kampus.

## Tujuan Aplikasi

CampusChat dibuat supaya koordinasi antar mahasiswa tidak lagi tercecer di banyak grup WhatsApp. Informasi tugas, jadwal kuliah, dan kegiatan organisasi dikumpulkan dalam satu tempat yang tertata per ruang obrolan (room), sehingga pesan penting lebih mudah dicari dan diikuti.

## Pengguna Sasaran

- Mahasiswa aktif yang butuh ruang diskusi per mata kuliah atau per kelas.
- Pengurus organisasi dan panitia kegiatan kampus.
- Asisten dosen atau ketua kelas yang menyebarkan informasi ke banyak orang sekaligus.

## Fitur Versi Awal (v0.1)

1. **Ruang obrolan (chat room)**: pengguna bisa membuat dan bergabung ke room, lalu bertukar pesan secara real-time.
2. **Profil pengguna sederhana**: nama tampilan dan program studi.
3. **Pencarian pesan**: mencari pesan berdasarkan kata kunci dalam satu room.

Rincian pengerjaan ada di [`docs/rencana-implementasi.md`](docs/rencana-implementasi.md).

## Teknologi

- Backend: Node.js, Express, Socket.IO
- Frontend: HTML, CSS, JavaScript (vanilla)
- Penyimpanan: SQLite (direncanakan, v0.1 memakai penyimpanan memori)

## Struktur Folder

```
CampusChat/
├── docs/        dokumen perencanaan
├── public/      berkas frontend (HTML, CSS, JS)
├── src/         kode backend
├── tests/       pengujian
├── package.json
└── README.md
```

## Cara Menjalankan Proyek

Prasyarat: Node.js versi 18 atau lebih baru, serta Git.

```bash
# 1. Klona repository
git clone <url-repository> CampusChat
cd CampusChat

# 2. Pasang dependensi
npm install

# 3. Jalankan server
npm start

# 4. Buka di peramban
# http://localhost:3000
```

## Alur Kerja Git

- `main`: cabang stabil, hanya menerima hasil merge.
- `feature/<nama-fitur>`: cabang untuk setiap fitur, digabung ke `main` lewat merge setelah selesai.
- Pesan commit memakai format `jenis: deskripsi singkat` (contoh: `feat: tambah ruang obrolan`).

## Anggota Tim

| No | Nama | NIM | Peran |
|----|------|-----|-------|
| 1 | Anggota 1 (isi nama) | (isi NIM) | Ketua, Backend |
| 2 | Anggota 2 (isi nama) | (isi NIM) | Frontend |
| 3 | Anggota 3 (isi nama) | (isi NIM) | Dokumentasi dan Pengujian |

## Lisensi

Proyek untuk keperluan tugas perkuliahan Sistem Informasi.
