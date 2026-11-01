// Logika ruang obrolan: menyimpan pesan per room di memori (v0.1).
const rooms = new Map();

function ambilRoom(nama) {
  if (!rooms.has(nama)) rooms.set(nama, []);
  return rooms.get(nama);
}

function tambahPesan(nama, pengirim, teks) {
  const pesan = { pengirim, teks, waktu: new Date().toISOString() };
  ambilRoom(nama).push(pesan);
  return pesan;
}

function riwayat(nama) {
  return ambilRoom(nama).slice();
}

module.exports = { tambahPesan, riwayat };
