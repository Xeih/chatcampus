# Rencana Implementasi CampusChat v0.1

## 1. Tiga Fitur Awal

### Fitur 1: Ruang Obrolan Real-time
- Pengguna membuat atau bergabung ke room.
- Pesan terkirim dan tampil langsung ke semua anggota room lewat Socket.IO.
- Kriteria selesai: dua peramban berbeda bisa saling bertukar pesan dalam satu room.

### Fitur 2: Profil Pengguna Sederhana
- Pengguna mengisi nama tampilan dan program studi saat masuk.
- Nama tampil di setiap pesan.
- Kriteria selesai: nama dan program studi muncul pada pesan yang dikirim.

### Fitur 3: Pencarian Pesan
- Kolom pencarian untuk menyaring pesan di room aktif berdasarkan kata kunci.
- Kriteria selesai: hasil pencarian hanya menampilkan pesan yang mengandung kata kunci.

## 2. Pembagian Tugas Anggota

| Anggota | Peran | Tanggung jawab | Cabang |
|---------|-------|----------------|--------|
| Anggota 1 | Backend | Server Socket.IO, manajemen room, logika pencarian | `feature/chat-room`, `feature/pencarian` |
| Anggota 2 | Frontend | Antarmuka obrolan, form profil, kolom pencarian | `feature/profil` |
| Anggota 3 | Dokumentasi dan Pengujian | README, dokumen rencana, pengujian manual dan otomatis, review merge | `docs/*`, `tests/*` |

## 3. Jadwal Singkat

| Minggu | Target |
|--------|--------|
| 1 | Repository, struktur proyek, ruang obrolan dasar |
| 2 | Profil pengguna dan integrasi frontend |
| 3 | Pencarian pesan, pengujian, perapihan dokumentasi |

## 4. Risiko Pengembangan

| No | Risiko | Dampak | Mitigasi |
|----|--------|--------|----------|
| 1 | Konflik merge saat beberapa anggota mengubah berkas yang sama | Waktu terbuang | Satu fitur satu cabang, commit kecil, tarik `main` secara berkala |
| 2 | Anggota belum familiar dengan Socket.IO | Fitur utama terlambat | Sesi belajar bersama di minggu 1, mulai dari contoh resmi |
| 3 | Pesan hilang saat server restart (penyimpanan memori) | Data tidak bertahan | Terima di v0.1, rencanakan SQLite di versi berikutnya |
| 4 | Ketersediaan waktu anggota berbeda | Jadwal molor | Beban tugas dibagi merata, evaluasi progres tiap pekan |
| 5 | Akses jaringan atau remote GitHub bermasalah | Kolaborasi terhambat | Repository lokal tetap jadi sumber utama, dorong ke remote saat tersedia |
| 6 | Keamanan dasar (input tidak disaring) | Risiko XSS pada pesan | Escape konten pesan sebelum ditampilkan |
