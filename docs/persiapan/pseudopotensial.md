---
sidebar_position: 5
---

# Pseudopotensial

Referensi dan penjelasan mengenai pseudopotensial

---
Pseudopotensial merupakan pendekatan yang umum digunakan dalam simulasi material menggunakan metode kisi periodik seperti yang diimplementasikan dalam Quantum Espresso. Pseudopotensial digunakan untuk menggantikan interaksi Coulomb antara elektron inti dan inti dalam atom dengan interaksi yang lebih sederhana. Tujuannya adalah menghilangkan kontribusi dari elektron inti yang tidak berpartisipasi dalam sifat kimia materi yang sedang diteliti, sehingga dapat mengurangi kompleksitas perhitungan dan waktu komputasi yang dibutuhkan.

## Referensi Pseudopotensial

Kalian dapat mengunduh berbagai jenis pseudopotensial yang tersedia untuk Quantum Espresso dari beberapa sumber berikut:

1. [Quantum Espresso](https://www.quantum-espresso.org/pseudopotentials)
2. [Material Cloud](https://www.materialscloud.org/discover/sssp/table/efficiency)
3. [Quantum Simulation](http://www.quantum-simulation.org/potentials/)
4. [National Nanotechnology Infrastructure Network Computation Project](https://nninc.cnf.cornell.edu)
5. [Department of Physics and Astronomy - Rutgers University](https://www.physics.rutgers.edu/gbrv/)

Pada umumnya sistem penamaan pseudopotensial adalah `[nama elemen].[relativistic (opsional)]-[fungsi pertukaran korelasi]-[koreksi non-linear (opsional)]-[pseudopotential type]`.  
Sebagai contoh, `Si.pbe-n-kjpaw_psl.1.0.0.UPF` merupakan pseudopotensial untuk **silikon** yang menggunakan fungsi pertukaran-korelasi **PBE** dan tipe pseudopotensial **KJPaw**. Pseudopotensial ini dapat digunakan untuk simulasi dengan menggunakan fungsi pertukaran-korelasi PBE dan tipe pseudopotensial KJPaw.

## Tipe Pseudopotensial

Pada Quantum Espresso, terdapat beberapa tipe pseudopotensial yang berbeda yang dapat kalian pilih:

- **ae (all-electron)**: Digunakan untuk memperlakukan semua elektron, termasuk elektron inti, tanpa menggunakan pendekatan pseudopotensial.
- **rrkj (Rappe-Rabe-Kaxiras-Joannopoulos)**: Tipe pseudopotensial norm-conserving yang lebih efisien secara komputasi daripada penggunaan semua elektron.
- **rrkjus (Rappe-Rabe-Kaxiras-Joannopoulos ultrasoft)**: Tipe pseudopotensial ultrasoft yang lebih efisien secara komputasi daripada pseudopotensial norm-conserving.
- **kjpaw (Kresse-Joubert PAW)**: Tipe pseudopotensial projeksi orbital atomik (PAW) yang sering digunakan dalam kode VASP.

Pilihan tipe pseudopotensial tergantung pada kebutuhan dalam komputasi dan hasil yang diinginkan. Pseudopotensial ultrasoft umumnya lebih efisien secara komputasi daripada pseudopotensial norm-conserving, karena memungkinkan penggunaan cutoff energi yang lebih rendah daripada cutoff energi yang digunakan untuk basis fungsi gelombang.

## Fungsi Pertukaran Korelasi

*Exchange correlation functional* adalah bagian dari DFT yang menangani korelasi elektronik dan pertukaran elektronik dalam sistem material. Beberapa fungsi pertukaran korelasi yang umum digunakan dalam Quantum Espresso adalah:

- **pz (Perdew-Zunger)**: Fungsional **LDA** (*Local Density Approximation*) oleh Perdew dan Zunger.
- **pbe (Perdew-Burke-Ernzerhof)**: Fungsional **GGA** (*Generalized Gradient Approximation*) oleh Perdew, Burke, dan Ernzerhof.
- **pbesol (Perdew-Burke-Ernzerhof for solids)**: Fungsional *GGA* yang dioptimalkan untuk material padat (solid) oleh Perdew, Burke, dan Ernzerhof.
- **pw91 (Perdew-Wang 91)**: Fungsional **GGA** yang dipublikasikan oleh Perdew dan Wang pada tahun 1991.
- **blyp (Becke-Lee-Yang-Parr)**: Fungsional **GGA** yang menggabungkan perkiraan pertukaran Becke dengan perkiraan korelasi Lee, Yang, dan Parr.
