// Ambil semua elemen dengan class "kartu-profil"
const kartuProfil = document.querySelectorAll('.kartu-profil');

// Tambahkan event listeners untuk efek hover
kartuProfil.forEach(kartu => {
    // Saat mouse masuk ke kartu
    kartu.addEventListener('mouseover', () => {
        kartu.style.transform = 'translateY(-5px)';
        kartu.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    // Saat mouse keluar dari kartu
    kartu.addEventListener('mouseout', () => {
        kartu.style.transform = 'translateY(0)';
        kartu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});
