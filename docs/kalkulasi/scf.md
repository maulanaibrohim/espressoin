---
sidebar_position: 1
title: Self-Consistent Field
---

# Kalkulasi Self-Consistent Field

Dalam mekanika kuantum, kalkulasi Self-Consistent Field (SCF) merupakan metode dasar yang digunakan untuk menentukan struktur dan sifat-sifat elektronik material. Quantum ESPRESSO adalah paket perangkat lunak sumber terbuka (*open source*) yang banyak digunakan untuk melakukan perhitungan struktur elektronik berdasarkan teori fungsional kerapatan (DFT).

## Apa itu Perhitungan SCF?

Self-Consistent Field (SCF) adalah dasar dari perhitungan struktur elektronik. Tujuannya adalah menyelesaikan persamaan Kohn-Sham, yang berasal dari DFT dan mewakili masalah satu-elektron yang efektif. Siklus SCF melibatkan iterasi dalam menyelesaikan persamaan ini hingga diperoleh konsistensi sendiri, yaitu kepadatan elektron menjadi konsisten antar iterasi berurutan. Proses ini berlanjut hingga energi total konvergen ke ambang batas yang telah ditentukan, memastikan solusi yang stabil dan akurat untuk struktur elektronik.

## Struktur Contoh File Input

Berikut adalah contoh struktur file input untuk perhitungan SCF menggunakan Quantum ESPRESSO:

```plaintext
&CONTROL
  calculation = 'scf',
  prefix = 'scf_calc',
  pseudo_dir = 'path/to/pseudopotentials',
  outdir = 'path/to/output_directory',
  verbosity = 'low',
  tprnfor = .true.,
  tstress = .true.,
  etot_conv_thr = 1.0e-6,
  forc_conv_thr = 1.0e-4,
/

&SYSTEM
  ibrav = 0,
  nat = 3,
  ntyp = 2,
  ecutwfc = 40.0,
  ecutrho = 160.0,
/

&ELECTRONS
  diagonalization = 'david',
  conv_thr = 1.0e-8,
  mixing_beta = 0.7,
/

ATOMIC_SPECIES
  element1  atomic_mass1  path/to/element1.pbe-rrkjus_psl.1.0.0.UPF
  element2  atomic_mass2  path/to/element2.pbe-rrkjus_psl.1.0.0.UPF

ATOMIC_POSITIONS (angstrom)
  element1  x1  y1  z1
  element1  x2  y2  z2
  element2  x3  y3  z3

K_POINTS automatic
  4 4 4 1 1 1
```

:::info Catatan

Perlu dicatat bahwa ini hanyalah contoh sederhana, dan file input aktual untuk sistem khusus Anda mungkin berbeda.

:::

## Menjalankan Perhitungan SCF

Untuk menjalankan perhitungan SCF, Anda dapat menggunakan perintah berikut:

```bash
pw.x -in scf.in > scf.out
# atau dengan menggunakan parallel
mpirun -np 4 pw.x -in nama_file.in > nama_file.out # untuk 4 core
```

:::info Catatan

Perintah di atas diasumsikan bahwa Anda telah mengatur evironment variabel `PATH` untuk Quantum ESPRESSO. Jika tidak, Anda harus menentukan path lengkap ke `pw.x` saat menjalankan perintah di atas.

:::

## Memahami File Output

Ketika perhitungan SCF selesai, Anda akan mendapatkan file output `scf.out`. File ini berisi informasi tentang perhitungan SCF yang telah dilakukan. Untuk mengetahun informasi total energi, Anda dapat mencari kata kunci `!` di file output. Contoh:

```plaintext
     total energy              =     -10.27376439 Ry
     Harris-Foulkes estimate   =      -9.99999999 Ry
     estimated scf accuracy    <       0.00000001 Ry
     total magnetization       =      -0.00000000 Bohr mag/cell
     absolute magnetization    =       0.00000000 Bohr mag/cell
     cutoff (ecutwfc)          =      40.0000  Ry
     Fermi energy              =       0.0000  Ry
```

atau dapat menggunakan fungsi `grep` pada terminal:

```bash
grep "!" nama_file.out
# atau 
grep "!" nama_file.out | grep "total energy"
```

:::tip Tips Konvergensi SCF

1. Periksa apakah nilai `mixing_beta`, khususnya jika terdapat osilasi pada energi konvergen, dan sesuaikan nilainya jika diperlukan.

2. Periksa apakah kepadatan elektron telah konvergen ke ambang batas yang telah ditentukan. Jika tidak, Anda dapat meningkatkan nilai `conv_thr` pada file input.

3. Periksa apakah nilai `ecutwfc` dan `ecutrho` telah mencukupi. Jika tidak, Anda dapat meningkatkan nilainya pada file input.

4. Psudo-potensial yang digunakan mungkin tidak cocok untuk sistem yang Anda kalkulasi. Anda dapat mencoba pseudo-potensial yang berbeda.

5. Periksa apakah energi total telah konvergen ke ambang batas yang telah ditentukan. Jika tidak, Anda dapat meningkatkan nilai `etot_conv_thr` pada file input.

6. Periksa apakah gaya total telah konvergen ke ambang batas yang telah ditentukan. Jika tidak, Anda dapat meningkatkan nilai `forc_conv_thr` pada file input.
