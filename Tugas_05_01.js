$(document).ready(function () {
    // 1. Efek fade-in untuk semua gambar di galeri
    $('.gallery-img').each(function (index) {
        $(this).delay(200 * index).animate({ opacity: 1 }, 1000);
    });

    // 2. Membuka gambar dalam modal saat diklik
    $('.gallery-img').on('click', function () {
        const imgSrc = $(this).attr('src'); // Mendapatkan sumber gambar yang diklik
        $('#modal-img').attr('src', imgSrc); // Mengatur gambar ke dalam modal
        $('.modal').fadeIn(); // Menampilkan modal
    });

    // 3. Menutup modal ketika tombol "Close" diklik
    $('.close-btn').on('click', function () {
        $('.modal').fadeOut();
    });

    // 4. Menutup modal ketika area di luar gambar diklik
    $('.modal').on('click', function (e) {
        if ($(e.target).is('.modal')) {
            $('.modal').fadeOut();
        }
    });
});