---
sidebar_position: 4
title: Struktur Kristal
---

# Struktur Kristal dalam Quantum Espresso

*Referensi dan database struktur kristal*

---

Quantum Espresso adalah sebuah program yang digunakan dalam simulasi material berbasis *Density Functional Theory* (DFT) untuk mempelajari sifat-sifat kristal dan material lainnya. Salah satu aspek penting dari simulasi material adalah memahami struktur kristal dari bahan yang diteliti. Struktur kristal menggambarkan susunan atom-atom dalam suatu materi dan memiliki dampak besar pada sifat-sifatnya.

Dalam Quantum Espresso, informasi struktur diberikan dengan menggunakan nilai `ibrav`, serta nilai `celldm` atau konstanta kisi dan kosinus sudut antar sumbu. Selain itu, Anda juga dapat menggunakan opsi `ibrav=0` dan memberikan vektor kisi (*lattice vectors*) dalam `CELL_PARAMETERS`.

`ibrav` adalah parameter yang menentukan tipe kisi kristal yang digunakan dalam simulasi. Terdapat beberapa nilai `ibrav` yang mewakili tipe kisi tertentu, seperti kisi kubik, ortorombik, monoklinik, dan lain-lain. Setiap tipe kisi memerlukan informasi tambahan, seperti celldm atau lattice constants, dan kosinus sudut antar sumbu.

:::caution Perhatian

Jika Anda menggunakan nilai `ibrav=0`, maka Anda harus memberikan vektor kisi dalam bagian `CELL_PARAMETERS`. Vektor kisi ini menggambarkan panjang dan arah dari sisi-sisi sel kristal dalam tiga dimensi.

:::

Berikut adalah contoh sederhana penggunaan `ibrav=0` dan vektor kisi:

```markdown
**&SYSTEM**
   ibrav = 0
   celldm(1) = 10.0
   celldm(2) = 1.2
   celldm(3) = 0.8
   ...
/

CELL_PARAMETERS (angstrom)
   10.0  0.0   0.0
   0.0   12.0  0.0
   0.0   0.0   8.0
```

Contoh di atas menggunakan `ibrav=0` dan memberikan vektor kisi dalam CELL_PARAMETERS. Nilai `celldm(1)`, `celldm(2)`, dan `celldm(3)` adalah konstanta kisi yang mewakili panjang sisi sel kristal dalam tiga arah sumbu `x`, `y`, dan `z`. Selanjutnya, dalam bagian `CELL_PARAMETERS`, kita memberikan tiga vektor kisi yang menggambarkan arah sisi-sisi sel kristal.

Dengan menggunakan informasi ini, Quantum Espresso dapat memahami struktur kristal yang akan disimulasikan dan menghitung sifat-sifat material berdasarkan konfigurasi atom dalam sel kristal.

Berikut ini merupakan nilai ibrav yang dapat digunakan dalam Quantum Espresso, untuk lebih lengkapnya dapat dilihat pada [dokumentasi Quantum Espresso](https://www.quantum-espresso.org/Doc/INPUT_PW.html#idm140200000326672)

| **ibrav** | **Struktur Kristal**           |                  |
|-----------|-------------------------------|-------------------------------------------|
| 0         | Free                          | Arah sumbu kristal diberikan dalam input `CELL_PARAMETERS`    |
| 1         | Cubic P (sc)                  | v1 = a(1,0,0),  v2 = a(0,1,0),  v3 = a(0,0,1)           |
| 2         | Cubic F (fcc)                 | v1 = (a/2)(-1,0,1),  v2 = (a/2)(0,1,1), v3 = (a/2)(-1,1,0) |
| 3         | Cubic I (bcc)                 | v1 = (a/2)(1,1,1),  v2 = (a/2)(-1,1,1),  v3 = (a/2)(-1,-1,1)|
| -3        | Cubic I (bcc), sumbu lebih simetris | v1 = (a/2)(-1,1,1), v2 = (a/2)(1,-1,1),  v3 = (a/2)(1,1,-1) |
| 4         | Hexagonal dan Trigonal P      | v1 = a(1,0,0),  v2 = a(-1/2,√3/2,0),  v3 = a(0,0,c/a) |
| 5         | Trigonal R, 3fold axis 3   | v1 = a(tₓ,-tᵧ,tz), v2 = a(0,2tᵧ,tz), v3 = a(-tₓ,-tᵧ,tz) |
| -5        | Trigonal R, 3fold axis sumbu <111>      | v1 = a' (u,v,v), v2 = a' (v,u,v), v3 = a' (v,v,u)      |
| 6         | Tetragonal P (st)            | v1 = a(1,0,0),  v2 = a(0,1,0),  v3 = a(0,0,c/a)     |
| 7         | Tetragonal I (bct)           | v1=(a/2)(1,-1,c/a), v2=(a/2)(1,1,c/a), v3=(a/2)(-1,-1,c/a)|
| 8         | Ortorombik P                 | v1 = (a,0,0),  v2 = (0,b,0), v3 = (0,0,c)             |
| 9         | Ortobik basis-centered (bco)| v1 = (a/2, b/2,0),  v2 = (-a/2,b/2,0),  v3 = (0,0,c)|
| -9        | Seperti 9, dengna deskripsi alternatif | v1 = (a/2,-b/2,0),  v2 = (a/2, b/2,0),  v3 = (0,0,c) |
| 91        | Ortobik  one-face base-centered A-type| v1 = (a, 0, 0),  v2 = (0,b/2,-c/2),  v3 = (0,b/2,c/2) |
| 10        | Ortobik *face-centered*       | v1 = (a/2,0,c/2),  v2 = (a/2,b/2,0),  v3 = (0,b/2,c/2)|
| 11        | Ortobik *body-centered*      | v1=(a/2,b/2,c/2),  v2=(-a/2,b/2,c/2),  v3=(-a/2,-b/2,c/2)|
| 12        | Monoklinik P, *unique axis c*   | v1=(a,0,0), v2=(b*cos(γ),b*sin(γ),0),  v3 = (0,0,c)|
| -12       | Monoklinik P, *unique axis c*   | v1 = (a,0,0), v2 = (0,b,0), v3 = (c*cos(β),0,c*sin(β))|
| 13        | Monoklinik *base-centered (unique axis c)*     | v1 = (a/2,0,-c/2), v2 = (b*cos(γ),b*sin(γ),0), v3 = (a/2,0,c/2)|
| -13       | Monoklinik *base-centered (unique axis b)*     | v1 = (a/2,b/2,0), v2 = (-a/2,b/2,0), v3 = (c*cos(β),0,c*sin(β))|
| 14        | Triklinik                    | v1 = (a, 0, 0), v2 = (b*cos(γ), b*sin(γ), 0), v3 = (c*cos(β), c*(cos(α)-cos(β)cos(γ))/sin(γ), c*√(1 + 2*cos(α)cos(β)cos(γ) - cos(α)²-cos(β)²-cos(γ)²)/sin(γ))|

## Format Struktur Kristal

Format file struktur kristal dalam Quantum Espresso umumnya terdiri dari beberapa bagian, di antaranya:

- Kisi Kristal (Crystal lattice): Bagian ini berisi informasi tentang parameter kisi kristal, yaitu panjang sisi sel kristal dan sudut antar-sisi. Parameter ini memungkinkan Quantum Espresso untuk mengatur sel kristal dalam simulasi.

- Tipe Atom dan Koordinat: Bagian ini berisi daftar atom yang ada dalam sel kristal beserta koordinatnya. Setiap atom didefinisikan oleh tipe atom dan posisi koordinatnya dalam sel kristal.

## Database Struktur Kristal

Terdapat beberapa database struktur kristal yang dapat digunakan sebagai referensi atau panduan dalam mempelajari struktur kristal. Beberapa di antaranya adalah:

1. [**Crystallography Open Database (COD)**](http://crystallography.net/cod/)

    COD adalah basis data terbuka yang berisi ribuan struktur kristal yang telah diresolusi dengan baik. Anda dapat mencari dan mengunduh file struktur kristal dari sumber ini untuk digunakan dalam simulasi Quantum Espresso.

2. [**Materials Project**](https://materialsproject.org)

    Materials Project adalah proyek besar yang menyediakan akses ke data komputasi berkualitas tinggi tentang berbagai material. Di situs ini, Anda dapat menemukan struktur kristal, sifat material, dan data lainnya yang relevan untuk digunakan dalam simulasi Quantum Espresso.

3. [**American Mineralogist Crystal Structure Database (AMCSD)**](http://rruff.geo.arizona.edu/AMS/amcsd.php)

    AMCSD adalah basis data yang berisi informasi tentang struktur kristal mineral. Basis data ini mencakup ribuan struktur kristal mineral yang telah dikarakterisasi dengan baik. Anda dapat mencari dan mengunduh data struktur kristal dari sumber ini untuk tujuan penelitian dan simulasi.

4. [**The Cambridge Structural Database (CSD)**](https://www.ccdc.cam.ac.uk/solutions/csd-system/components/csd/)

    CSD adalah basis data yang berisi struktur kristal molekul organik dan anorganik. Basis data ini mencakup sejumlah besar struktur kristal yang berasal dari penelitian kristalografi sinar-X. Dengan akses ke CSD, Anda dapat mempelajari lebih lanjut tentang struktur molekul dan sifat kristalnya.

5. [**International Tables for Crystallography**](https://www.iucr.org/cgi-bin/iucrsearch)

    International Tables for Crystallography adalah serangkaian buku referensi yang diakui secara internasional dalam kristalografi. Buku-buku ini berisi informasi mendalam tentang simetri kristal, grup ruang, teori kristal, dan teknik analisis kristal.

6. [**International Union of Crystallography (IUCr)**](https://www.iucr.org/)

    Situs web IUCr adalah sumber daya utama untuk informasi terkini tentang kristalografi. Di sini, Anda dapat menemukan publikasi, jurnal, dan berita terkait kristalografi yang membahas berbagai aspek tentang struktur kristal.

7. [**Materials Platform for Data Science (MPDS)**](https://mpds.io/)

    MPDS menyediakan akses ke data kristalografi dan sifat material yang komprehensif. Anda dapat mencari informasi tentang struktur kristal, sifat mekanik, termal, optik, dan lainnya dari berbagai material yang terdaftar dalam basis datanya.

8. [**Crystallographic Database (CrystDB)**](http://crystdb.nims.go.jp/crystdb/search-materials)

    CrystDB adalah basis data kristalografi yang dikelola oleh National Institute for Materials Science, Jepang. Basis data ini menyediakan akses ke informasi struktur kristal dari berbagai material.

9. [**Inorganic Crystal Structure Database (ICSD)**](https://icsd.fiz-karlsruhe.de/index.xhtml)

    ICSD adalah salah satu sumber data terbesar yang berisi struktur kristal material anorganik. Basis data ini mencakup jutaan entri tentang struktur kristal dan dapat digunakan untuk penelitian ilmiah dan studi material.

10. [**AFLOWLIB Crystal Database**](http://aflowlib.org/CrystalDatabase/)

    AFLOWLIB adalah basis data kristal yang berisi informasi tentang struktur kristal yang dihasilkan dari perhitungan teori pertama. Basis data ini dapat membantu dalam pemodelan dan simulasi material berbasis DFT.
