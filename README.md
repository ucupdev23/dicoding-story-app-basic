# Story App - Submission Kelas Belajar Membangun Aplikasi Web

## Deskripsi Proyek

Ini adalah aplikasi web sederhana yang dibangun sebagai *submission pertama* untuk kelas "Belajar Pengembangan Web Intermediate" dari Dicoding. Aplikasi ini berfokus pada interaksi dengan Web API untuk menampilkan dan menambahkan data cerita, serta menerapkan praktik dasar desain web modern seperti aksesibilitas dan transisi halaman.

## Fitur-Fitur Utama

Aplikasi ini memenuhi kriteria wajib dari *submission pertama* dan mencakup fitur-fitur berikut:

* **Pemanfaatan Satu API sebagai Sumber Data:** Mengambil dan mengirim data cerita dari [Story API Dicoding](https://story-api.dicoding.dev/v1/).
* **Arsitektur Single-Page Application (SPA):** Menggunakan *routing* berbasis *hash* (`#/`) untuk navigasi antar halaman tanpa *reload* penuh. Menerapkan pola Model-View-Presenter (MVP) dalam pengelolaan data ke antarmuka pengguna.
* **Menampilkan Data:** Menampilkan data cerita dari API dalam bentuk daftar. Setiap item cerita menampilkan minimal satu gambar dan tiga data teks (nama, deskripsi singkat, tanggal). Cerita dengan data lokasi ditampilkan pada peta digital interaktif (Leaflet.js) dengan *marker* dan *popup* yang sesuai.
* **Memiliki Fitur Tambah Data Baru:** Memungkinkan pengguna menambahkan cerita baru. Formulir input mendukung pengambilan gambar langsung dari kamera perangkat (dengan memastikan *stream* kamera dinonaktifkan setelah digunakan) dan pengambilan koordinat lokasi (latitude & longitude) melalui interaksi klik pada peta.
* **Menerapkan Aksesibilitas Sesuai Standar (WCAG):**
    * Menerapkan "Skip to Content" untuk memudahkan navigasi menggunakan keyboard.
    * Menggunakan `alt text` (teks alternatif) yang deskriptif pada konten-konten gambar yang esensial.
    * Memastikan setiap `form control` (misalnya `<input>`, `<textarea>`) berasosiasi dengan `<label>` untuk aksesibilitas yang lebih baik.
    * Menggunakan elemen semantik HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`) dalam menyusun struktur halaman dan landmarking HTML.
* **Merancang Transisi Halaman yang Halus:** Mengimplementasikan gaya transisi halaman secara halus menggunakan `View Transition API` untuk pengalaman pengguna yang lebih baik.

## Cara Menginstal dan Menggunakan Aplikasi

1.  **Kloning Repository:**
    ```bash
    git clone https://github.com/ucupdev23/dicoding-story-app-basic.git
    cd dicoding-story-app-basic
    ```
2.  **Instal Dependensi:**
    ```bash
    npm install
    ```
3.  **Jalankan Aplikasi dalam Mode Pengembangan:**
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan di `http://localhost:5173/` (atau port lain).
4.  **Penggunaan Aplikasi:**
    * **Registrasi & Login:** Daftar akun baru atau login dengan akun yang sudah ada untuk mengakses fitur aplikasi.
    * **Lihat Cerita:** Setelah login, Anda akan diarahkan ke halaman daftar cerita yang diambil dari API.
    * **Tambah Cerita:** Navigasi ke halaman "Tambah Cerita Baru", isi deskripsi, ambil foto dari kamera, dan pilih lokasi di peta.

Kelas ini dibimbing oleh Dicoding Indonesia.
---
