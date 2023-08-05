---
sidebar_position: 2
title: Linux di Windows
---

# Menggunakan Linux di Windows

Cara menggunakan sistem operasi Linux di Windows

---

Mengingat Quantum Espresso dirancang untuk sistem operasi Linux, maka pengguna Windows perlu menggunakan Linux untuk menjalankan Quantum Espresso. (Meskipun terdapat binary Quantum Espresso untuk Windows, namun binary tersebut tidak selalu tersedia untuk versi terbaru Quantum Espresso.) Terdapat beberapa cara untuk menggunakan Linux di Windows, yaitu:

1. Menggunakan **Windows Subsystem for Linux** (WSL)
2. Menggunakan **Virtual Box**

## Menggunakan Windows Subsystem for Linux (WSL)

:::caution Peringatan
Jika kalian menggunakan **Windows 10 versi 1903** (atau lebih lama), maka kalian harus melakukan instalasi wsl secara manual dan dapat dilihat [**di sini**](#instalasi-wsl-secara-manual). Kalian dapat menggunakan Virtual Box sebagai alternatif. Tutorial instalasi Linux dengan Virtual Box dapat dilihat [**di sini**](#menggunakan-virtual-box).

:::

## Instalasi WSL dengan satu perintah

Jika kalian menggunakan **Windows 10 versi 2004** (atau lebih baru) atau **Windows 11**. Maka kalian dapat menginstal WSL dengan mudah. Dengan satu perintah, kalian dapat menginstal WSL dan mendownload distribusi Linux yang kalian inginkan. Untuk menginstal WSL, kalian dapat membuka PowerShell (bukan Command Prompt) dan menjalankan perintah berikut:

```bash
wsl --install
```

Secara default, perintah tersebut akan menginstal distribusi Linux Ubuntu. Jika kalian ingin menginstal distribusi Linux lain, kalian dapat menjalankan perintah berikut:

```bash
# Untuk melihat daftar distribusi Linux yang tersedia
wsl --list --online 
# Untuk menginstal distribusi Linux yang kalian inginkan
wsl --install -d <distribusi linux>
```

## Instalasi WSL secara manual

:::caution Peringatan

Instalasi WSL secara manual hanya perlu dilakukan jika kalian menggunakan **Windows 10 versi 1903** (atau lebih lama). Jika kalian menggunakan **Windows 10 versi 2004** (atau lebih baru) atau **Windows 11**, kalian dapat menginstal WSL dengan mudah. Tutorial instalasi WSL dapat dilihat [**di sini**](#menggunakan-windows-subsystem-for-linux-wsl).

:::

### Mengaktifkan WSL

Sebelum menginstal distribusi Linux, kalian perlu mengaktifkan WSL terlebih dahulu. Untuk mengaktifkan WSL, kalian dapat membuka PowerShell (bukan Command Prompt) dan menjalankan perintah berikut (kalian perlu menjalankan PowerShell sebagai administrator):

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

### Mengaktifkan fitur Virtual Machine

Untuk mengaktifkan fitur Virtual Machine, kalian dapat membuka PowerShell (bukan Command Prompt) dan menjalankan perintah berikut (kalian perlu menjalankan PowerShell sebagai administrator):

```bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

### Mengunduh dan menginstal paket WSL 2 Linux Kernel

1. Unduh paket WSL 2 Linux Kernel [**di sini**](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi).
2. Instal paket tersebut.

Setelah instalasi selesai, kalian perlu mengatur WSL 2 sebagai versi default. Untuk mengatur WSL 2 sebagai versi default, kalian dapat membuka PowerShell (bukan Command Prompt) dan menjalankan perintah berikut (kalian perlu menjalankan PowerShell sebagai administrator):

```bash
wsl --set-default-version 2
```

### Mengunduh dan menginstal distribusi Linux

Kalian dapat mengunduh distribusi Linux yang kalian inginkan [**di sini**](https://docs.microsoft.com/en-us/windows/wsl/install-manual#downloading-distributions).

## Menggunakan Virtual Box

Untuk menginstal Linux menggunakan Virtual Box, kalian dapat mengikuti tutorial [**di sini**](https://www.youtube.com/watch?v=QbmRXJJKsvs). Atau kalian dapat mengikuti tutorial berikut:

### Mengunduh dan Menginstall Virtual Box

Kalian dapat mengunduh Virtual Box [**di sini**](https://www.virtualbox.org/wiki/Downloads). Silahkan pilih sesuai dengan sistem operasi kalian. Setelah mengunduh Virtual Box, kalian dapat menginstalnya seperti biasa.

### Mengunduh ISO Linux

Kalian dapat mengunduh ISO Linux [**di sini**](https://ubuntu.com/download/desktop). Linux dalam tutorial ini merupakan distribusi Ubuntu, jika kalian ingin menggunakan distribusi Linux lainnya kalian dapat mengunduh pada link official masing-masing distribusi. Setelah mengunduh ISO Linux, kalian dapat melanjutkan ke tahap berikutnya.

### Membuat Virtual Machine

1. Buka Virtual Box. Klik tombol **New** untuk membuat Virtual Machine baru. Beri nama Virtual Machine kalian, misalnya **Ubuntu**. Pilih **Linux** sebagai **Type** dan **Ubuntu (64-bit)** sebagai **Version**. Klik **Next**.
2. Pilih **Memory size** sebesar 2 GB (lebih besar lebih baik). Klik **Next**.
3. Pilih **Create a virtual hard disk now**. Klik **Create**. Pilih **VDI (VirtualBox Disk Image)**. Klik **Next**. Pilih **Dynamically allocated**. Klik **Next**. Pilih **File location and size** sebesar 20 GB (lebih besar lebih baik). Klik **Create**.
4. Klik kanan Virtual Machine yang telah kalian buat. Pilih **Settings**. Pilih **Storage**. Klik **Empty**. Klik **Choose Virtual Optical Disk File**. Pilih ISO Linux yang telah kalian unduh. Klik **Open**. Klik **OK**.
5. Klik **Start** untuk menjalankan Virtual Machine. Tunggu hingga proses instalasi selesai. Silahkah ikuti instruksi yang muncul pada layar untuk konfigurasi awal, seperti username, password, dan lain-lain.