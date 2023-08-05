---
sidebar_position: 2
title: Uji Konvergensi
---

# Uji Konvergensi untuk ecutwfc dan kpoints dalam Quantum ESPRESSO

## Apa itu Uji Konvergensi?

Uji konvergensi merupakan langkah penting dalam perhitungan struktur elektronik, seperti yang dilakukan dengan Quantum ESPRESSO, untuk memastikan akurasi dan keandalan hasil. Ini melibatkan variasi sistematis pada parameter-parameter kunci dalam perhitungan hingga mencapai tingkat konvergensi yang diinginkan. Dalam Quantum ESPRESSO, dua parameter penting yang memerlukan uji konvergensi adalah ecutwfc (energi cutoff gelombang datar) dan kpoints (jumlah dan distribusi k-point dalam zona Brillouin).

## Uji Konvergensi untuk ecutwfc

ecutwfc adalah parameter yang menentukan cutoff energi untuk fungsi gelombang dalam basis set gelombang datar. Untuk melakukan uji konvergensi untuk ecutwfc, biasanya Anda akan memulai dengan nilai rendah dan secara bertahap meningkatkannya hingga energi total dan properti lain yang diminati stabil dalam toleransi yang diinginkan.

## Uji Konvergensi untuk kpoints

kpoints merujuk pada diskritisasi zona Brillouin dalam ruang reciprokal. Penting untuk menentukan jumlah dan distribusi k-point yang sesuai untuk mendapatkan representasi struktur elektronik yang akurat. Uji konvergensi untuk kpoints melibatkan pengujian grid dan spacing yang berbeda untuk memastikan bahwa hasil menjadi independen dari sampling k-point.

## Menggunakan PWTK untuk Uji Konvergensi

PWTK (Plane-Wave ToolKit) adalah utilitas yang dapat mengotomasi uji konvergensi menggunakan Quantum Espresso. Untuk menggunakan PWTK dalam uji konvergensi ecutwfc dan kpoints, ikuti langkah-langkah di bawah ini:

### Instalasi PWTK

Sebelum menggunakan PWTK, Anda harus menginstalnya terlebih dahulu. Untuk melakukan ini, ikuti langkah-langkah di bawah ini:

1. Pastikan menginstal dependensi yang diperlukan, yaitu tcl dan tcllib. Untuk Ubuntu, Anda dapat menginstalnya dengan perintah berikut:

    ```bash
    sudo apt install tcl tcllib
    ```

2. Unduh PWTK dari [sini](http://pwtk.ijs.si/download/pwtk-2.0.tar.gz) atau dapat juga menggunakan wget melalui terminal:

    ```bash
    wget http://pwtk.ijs.si/download/pwtk-2.0.tar.gz
    ```

3. Ekstrak file yang diunduh:

    ```bash
    tar -zxvf pwtk-2.0.tar.gz
    ```

4. Tambahkan path ke direktori PWTK ke dalam PATH Anda. Untuk Ubuntu, Anda dapat menambahkan baris berikut ke dalam file .bashrc Anda:

    ```bash
    echo "export PATH=$PATH:/path/to/pwtk-2.0" >> ~/.bashrc
    source ~/.bashrc
    ```

### Uji Konvergensi ecutwfc dengan PWTK

1. Buat direktori untuk uji konvergensi ecutwfc:

    ```bash
    mkdir konvergensi_ecutwfc
    cd konvergensi_ecutwfc
    ```

2. Buat file input Quantum Espresso untuk uji konvergensi ecutwfc (simpan dengan nama scf.in).

3. Buat file input PWTK untuk uji konvergensi ecutwfc. Contoh file input PWTK untuk uji konvergensi ecutwfc dapat dilihat di bawah ini (simpan dengan nama konvergensi_ecutwfc.pwtk):

    ```bash
        # convergence_ecut.pwtk

        # Tentukan rentang nilai cutoff energy
        set ecut_range {25 35 45 55 65 75 85 95 105 115}

        # Buka file data untuk menyimpan nilai cutoff energy dan total energy
        set data_file "konvergensi_ecutwfc.dat"
        set data_output [open $data_file w]
        puts $data_output "# Cutoff Energy (eV)    Total Energy (eV)"

        # Lakukan perulangan untuk setiap nilai cutoff energy
        foreach ecut $ecut_range {
        # Baca isi file input yang sudah ada
        set input_file "scf.in"
        set input_data [open $input_file r]
        set input_contents [read $input_data]
        close $input_data

        # Ubah nilai ecutwfc menggunakan ekspresi reguler
        set modified_input_data [regsub -all {ecutwfc\s*=\s*\d+\.\d+} $input_contents "ecutwfc = $ecut"]

        # Tulis input yang sudah diubah ke file baru untuk setiap iterasi
        set modified_input_file "scf_ecut_$ecut.in"
        set modified_output_data [open $modified_input_file w]
        puts -nonewline $modified_output_data $modified_input_data
        close $modified_output_data

        # Jalankan perhitungan Quantum ESPRESSO
        exec pw.x < $modified_input_file > scf_ecut_$ecut.out

        # Ekstrak total energy dari file output
        set total_energy [exec awk {/^!    total energy/ {print $5}} scf_ecut_$ecut.out]

        # Tambahkan nilai cutoff energy dan total energy ke dalam file data
        puts $data_output "$ecut\t$total_energy"
        }

        # Tutup file data
        close $data_output

        # Akhir dari script
    ```

4. Jalankan PWTK untuk uji konvergensi ecutwfc:

    ```bash
    pwtk konvergensi_ecutwfc.pwtk
    ```

Hasil uji konvergensi ecutwfc akan disimpan dalam file konvergensi_ecutwfc.dat.

### Uji Konvergensi kpoints dengan PWTK

1. Buat direktori untuk uji konvergensi kpoints:

    ```bash
    mkdir konvergensi_kpoints
    cd konvergensi_kpoints
    ```

2. Buat file input Quantum Espresso untuk uji konvergensi kpoints (simpan dengan nama scf.in.

3. Buat file input PWTK untuk uji konvergensi kpoints. Contoh file input PWTK untuk uji konvergensi kpoints dapat dilihat di bawah ini (simpan dengan nama konvergensi_kpoints.pwtk):

    ```bash
    # konvergensi_kpoint.pwtk

    # Tentukan daftar grid k-point yang akan diuji
    set kpoint_grids {1 2 3 4 5}

    # Buka file data untuk menyimpan grid k-point dan total energy
    set data_file "konvergensi_kpoint.dat"
    set data_output [open $data_file w]
    puts $data_output "# Grid K-Point    Total Energy (eV)"

    # Lakukan perulangan untuk setiap grid k-point
    foreach k $kpoint_grids {
        # Baca isi file input yang sudah ada
        set input_file "scf.in"
        load_fromPWI $input_file

        # Ubah nilai k_points
        K_POINTS automatic "$k $k $k 1 1 1"

        # Jalankan perhitungan Quantum ESPRESSO
        set name "scf_kpoints_$k"
        runPW $name.in

        # Ekstrak total energy dari file output
        set Etot [::pwtk::pwo::totene "$name.out"]

        # Tambahkan grid k-point dan total energy ke dalam file data
        puts $data_output "$k\t$Etot"
    }

    # Tutup file data
    close $data_output

    # Akhir dari script

    ```

4. Jalankan PWTK untuk uji konvergensi kpoints:

    ```bash
    pwtk konvergensi_kpoints.pwtk
    ```

Hasil uji konvergensi kpoints akan disimpan dalam file konvergensi_kpoints.dat.

### Plot Hasil Uji Konvergensi ecutwfc dan kpoints

Untuk plot hasil uji konvergensi ecutwfc dan kpoints, kalian dapat menggunakan python. Berikut ini adalah contoh script python untuk plot hasil uji konvergensi ecutwfc dan kpoints:

```python
import matplotlib.pyplot as plt

def plot_convergence(data_file, x_label, y_label):
    # Baca data dari file
    x_values = []
    y_values = []

    with open(data_file, 'r') as file:
        next(file)  # Lewati baris header
        for line in file:
            x, y = line.strip().split()
            x_values.append(float(x))
            y_values.append(float(y))

    # Buat plot
    plt.plot(x_values, y_values, marker='o', linestyle='-')
    plt.xlabel(x_label)
    plt.ylabel(y_label)
    plt.title(f'Convergence of {y_label} with {x_label}')
    plt.grid(True)
    plt.show()

# Plot konvergensi cutoff energi
data_konvergensi_ecutwfc = "konvergensi_ecutwfc.dat"
plot_convergence(data_konvergensi_ecutwfc, "Cutoff Energy (eV)", "Total Energy (eV)")

# Plot Konvergensi kpoints
data_konvergensi_kpoints = "konvergensi_kpoints.dat"
plot_convergence(data_konvergensi_kpoints, "K-Points", "Total Energy (eV)")

```

