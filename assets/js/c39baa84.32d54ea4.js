"use strict";(self.webpackChunkespressoin=self.webpackChunkespressoin||[]).push([[9045],{3905:(n,a,t)=>{t.d(a,{Zo:()=>k,kt:()=>c});var e=t(7294);function i(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function r(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,e)}return t}function s(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}function u(n,a){if(null==n)return{};var t,e,i=function(n,a){if(null==n)return{};var t,e,i={},r=Object.keys(n);for(e=0;e<r.length;e++)t=r[e],a.indexOf(t)>=0||(i[t]=n[t]);return i}(n,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(e=0;e<r.length;e++)t=r[e],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var o=e.createContext({}),l=function(n){var a=e.useContext(o),t=a;return n&&(t="function"==typeof n?n(a):s(s({},a),n)),t},k=function(n){var a=l(n.components);return e.createElement(o.Provider,{value:a},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var a=n.children;return e.createElement(e.Fragment,{},a)}},m=e.forwardRef((function(n,a){var t=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,k=u(n,["components","mdxType","originalType","parentName"]),p=l(t),m=i,c=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return t?e.createElement(c,s(s({ref:a},k),{},{components:t})):e.createElement(c,s({ref:a},k))}));function c(n,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof n||i){var r=t.length,s=new Array(r);s[0]=m;var u={};for(var o in a)hasOwnProperty.call(a,o)&&(u[o]=a[o]);u.originalType=n,u[p]="string"==typeof n?n:i,s[1]=u;for(var l=2;l<r;l++)s[l]=t[l];return e.createElement.apply(null,s)}return e.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5258:(n,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var e=t(7462),i=(t(7294),t(3905));const r={sidebar_position:4,title:"Struktur Pita Energi"},s=void 0,u={unversionedId:"kalkulasi/band",id:"kalkulasi/band",title:"Struktur Pita Energi",description:"Terdapat beberapa tahapan dalam proses kalkulasi struktur pita energi menggunkan Quantum Espresso. Tahapan-tahapan tersebut adalah sebagai berikut:",source:"@site/docs/kalkulasi/band.md",sourceDirName:"kalkulasi",slug:"/kalkulasi/band",permalink:"/espressoin/kalkulasi/band",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Struktur Pita Energi"},sidebar:"tutorialSidebar",previous:{title:"Relaksasi Struktur",permalink:"/espressoin/kalkulasi/relax"},next:{title:"Density of States",permalink:"/espressoin/kalkulasi/dos"}},o={},l=[{value:"1. Relaksasi Struktur",id:"1-relaksasi-struktur",level:2},{value:"2. Perhitungan Medan Konsisten (SCF)",id:"2-perhitungan-medan-konsisten-scf",level:2},{value:"3. Perhitungan Struktur Pita",id:"3-perhitungan-struktur-pita",level:2},{value:"4. Pascaproses Struktur Pita",id:"4-pascaproses-struktur-pita",level:2}],k={toc:l},p="wrapper";function d(n){let{components:a,...t}=n;return(0,i.kt)(p,(0,e.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Terdapat beberapa tahapan dalam proses kalkulasi struktur pita energi menggunkan Quantum Espresso. Tahapan-tahapan tersebut adalah sebagai berikut:"),(0,i.kt)("h2",{id:"1-relaksasi-struktur"},"1. Relaksasi Struktur"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Langkah pertama adalah mengoptimalkan struktur kristal untuk mendapatkan posisi atom dan parameter kisi dalam keadaan keseimbangan. Langkah ini penting untuk memastikan sistem berada dalam konfigurasi energi terendah.\n\n*input file* yang diperlukan: kalian akan memerlukan namelist `&control`, `&system`, `&electrons`, dan `&ions` dalam *input file* kalian.\n\nBerikut contoh sederhana *input file* (`relax.in`) untuk relaksasi struktur:\n\n```plaintext\n&control\n    calculation = 'vc-relax'\n    prefix = 'contoh'\n    outdir = './'\n    pseudo_dir = '/lokasi/file/pseudopotensial'\n/\n&system\n    ibrav = 0\n    celldm(1) = 10.0  ! Tebakan awal untuk parameter kisi (sesuaikan jika perlu)\n    nat = 3\n    ntyp = 2\n    ecutwfc = 40.0    ! Pemotongan energi untuk fungsi gelombang (sesuaikan jika perlu)\n/\n&electrons\n    conv_thr = 1.0e-8  ! Ambang konvergensi untuk konsistensi diri elektronik\n/\n&ions\n    ion_dynamics = 'bfgs'  ! Gunakan algoritma BFGS untuk relaksasi\n/\nATOMIC_SPECIES\nUnsur1  MassaAtom1  Lokasi_PP1\nUnsur2  MassaAtom2  Lokasi_PP2\n...\nATOMIC_POSITIONS {angstrom}\nUnsur1  x1  y1  z1\nUnsur2  x2  y2  z2\n...\nK_POINTS {automatic}\nnx  ny  nz  0  0  0   ! nx, ny, nz harus dipilih berdasarkan sistem kalian\n```\n\nUntuk menjalankan perhitungan relaksasi:\n\n```bash\npw.x < input.in > output_relax\n```\n")),(0,i.kt)("h2",{id:"2-perhitungan-medan-konsisten-scf"},"2. Perhitungan Medan Konsisten (SCF)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Setelah struktur direlaksasi, langkah selanjutnya adalah melakukan perhitungan SCF untuk menemukan kerapatan elektron yang konsisten diri.\n\n*input file* yang diperlukan: kalian dapat menggunakan kembali namelist `&control`, `&system`, dan `&electrons` dari langkah relaksasi. kalian mungkin perlu memodifikasi `prefix` di namelist `&control` agar tidak menimpa berkas sebelumnya.\n\nBerikut contoh *input file* (`scf.in`) untuk perhitungan SCF:\n\n```plaintext\n&control\n    calculation = 'scf'\n    prefix = 'contoh_scf'\n    outdir = './'\n    pseudo_dir = '/lokasi/file/pseudopotensial'\n/\n&system\n    ibrav = 0\n    celldm(1) = 10.0  ! Gunakan parameter kisi yang telah dioptimalkan dari relaksasi\n    nat = 3\n    ntyp = 2\n    ecutwfc = 40.0    ! Pemotongan energi untuk fungsi gelombang (sesuaikan jika perlu)\n/\n&electrons\n    conv_thr = 1.0e-8  ! Ambang konvergensi untuk konsistensi diri elektronik\n/\nATOMIC_SPECIES\nUnsur1  MassaAtom1  Lokasi_PP1\nUnsur2  MassaAtom2  Lokasi_PP2\n...\nATOMIC_POSITIONS {angstrom}\nUnsur1  x1  y1  z1 ! Gunakan posisi atom yang telah dioptimalkan dari relaksasi\nUnsur2  x2  y2  z2\n...\nK_POINTS {automatic}\nnx  ny  nz  0  0  0   ! nx, ny, nz harus dipilih berdasarkan sistem kalian\n```\n\nUntuk menjalankan perhitungan SCF:\n\n```bash\npw.x < scf.in > scf.out\n```\n")),(0,i.kt)("h2",{id:"3-perhitungan-struktur-pita"},"3. Perhitungan Struktur Pita"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Setelah mendapatkan kerapatan elektron yang konsisten diri, kalian dapat menghitung struktur pita dari material kalian.\n\n*input file* yang diperlukan: kalian akan memerlukan informasi tambahan dalam *input file* untuk menentukan titik k dan perhitungan struktur pita.\n\nBerikut contoh *input file* (`input_bands.in`) untuk perhitungan struktur pita:\n\n```plaintext\n&control\n    calculation = 'bands'\n    prefix = 'contoh_pita'\n    outdir = './'\n    pseudo_dir = '/lokasi/pseudopotensial'\n/\n&system\n    ibrav = 0\n    celldm(1) = 10.0  ! Gunakan parameter kisi yang telah dioptimalkan dari relaksasi\n    nat = 3\n    ntyp = 2\n    ecutwfc = 40.0    ! Pemotongan energi untuk fungsi gelombang (sesuaikan jika perlu)\n/\n&electrons\n    conv_thr = 1.0e-8  ! Ambang konvergensi untuk konsistensi diri elektronik\n/\nATOMIC_SPECIES\nUnsur1  MassaAtom1  Lokasi_PP1\nUnsur2  MassaAtom2  Lokasi_PP2\n...\nATOMIC_POSITIONS {angstrom}\nUnsur1  x1  y1  z1\nUnsur2  x2  y2  z2\n...\nK_POINTS crystal_b ! Dapat menggunakan Seek K-path Generator untuk menentukan titik k\nnk1  nk2  nk3  0 0 0    ! Tentukan titik k yang kalian inginkan untuk perhitungan struktur pita\nBAND_STRUCTURE \n    number_of_points = npts    ! Gantikan npts dengan jumlah titik simetri tinggi\n    k_points(1,:) = k1_x k1_y k1_z  ! Koordinat titik simetri tinggi 1\n    k_points(2,:) = k2_x k2_y k2_z  ! Koordinat titik simetri tinggi 2\n    ...\n    k_points(npts,:) = kn_x kn_y kn_z  ! Koordinat titik simetri tinggi terakhir\n```\n\nUntuk menjalankan perhitungan struktur pita:\n\n```bash\npw.x < bands.in > bands.out\n```\n[Seek K-path](https://www.materialscloud.org/work/tools/seekpath)\n")),(0,i.kt)("h2",{id:"4-pascaproses-struktur-pita"},"4. Pascaproses Struktur Pita"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Setelah selesai, langkah selanjutnya adalah melakukan post-processing data menggunakan `bands.x` untuk memperoleh data yang lebih mudah dibaca dan divisualisasikan. Berikut contoh *input file* (`bandspp.in`) untuk pascaproses struktur pita:\n\n```plaintext\n&BANDS\n    prefix = 'contoh_pita'\n    outdir = './'\n    filband = 'bands.out'\n```\nUntuk menjalankan pascaproses:\n\n```bash\nbands.x < bandspp.in > bandspp.out\n```\n\nTerdapat beberapa file output yang dihasilkan dari pascaproses ini, diantaranya:\n- Band.dat.gnu berisi struktur pita dalam satuan eV, langsung dapat divisualisasikan dengan mudah karena sudah tersusun dari 2 colom energy dan titik K.\n\n- Band.dat.rap berisi informasi simetri, yang akan dibaca oleh kode plotting plotband.x.\n\n- Band.dat berisi struktur pita dalam format yang sesuai untuk kode plotting plotband.x.bands.out\n\n\nUntuk plot sturktur pita, kalian dapat menggunakan kode plotting `plotband.x` yang telah disediakan oleh Quantum Espresso. Berikut contoh *input file* (`plotband.in`) untuk plotting struktur pita:\n\n```plaintext\n&inputpp\n    prefix = 'contoh_pita'\n    outdir = './'\n    filband = 'bands.out'\n    lsym = .true.\n    filout = 'contoh_pita.png'\n/    \n```\nUntuk menjalankan plotting:\n\n```bash\nplotband.x < plotband.in > plotband.out\n```\n\nAtau kalian dapat dengan mudah mengunggah file `Band.dat.gnu` ke [EspressoIn - Tools](https://espresoin-tools.streamlit.app/) untuk memperoleh plot struktur pita. Buka file scf.out untuk mendapatkan nilai energi fermi dand bandspp.out untuk mendapatkan titik simetri tinggi.\n")))}d.isMDXComponent=!0}}]);