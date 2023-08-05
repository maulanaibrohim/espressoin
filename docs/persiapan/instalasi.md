---
sidebar_position: 1
title: Instalasi
---

# Instalasi Quantum Espresso

Tahapan instalasi Quantum Espresso

---
Quantum Espresso dapat diinstal di berbagai sistem operasi, seperti **Linux**, **Windows**, dan **MacOS**. Namun, Quantum Espresso dirancang untuk sistem operasi **Linux**. Sehingga, untuk pengguna Windows dan MacOS, diperlukan beberapa langkah tambahan untuk menginstal Quantum Espresso. Dalam tutorial ini, akan diasumsikan bahwa pengguna menggunakan sistem operasi **Linux**.

Untuk pengguna **Windows** dapat menggunakan **Windows Subsystem for Linux** maupun **Virtual Box**. Sedangkan untuk pengguna **MacOS** dapat menggunakan **Virtual Box**.

Terdapat beberapa cara untuk install Quantum Espresso, yaitu:

1. Menggunakan `sudo apt`
2. Manual dengan mengunduh file `.tar.gz`

## Instalasi menggunakan `sudo apt`

Instalasi menggunakan `sudo apt` merupakan cara yang paling mudah untuk menginstal Quantum Espresso. Namun, cara ini memiliki kelemahan, yaitu versi Quantum Espresso yang diinstal tidak selalu merupakan versi terbaru. Untuk menginstal Quantum Espresso dengan cara ini, dapat dilakukan dengan perintah berikut:

```bash
sudo apt install quantum-espresso
```

Setelah Quantum Espresso terinstal, dapat dilakukan pengecekan versi Quantum Espresso yang terinstal dengan perintah berikut:

```bash
pw.x --version
```

## Instalasi manual

Instalasi manual merupakan cara yang paling direkomendasikan untuk menginstal Quantum Espresso. Cara ini memungkinkan pengguna untuk menginstal versi terbaru dari Quantum Espresso. Untuk menginstal Quantum Espresso dengan cara ini, dapat dilakukan dengan perintah berikut:

[Download](ttps://www.quantum-espresso.org/rdm-download/488/v7-2/ff57993f1ad4795b5d151ae6d3bd2609/qe-7.2-ReleasePack.tar.gz) file `.tar.gz` dari Quantum Espresso. Pada saat penulisan tutorial ini, versi terbaru dari Quantum Espresso adalah versi 7.2.

```bash
wget -O qe-7.2.tar.gz https://gitlab.com/QEF/q-e/-/archive/qe-7.2/q-e-qe-7.2.tar.gz
```

Setelah file `.tar.gz` terunduh, lakukan ekstraksi file `.tar.gz` dengan perintah berikut:

```bash
tar -zxvf qe-7.2.tar.gz
```

Setelah file berhasil diekstraki, masuk ke dalam folder hasil ekstraksi, kemudian `configure` dengan perintah berikut:

```bash
cd qe-7.2
./configure
```

Setelah `configure` selesai, lakukan `make` dengan perintah berikut:

```bash
# untuk compile seluruh program
make all
# untuk compile program tertentu saja
make [nama_program]
# untuk compile program secara parallel dengan N adalah jumlah core yang digunakan
make [-jN]
```

:::note Catatan

Berikut merupakan daftar program yang dapat di-*compile* dan tersedia di dalam Quantum Espresso:

1. PWscf: optimasi struktural dan dinamika molekul pada keadaan dasar elektronik, dengan solusi self-konsisten dari persamaan DFT;
2. CP: dinamika molekul Car-Parrinello;
3. PHonon: sifat getaran dan dielektrik dari DFPT (Density-Functional Perturbation Theory);
4. TD-DFPT: spektra dari Time-dependent DFPT;
5. HP: perhitungan parameter Hubbard dari DFPT;
6. EPW: perhitungan koefisien elektron-fonon, transport pembawa, superkonduktivitas terbatas fonon, dan proses optik terbantu fonon;
7. PWCOND: transport balistik;
8. XSpectra: perhitungan spektra penyerapan sinar-X;
9. PWneb: jalur reaksi dan keadaan transisi dengan metode Nudged Elastic Band;
10. GWL: teori gangguan many-body dalam pendekatan GW menggunakan fungsi-fungsi Wannier ultra-lokal dan rantai Lanczos;
11. QEHeat: arus energi pada isolator untuk perhitungan transport termal dalam DFT.
12. KCW: fungsional yang sesuai dengan Koopmans dalam representasi Wannier.

:::

Saat ini program Quantum Espresso sudah terinstall di dalam folder `qe-7.2/bin`. Sehingga diperlukan path lengkap untuk menjalan program Quantum Espresso. Untuk mempermudah penggunaan Quantum Espresso, dapat dilakukan dengan menambahkan path Quantum Espresso ke dalam file `.bashrc` dengan perintah berikut:

```bash
# pastikan path sudah benar, kalian bisa gunakan perintah pwd untuk mengecek path
echo 'export PATH="/root/qe-7.2/bin:$PATH"' >> ~/.bashrc

```

Jika sudah, lakukan `source` pada file `.bashrc` atau restart terminal komputer. Data dilakukan dengan membuka ulang terminal atau dengan perintah berikut:

```bash
source ~/.bashrc
```

Untuk mengecek apakah Quantum Espresso sudah terinstall dengan benar, dapat dilakukan dengan perintah berikut:

```bash
# untuk mengecek versi Quantum Espresso
pw.x --version
```

## Menjalankan Quantum Espresso

Untuk menjalankan input file dapat dilakukan dengan perintah berikut:

```bash
# untuk menjalankan input file
pw.x < [nama_file].in > [nama_file].out
```

Perintah tersebut digunakan untuk menjalankan input file dengan nama `[nama_file].in` dan menyimpan outputnya ke dalam file `[nama_file].out`.

## Menjalankan Quantum Espresso secara paralel

Selain itu, kita dapat menjalankan Quantum Espresso secara paralel. Untuk menjalankan Quantum Espresso secara paralel, diperlukan aplikasi tambahan, yaitu `mpirun`. Untuk menginstal `mpirun` dapat dilakukan dengan perintah berikut:

```bash
sudo apt install mpirun
```

Jika sudah, kita dapat menjalankan Quantum Espresso secara paralel dengan perintah berikut:

```bash
# untuk menjalankan input file secara paralel
mpirun -np [jumlah_core] pw.x < [nama_file].in > [nama_file].out
```
