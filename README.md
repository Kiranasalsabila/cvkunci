# XLXSTOTXT

Proyek ini adalah sebuah aplikasi web yang memungkinkan pengguna untuk mengkonversi berbagai format file, seperti:
- Konversi file TXT ke VCF
- Konversi file XLSX ke TXT
- Memproses banyak file TXT ke VCF
- Split file VCF menjadi beberapa bagian

## Fitur

### 1. Proteksi Password
- Saat mengakses halaman web, pengguna akan diminta memasukkan password. 
- Password default adalah `default123`, dan pengguna dapat mengubahnya kapan saja.

### 2. Ubah Password
- Untuk mengubah password, pengguna bisa mengetikkan `/setingg` di kolom password saat login, dan kemudian akan diminta untuk memasukkan password baru.

### 3. Konversi TXT ke VCF
- Jika file TXT diunggah, pengguna dapat memilih untuk mengonversinya menjadi file VCF.
- Jika input nama file VCF dikosongkan, nama file TXT akan digunakan sebagai nama file VCF secara otomatis.

### 4. Konversi XLSX ke TXT
- XLSX dapat dikonversi menjadi file teks dengan format yang lebih mudah dibaca.

### 5. Split File VCF
- File VCF yang diunggah dapat dipisah menjadi beberapa file berdasarkan jumlah kontak yang diinginkan per file.

## Cara Penggunaan

1. Unggah file melalui antarmuka yang telah disediakan.
2. Gunakan navigasi untuk memilih jenis konversi yang diinginkan.
3. Setelah file diproses, file hasil konversi akan dapat diunduh secara otomatis.

Untuk lebih lanjut, Anda bisa menyesuaikan kode dengan mengedit `script.js` sesuai dengan kebutuhan.