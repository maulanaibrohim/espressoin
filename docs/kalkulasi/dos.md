---
sidebar_position: 5
title: Density of States
---

## Apa itu Density of States (DOS)?

Density of States (DOS) adalah konsep fundamental dalam fisika materi terkondensasi dan ilmu material. DOS memberikan informasi berharga tentang distribusi keadaan elektronik dalam suatu material dengan memperhatikan tingkat energi mereka. Dengan kata lain, DOS memberitahu kita berapa banyak keadaan elektronik yang tersedia pada berbagai tingkat energi dalam struktur pita energi material.

## Kalkulasi DOS dengan Quantum Espresso

Dalam Quantum ESPRESSO, DOS dihitung berdasarkan informasi struktur elektronik yang diperoleh dari perhitungan self-consistent field (SCF). Sama seperti perhitungan struktur pita energi, perhitungan DOS juga memerlukan beberapa tahapan. Tahapan-tahapan tersebut adalah sebagai berikut:

### 1. Relaksasi struktur (jika belum dilakukan)

    Sama seperti perhitungan struktur pita energi

### 2. Perhitungan SCF

    Sama seperti perhitungan struktur pita energi

### 3. Perhitungan NSCF

    Dalam perhitungan nscf kalian hanya perlu menggubah parameter `calculation` pada namelist `&control` menjadi `nscf`. Berikut contoh *input file* (`nscf.in`) untuk perhitungan NSCF:

    ```plaintext
    &control
        calculation = 'nscf'
        prefix = 'contoh'
        outdir = './'
        pseudo_dir = '/lokasi/file/pseudopotensial'
    /
    ```

### 4. Perhitungan DOS

    Setelah perhitungan NSCF selesai, kalian dapat menghitung DOS dengan menambahkan namelist `&DOS` pada *input file* kalian. Berikut contoh *input file* (`dos.in`) untuk perhitungan DOS:

    ```plaintext
    &DOS
        prefix = 'contoh'
        outdir = './'
        fildos = 'contoh.dat'
        Emin = -10.0
        Emax = 10.0
        DeltaE = 0.01
    /
    ```

    Parameter `fildos` digunakan untuk menentukan nama berkas keluaran yang berisi informasi DOS. Parameter `Emin` dan `Emax` digunakan untuk menentukan batas bawah dan atas energi yang akan dikalkulasi. Parameter `DeltaE` digunakan untuk menentukan interval energi yang akan dikalkulasi.

    Untuk menjalankan perhitungan DOS:

    ```bash
    dos.x < input.in > output_dos
    ```

    Hasil perhitungan DOS akan tersimpan pada berkas `contoh.dat`. Berikut contoh hasil perhitungan DOS:

    ```plaintext
    #  E (eV)   dos(E)     Int dos(E) EFermi =   16.109 eV
    -8.904  0.1191E-05  0.1191E-06
    -8.804  0.1020E-04  0.1139E-05
    -8.704  0.6880E-04  0.8019E-05
    -8.604  0.3689E-03  0.4491E-04
    -8.504  0.1589E-02  0.2038E-03
    -8.404  0.5557E-02  0.7595E-03
    -8.304  0.1593E-01  0.2352E-02
    -8.204  0.3774E-01  0.6126E-02
    -8.104  0.7443E-01  0.1357E-01
    -8.004  0.1233E+00  0.2590E-01
    -7.904  0.1742E+00  0.4332E-01
    -7.804  0.2103E+00  0.6527E-01
    -7.704  0.2219E+00  0.9096E-01
    ```

## Plot DOS

Setelah perhitungan DOS selesai, kalian dapat memvisualisasikan hasil perhitungan DOS dengan menggunakan perintah `gnuplot`. Berikut contoh *script* untuk memvisualisasikan DOS:

    ```plaintext
    set terminal pngcairo enhanced font 'Verdana,10'
    set output 'dos.png'
    set title 'Density of States'
    set xlabel 'E (eV)'
    set ylabel 'DOS(E)'
    set xrange [-10:10]
    set yrange [0:2]
    plot 'contoh.dat' u 1:2 w l lw 2 lc rgb 'red' t 'DOS'
    ```

Plot DOS melalui [EspressoIn | Tools](https:link.com) akan segera diperbarui.
