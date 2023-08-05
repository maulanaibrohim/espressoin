---
sidebar_position: 3
title: Relaksasi Struktur
---

# Relaksasi Struktur di Quantum ESPRESSO

## Mengapa Relaksasi Struktur?

Atom dalam kisi kristal diikat oleh gaya-gaya yang timbul dari interaksi antara elektron dan inti. Posisi atom dalam keseimbangan sesuai dengan energi total terendah dari sistem. Untuk mendapatkan properti material yang akurat, penting untuk merelaksasikan posisi atom untuk mencapai konfigurasi keseimbangan.

## Jenis Relaksasi dalam Quantum Espresso

Quantum Espresso menawarkan dua metode utama untuk relaksasi struktur:

1. VC-Relax
"VC-Relax" adalah singkatan dari relaksasi sel variabel. Dalam metode ini, tidak hanya posisi atom yang dioptimalkan, tetapi bentuk dan volume sel simulasi juga diizinkan berubah selama relaksasi. Metode ini sangat berguna ketika mempelajari material dengan perubahan volume yang signifikan selama reaksi kimia, transisi fasa, atau di bawah tekanan eksternal.
Berikut ini adalh contoh input file untuk VC-Relax

    &CONTROL
    calculation = 'vc-relax',
    outdir = './outdir/',
    prefix = 'relax_example',
    pseudo_dir = './pseudo/',
    etot_conv_thr = 1.0d-6,
    forc_conv_thr = 1.0d-4
    /

    &SYSTEM
    ibrav = 0,
    nat = 3,
    ntyp = 2,
    ecutwfc = 50.0,
    ecutrho = 200.0
    /

    &ELECTRONS
    conv_thr = 1.0d-8
    /

    &IONS
    /

    &CELL
    /

    ATOMIC_SPECIES
    element1  atomic_mass1  pseudopotential_file1
    element2  atomic_mass2  pseudopotential_file2
    ...
    elementN  atomic_massN  pseudopotential_fileN

    ATOMIC_POSITIONS crystal
    element1  x1  y1  z1
    element2  x2  y2  z2
    ...
    elementN  xN  yN  zN

    K_POINTS automatic
    kx ky kz  0 0 0

2. Relax
Metode "Relax" juga dikenal sebagai relaksasi sel tetap. Berbeda dengan VC-Relax, bentuk dan volume sel unit tetap, dan hanya posisi atom yang direlaksasi untuk menemukan konfigurasi energi minimum. Metode ini cocok untuk material yang mengalami perubahan struktural kecil dan ketika sel unit ditentukan secara akurat secara eksperimental.
Berikut ini adalah contoh input file untuk Relax

    &CONTROL
    calculation = 'relax',
    outdir = './outdir/',
    prefix = 'relax_example',
    pseudo_dir = './pseudo/',
    etot_conv_thr = 1.0d-6,
    forc_conv_thr = 1.0d-4
    /

    &SYSTEM
    ibrav = 0,
    nat = 3,
    ntyp = 2,
    ecutwfc = 50.0,
    ecutrho = 200.0
    /

    &ELECTRONS
    conv_thr = 1.0d-8
    /

    &IONS
    /

    &CELL
    /

    ATOMIC_SPECIES
    element1  atomic_mass1  pseudopotential_file1
    element2  atomic_mass2  pseudopotential_file2
    ...
    elementN  atomic_massN  pseudopotential_fileN

    ATOMIC_POSITIONS crystal
    element1  x1  y1  z1
    element2  x2  y2  z2
    ...
    elementN  xN  yN  zN

    K_POINTS automatic
    kx ky kz  0 0 0


## Parameter Input untuk Relaksasi Struktur

Untuk kedua metode VC-Relax dan Relax, berkas input utama dalam Quantum Espresso adalah namelist `&CONTROL`. Berikut ini adalah parameter-parameter penting yang umum digunakan untuk relaksasi struktur:

`calculation`: Tetapkan nilainya "vc-relax" untuk VC-Relax dan "relax" untuk metode Relax.
`outdir`: Menentukan direktori output tempat hasil akan disimpan.
`prefix`: Awalan untuk nama berkas input dan output.
`pseudo_dir`: Jalur menuju direktori yang berisi berkas-berkas pseudopotensial.
`etot_conv_thr`: Ambang batas konvergensi untuk energi total.
`forc_conv_thr`: Ambang batas konvergensi untuk gaya atom.
`cell_dynamics`: Tetapkan sebagai "bfgs" untuk optimasi quasi-Newton.
Selain itu, untuk VC-Relax, kalian perlu menentukan parameter sel awal dalam bagian CELL_PARAMETERS, sedangkan untuk Relax, parameter ini diberikan dalam bagian ATOMIC_POSITIONS.

## Melakukan Relaksasi Struktur

Setelah kalian telah menyiapkan berkas input, kalian dapat menjalankan perhitungan Quantum Espresso menggunakan eksekutor `pw.x`. Setelah perhitungan selesai, kalian dapat menganalisis berkas-berkas output untuk memeriksa konvergensi dan mengamati posisi atom dan parameter sel akhir.

:::info Penting

Penting untuk memverifikasi konvergensi proses relaksasi dengan memeriksa energi total akhir dan gaya pada atom. kalian mungkin perlu menyesuaikan ambang batas konvergensi (`etot_conv_thr` dan `forc_conv_thr`) untuk mendapatkan hasil yang dapat digunakan.

:::
