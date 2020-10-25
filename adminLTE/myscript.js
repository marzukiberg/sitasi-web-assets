const flashData = $('.flash-data').data('flashdata');
if (flashData == 'BerhasilUbah') {
    Swal.fire({
        title: ' Data berhasil di ubah',
        text: '',
        icon: 'success'
    })
} else if (flashData == 'GagalUbah') {
    Swal.fire({
        title: ' Data gagal di ubah',
        text: '',
        icon: 'error'
    });
} else if (flashData == 'Pengajuan') {
    Swal.fire({
        title: 'Pengajuan Judul Berhasil',
        text: '',
        icon: 'success'
    })
} else if (flashData == 'GagalUbahPass') {
    Swal.fire({
        title: 'Kata sandi gagal diubah!',
        text: '',
        icon: 'error'
    })
} else if (flashData == 'Katasandibeda') {
    Swal.fire({
        title: 'Kata sandi anda salah!',
        text: '',
        icon: 'error'
    })
} else if (flashData == 'BerhasilUbahPass') {
    Swal.fire({
        title: 'Kata sandi anda berhasil diubah',
        text: '',
        icon: 'success'
    })
} else if (flashData == 'BerhasilTambahData') {
    Swal.fire({
        title: 'Berhasil Tambah Data',
        text: '',
        icon: 'success'
    })
} else if (flashData == 'GagalTambahData') {
    Swal.fire({
        title: 'Gagal Tambah Data!',
        text: '',
        icon: 'error'
    })
} else if (flashData == 'BerhasilHidupSesi') {
    Swal.fire({
        title: 'Berhasil hidupkan sesi!',
        text: '',
        icon: 'Success'
    })
} else if (flashData == 'GagalHidupSesi') {
    Swal.fire({
        title: 'Gagal hidupkan sesi!',
        text: '',
        icon: 'error'
    })
} else if (flashData == 'BerhasilMatiSesi') {
    Swal.fire({
        title: 'Berhasil matikan sesi!',
        text: '',
        icon: 'success'
    })
} else if (flashData == 'GagalReview') {
    Swal.fire({
        title: 'Gagal review !!',
        text: '',
        icon: 'error'
    })
} else if (flashData == 'PengujiSama1') {
    Swal.fire({
        title: ' Dosen Penguji tidak boleh sama dengan dosen pembimbing !!',
        text: '',
        icon: 'error'
    })
} else if (flashData == 'GagalPilihPenguji') {
    Swal.fire({
        title: ' Penguji Gagal Ditentukan',
        text: '',
        icon: 'error'
    })
} else if (flashData == 'BerhasilPilihPenguji') {
    Swal.fire({
        title: ' Penguji Berhasil Ditentukan',
        text: '',
        icon: 'success'
    })
} else if (flashData == 'ReviewerKosong') {
    Swal.fire({
        title: ' Dosen Reviewer Belum Dipilih',
        text: '',
        icon: 'error'
    })
} else if (flashData == 'BerhasilUnggah') {
    Swal.fire({
        title: ' Berkas Berhasil Diunggah',
        text: '',
        icon: 'success'
    })
} else if (flashData == 'GagalUnggah') {
    Swal.fire({
        title: ' Berkas Gagal Diunggah',
        text: '',
        icon: 'error'
    })
}





const flashProp = $('.flash-proposal').data('flashdata');
if (flashProp) {
    Swal.fire({
        title: flashProp + ' Gagal di upload',
        text: '',
        icon: 'error'
    });
}

$('.delete-link').on('click', function (e) {

    e.preventDefault();
    const href = $(this).attr('href');

    Swal.fire({
        title: 'Hapus Data?',
        text: 'Data akan dihapus permanen!',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Tidak',
        confirmButtonText: 'Ya'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
            Swal.fire('Data berhasil dihapus', '', 'success');
        }
    })


});

$('.tombol-keluar').on('click', function (e) {

    e.preventDefault();
    const href = $(this).attr('href');

    Swal.fire({
        title: 'Apakah yakin ingin keluar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Tidak',
        confirmButtonText: 'Ya'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })


});

$('.tombol-gantipw').on('click', function (e) {

    e.preventDefault();
    const href = $(this).attr('href');

    Swal.fire({
        title: 'Apakah yakin ingin ganti password?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Tidak',
        confirmButtonText: 'Ya'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })


});

$('.tombol-pengajuan').on('click', function (e) {

    e.preventDefault();
    const href = $(this).attr('href');

    Swal.fire({
        title: 'Apakah yakin ingin mengajukan judul proposal pada sesi ini?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Tidak',
        confirmButtonText: 'Ya'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })


});

$('.tombol-upload').on('click', function (e) {

    e.preventDefault();
    const href = $(this).attr('href');

    Swal.fire({
        title: 'Apakah anda yakin?',
        text: "Berkas akan di unggah",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Batal',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })

});

$('.tombol-seminar').on('click', function (e) {

    e.preventDefault();
    const href = $(this).attr('href');

    Swal.fire({
        title: 'Apakah yakin ingin mendaftar seminar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Tidak',
        confirmButtonText: 'Ya'
    }).then((result) => {
        if (result.value) {
            document.location.href = href;
        }
    })


});


$(document).ready(function () {
    $('#email').on('submit', function (e) {
        $.ajax({
            url: 'subscribe_act.php', //nama action script php sobat
            data: $(this).serialize(),
            type: 'POST',
            success: function (data) {
                console.log(data);
                swal("Success!", "Message sent!", "success");
            },
            error: function (data) {
                swal("Oops...", "Something went wrong :(", "error");
            }
        });
        e.preventDefault();
    });
});