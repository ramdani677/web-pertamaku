// Memanggil elemen tombol dan teks paragraf berdasarkan ID & tag-nya
const tombol = document.getElementById('btnKlik');
const teks = document.querySelector('p');

// Menambahkan 'Event Listener' (Mendengar aksi klik pengguna)
tombol.addEventListener('click', function() {
    // Mengubah isi teks paragraf secara dinamis
    teks.innerHTML = "🎉 <b>Hebat!</b> Logika JavaScript kamu berhasil berjalan!";
    
    // Mengubah warna tombol secara otomatis
    tombol.style.backgroundColor = "#28a745"; // Warna hijau sukses
    tombol.innerText = "Berhasil Di-klik!";
});
