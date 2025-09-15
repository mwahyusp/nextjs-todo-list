To-Do List Sederhana
Proyek ini adalah aplikasi to-do list sederhana yang dibuat menggunakan Next.js dan Tailwind CSS. Pengguna dapat menambahkan dan menghapus tugas.
Prasyarat

Node.js (versi LTS direkomendasikan)
npm

Instalasi

Clone repositori ini atau buat proyek baru:npx create-next-app@latest todo-list

Masuk ke direktori proyek:cd todo-list

Instal dependensi:npm install

Pastikan Tailwind CSS sudah dikonfigurasi (lihat langkah umum di atas).

Menjalankan Proyek

Jalankan server pengembangan:npm run dev

Buka http://localhost:3000 di browser.

Struktur Proyek

pages/index.js: Halaman utama dengan logika to-do list.
styles/globals.css: File CSS dengan konfigurasi Tailwind.

Fitur

Tambah tugas baru melalui input teks.
Hapus tugas dengan tombol "Hapus".
State dikelola menggunakan React useState.

Teknologi yang Digunakan

Next.js
Tailwind CSS
React (useState)
