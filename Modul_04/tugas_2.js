// Ambil elemen input pencarian
const searchInput = document.getElementById('searchInput');

// Ambil semua elemen dengan class "kartu-profil"
const kartuProfil = document.querySelectorAll('.kartu-profil');

// Fungsi untuk memfilter kartu profil berdasarkan nama atau jurusan
searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();

    kartuProfil.forEach(kartu => {
        const nama = kartu.getAttribute('data-nama').toLowerCase();
        const jurusan = kartu.getAttribute('data-jurusan').toLowerCase();

        if (nama.includes(query) || jurusan.includes(query)) {
            kartu.style.display = 'block';  // Tampilkan kartu jika cocok
        } else {
            kartu.style.display = 'none';  // Sembunyikan kartu jika tidak cocok
        }
    });
});