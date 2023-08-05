---
sidebar_position: 4
title: Struktur Pita Energi
---

Terdapat beberapa tahapan dalam proses kalkulasi struktur pita energi menggunkan Quantum Espresso. Tahapan-tahapan tersebut adalah sebagai berikut:

## 1. Relaksasi Struktur

    Langkah pertama adalah mengoptimalkan struktur kristal untuk mendapatkan posisi atom dan parameter kisi dalam keadaan keseimbangan. Langkah ini penting untuk memastikan sistem berada dalam konfigurasi energi terendah.

    *input file* yang diperlukan: kalian akan memerlukan namelist `&control`, `&system`, `&electrons`, dan `&ions` dalam *input file* kalian.

    Berikut contoh sederhana *input file* (`relax.in`) untuk relaksasi struktur:

    ```plaintext
    &control
        calculation = 'vc-relax'
        prefix = 'contoh'
        outdir = './'
        pseudo_dir = '/lokasi/file/pseudopotensial'
    /
    &system
        ibrav = 0
        celldm(1) = 10.0  ! Tebakan awal untuk parameter kisi (sesuaikan jika perlu)
        nat = 3
        ntyp = 2
        ecutwfc = 40.0    ! Pemotongan energi untuk fungsi gelombang (sesuaikan jika perlu)
    /
    &electrons
        conv_thr = 1.0e-8  ! Ambang konvergensi untuk konsistensi diri elektronik
    /
    &ions
        ion_dynamics = 'bfgs'  ! Gunakan algoritma BFGS untuk relaksasi
    /
    ATOMIC_SPECIES
    Unsur1  MassaAtom1  Lokasi_PP1
    Unsur2  MassaAtom2  Lokasi_PP2
    ...
    ATOMIC_POSITIONS {angstrom}
    Unsur1  x1  y1  z1
    Unsur2  x2  y2  z2
    ...
    K_POINTS {automatic}
    nx  ny  nz  0  0  0   ! nx, ny, nz harus dipilih berdasarkan sistem kalian
    ```

    Untuk menjalankan perhitungan relaksasi:

    ```bash
    pw.x < input.in > output_relax
    ```

## 2. Perhitungan Medan Konsisten (SCF)

    Setelah struktur direlaksasi, langkah selanjutnya adalah melakukan perhitungan SCF untuk menemukan kerapatan elektron yang konsisten diri.

    *input file* yang diperlukan: kalian dapat menggunakan kembali namelist `&control`, `&system`, dan `&electrons` dari langkah relaksasi. kalian mungkin perlu memodifikasi `prefix` di namelist `&control` agar tidak menimpa berkas sebelumnya.

    Berikut contoh *input file* (`scf.in`) untuk perhitungan SCF:

    ```plaintext
    &control
        calculation = 'scf'
        prefix = 'contoh_scf'
        outdir = './'
        pseudo_dir = '/lokasi/file/pseudopotensial'
    /
    &system
        ibrav = 0
        celldm(1) = 10.0  ! Gunakan parameter kisi yang telah dioptimalkan dari relaksasi
        nat = 3
        ntyp = 2
        ecutwfc = 40.0    ! Pemotongan energi untuk fungsi gelombang (sesuaikan jika perlu)
    /
    &electrons
        conv_thr = 1.0e-8  ! Ambang konvergensi untuk konsistensi diri elektronik
    /
    ATOMIC_SPECIES
    Unsur1  MassaAtom1  Lokasi_PP1
    Unsur2  MassaAtom2  Lokasi_PP2
    ...
    ATOMIC_POSITIONS {angstrom}
    Unsur1  x1  y1  z1 ! Gunakan posisi atom yang telah dioptimalkan dari relaksasi
    Unsur2  x2  y2  z2
    ...
    K_POINTS {automatic}
    nx  ny  nz  0  0  0   ! nx, ny, nz harus dipilih berdasarkan sistem kalian
    ```

    Untuk menjalankan perhitungan SCF:

    ```bash
    pw.x < scf.in > scf.out
    ```

## 3. Perhitungan Struktur Pita

    Setelah mendapatkan kerapatan elektron yang konsisten diri, kalian dapat menghitung struktur pita dari material kalian.

    *input file* yang diperlukan: kalian akan memerlukan informasi tambahan dalam *input file* untuk menentukan titik k dan perhitungan struktur pita.

    Berikut contoh *input file* (`input_bands.in`) untuk perhitungan struktur pita:

    ```plaintext
    &control
        calculation = 'bands'
        prefix = 'contoh_pita'
        outdir = './'
        pseudo_dir = '/lokasi/pseudopotensial'
    /
    &system
        ibrav = 0
        celldm(1) = 10.0  ! Gunakan parameter kisi yang telah dioptimalkan dari relaksasi
        nat = 3
        ntyp = 2
        ecutwfc = 40.0    ! Pemotongan energi untuk fungsi gelombang (sesuaikan jika perlu)
    /
    &electrons
        conv_thr = 1.0e-8  ! Ambang konvergensi untuk konsistensi diri elektronik
    /
    ATOMIC_SPECIES
    Unsur1  MassaAtom1  Lokasi_PP1
    Unsur2  MassaAtom2  Lokasi_PP2
    ...
    ATOMIC_POSITIONS {angstrom}
    Unsur1  x1  y1  z1
    Unsur2  x2  y2  z2
    ...
    K_POINTS crystal_b ! Dapat menggunakan Seek K-path Generator untuk menentukan titik k
    nk1  nk2  nk3  0 0 0    ! Tentukan titik k yang kalian inginkan untuk perhitungan struktur pita
    BAND_STRUCTURE 
        number_of_points = npts    ! Gantikan npts dengan jumlah titik simetri tinggi
        k_points(1,:) = k1_x k1_y k1_z  ! Koordinat titik simetri tinggi 1
        k_points(2,:) = k2_x k2_y k2_z  ! Koordinat titik simetri tinggi 2
        ...
        k_points(npts,:) = kn_x kn_y kn_z  ! Koordinat titik simetri tinggi terakhir
    ```

    Untuk menjalankan perhitungan struktur pita:

    ```bash
    pw.x < bands.in > bands.out
    ```
    [Seek K-path](https://www.materialscloud.org/work/tools/seekpath)

## 4. Pascaproses Struktur Pita

    Setelah selesai, langkah selanjutnya adalah melakukan post-processing data menggunakan `bands.x` untuk memperoleh data yang lebih mudah dibaca dan divisualisasikan. Berikut contoh *input file* (`bandspp.in`) untuk pascaproses struktur pita:

    ```plaintext
    &BANDS
        prefix = 'contoh_pita'
        outdir = './'
        filband = 'bands.out'
    ```
    Untuk menjalankan pascaproses:

    ```bash
    bands.x < bandspp.in > bandspp.out
    ```

    Terdapat beberapa file output yang dihasilkan dari pascaproses ini, diantaranya:
    - Band.dat.gnu berisi struktur pita dalam satuan eV, langsung dapat divisualisasikan dengan mudah karena sudah tersusun dari 2 colom energy dan titik K.

    - Band.dat.rap berisi informasi simetri, yang akan dibaca oleh kode plotting plotband.x.

    - Band.dat berisi struktur pita dalam format yang sesuai untuk kode plotting plotband.x.bands.out


    Untuk plot sturktur pita, kalian dapat menggunakan kode plotting `plotband.x` yang telah disediakan oleh Quantum Espresso. Berikut contoh *input file* (`plotband.in`) untuk plotting struktur pita:

    ```plaintext
    &inputpp
        prefix = 'contoh_pita'
        outdir = './'
        filband = 'bands.out'
        lsym = .true.
        filout = 'contoh_pita.png'
    /    
    ```
    Untuk menjalankan plotting:

    ```bash
    plotband.x < plotband.in > plotband.out
    ```

    Atau kalian dapat dengan mudah mengunggah file `Band.dat.gnu` ke [EspressoIn - Tools](https://espresoin-tools.streamlit.app/) untuk memperoleh plot struktur pita. Buka file scf.out untuk mendapatkan nilai energi fermi dand bandspp.out untuk mendapatkan titik simetri tinggi.
