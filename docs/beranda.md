---
sidebar_position: 1
title: Beranda
---

# Kalkulasi Density Functional Theory dengan Quantum Espresso

Dalam tutorial ini, kita akan mempelajari bagaimana cara melakukan kalkulasi **Density Functional Theory** (DFT) dengan menggunakan program **Quantum Espresso** (QE). Tutorial ini merupakan catatan penulis ketika mempelajari DFT dan QE untuk **tugas akhir**. Penulis bukanlah ahli dalam bidang ini, sehingga segala masukan dan saran untuk memperbaiki dan meningkatkan kualitas segala konten dari tutorial ini sangat penulis harapkan.

Seluruh file yang digunakan dalam tutorial ini dapat diakses di [GitHub](https://github.com/maulanaibrohim/espressoin).
Jika repository ini diperlukan secara lokal, kalian dapat melakukan *clone repository* dengan perintah berikut:

```bash
git clone https://github.com/maulanaibrohim/espressoin.git
```

## Direktori

Seluruh input file QE dapat ditemukan dalam folder `sumber/input`. Sedangkan output file QE dapat ditemukan dalam folder `sumber/output`. Untuk script *post-processing data* termasuk python maupun jupyter notebook dapat ditemukan dalam folder `sumber/post`.

## Format penamaan file

Untuk mempermudah dalam mengidentifikasi file, penulis menggunakan format penamaan file sebagai berikut:

```plaintext
<nama material>_<jenis kalkulasi>.<format file>
```
