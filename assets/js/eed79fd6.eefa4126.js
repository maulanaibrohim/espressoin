"use strict";(self.webpackChunkespressoin=self.webpackChunkespressoin||[]).push([[5193],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>c});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),o=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=o(e.components);return t.createElement(u.Provider,{value:n},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=o(a),m=r,c=k["".concat(u,".").concat(m)]||k[m]||d[m]||i;return a?t.createElement(c,s(s({ref:n},p),{},{components:a})):t.createElement(c,s({ref:n},p))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[k]="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8704:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=a(7462),r=(a(7294),a(3905));const i={sidebar_position:5,title:"Density of States"},s=void 0,l={unversionedId:"kalkulasi/dos",id:"kalkulasi/dos",title:"Density of States",description:"Apa itu Density of States (DOS)?",source:"@site/docs/kalkulasi/dos.md",sourceDirName:"kalkulasi",slug:"/kalkulasi/dos",permalink:"/espressoin/kalkulasi/dos",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Density of States"},sidebar:"tutorialSidebar",previous:{title:"Struktur Pita Energi",permalink:"/espressoin/kalkulasi/band"},next:{title:"Contoh",permalink:"/espressoin/category/contoh"}},u={},o=[{value:"Apa itu Density of States (DOS)?",id:"apa-itu-density-of-states-dos",level:2},{value:"Kalkulasi DOS dengan Quantum Espresso",id:"kalkulasi-dos-dengan-quantum-espresso",level:2},{value:"1. Relaksasi struktur (jika belum dilakukan)",id:"1-relaksasi-struktur-jika-belum-dilakukan",level:3},{value:"2. Perhitungan SCF",id:"2-perhitungan-scf",level:3},{value:"3. Perhitungan NSCF",id:"3-perhitungan-nscf",level:3},{value:"4. Perhitungan DOS",id:"4-perhitungan-dos",level:3},{value:"Plot DOS",id:"plot-dos",level:2}],p={toc:o},k="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(k,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"apa-itu-density-of-states-dos"},"Apa itu Density of States (DOS)?"),(0,r.kt)("p",null,"Density of States (DOS) adalah konsep fundamental dalam fisika materi terkondensasi dan ilmu material. DOS memberikan informasi berharga tentang distribusi keadaan elektronik dalam suatu material dengan memperhatikan tingkat energi mereka. Dengan kata lain, DOS memberitahu kita berapa banyak keadaan elektronik yang tersedia pada berbagai tingkat energi dalam struktur pita energi material."),(0,r.kt)("h2",{id:"kalkulasi-dos-dengan-quantum-espresso"},"Kalkulasi DOS dengan Quantum Espresso"),(0,r.kt)("p",null,"Dalam Quantum ESPRESSO, DOS dihitung berdasarkan informasi struktur elektronik yang diperoleh dari perhitungan self-consistent field (SCF). Sama seperti perhitungan struktur pita energi, perhitungan DOS juga memerlukan beberapa tahapan. Tahapan-tahapan tersebut adalah sebagai berikut:"),(0,r.kt)("h3",{id:"1-relaksasi-struktur-jika-belum-dilakukan"},"1. Relaksasi struktur (jika belum dilakukan)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Sama seperti perhitungan struktur pita energi\n")),(0,r.kt)("h3",{id:"2-perhitungan-scf"},"2. Perhitungan SCF"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Sama seperti perhitungan struktur pita energi\n")),(0,r.kt)("h3",{id:"3-perhitungan-nscf"},"3. Perhitungan NSCF"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Dalam perhitungan nscf kalian hanya perlu menggubah parameter `calculation` pada namelist `&control` menjadi `nscf`. Berikut contoh *input file* (`nscf.in`) untuk perhitungan NSCF:\n\n```plaintext\n&control\n    calculation = 'nscf'\n    prefix = 'contoh'\n    outdir = './'\n    pseudo_dir = '/lokasi/file/pseudopotensial'\n/\n```\n")),(0,r.kt)("h3",{id:"4-perhitungan-dos"},"4. Perhitungan DOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Setelah perhitungan NSCF selesai, kalian dapat menghitung DOS dengan menambahkan namelist `&DOS` pada *input file* kalian. Berikut contoh *input file* (`dos.in`) untuk perhitungan DOS:\n\n```plaintext\n&DOS\n    prefix = 'contoh'\n    outdir = './'\n    fildos = 'contoh.dat'\n    Emin = -10.0\n    Emax = 10.0\n    DeltaE = 0.01\n/\n```\n\nParameter `fildos` digunakan untuk menentukan nama berkas keluaran yang berisi informasi DOS. Parameter `Emin` dan `Emax` digunakan untuk menentukan batas bawah dan atas energi yang akan dikalkulasi. Parameter `DeltaE` digunakan untuk menentukan interval energi yang akan dikalkulasi.\n\nUntuk menjalankan perhitungan DOS:\n\n```bash\ndos.x < input.in > output_dos\n```\n\nHasil perhitungan DOS akan tersimpan pada berkas `contoh.dat`. Berikut contoh hasil perhitungan DOS:\n\n```plaintext\n#  E (eV)   dos(E)     Int dos(E) EFermi =   16.109 eV\n-8.904  0.1191E-05  0.1191E-06\n-8.804  0.1020E-04  0.1139E-05\n-8.704  0.6880E-04  0.8019E-05\n-8.604  0.3689E-03  0.4491E-04\n-8.504  0.1589E-02  0.2038E-03\n-8.404  0.5557E-02  0.7595E-03\n-8.304  0.1593E-01  0.2352E-02\n-8.204  0.3774E-01  0.6126E-02\n-8.104  0.7443E-01  0.1357E-01\n-8.004  0.1233E+00  0.2590E-01\n-7.904  0.1742E+00  0.4332E-01\n-7.804  0.2103E+00  0.6527E-01\n-7.704  0.2219E+00  0.9096E-01\n```\n")),(0,r.kt)("h2",{id:"plot-dos"},"Plot DOS"),(0,r.kt)("p",null,"Setelah perhitungan DOS selesai, kalian dapat memvisualisasikan hasil perhitungan DOS dengan menggunakan perintah ",(0,r.kt)("inlineCode",{parentName:"p"},"gnuplot"),". Berikut contoh ",(0,r.kt)("em",{parentName:"p"},"script")," untuk memvisualisasikan DOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```plaintext\nset terminal pngcairo enhanced font 'Verdana,10'\nset output 'dos.png'\nset title 'Density of States'\nset xlabel 'E (eV)'\nset ylabel 'DOS(E)'\nset xrange [-10:10]\nset yrange [0:2]\nplot 'contoh.dat' u 1:2 w l lw 2 lc rgb 'red' t 'DOS'\n```\n")),(0,r.kt)("p",null,"Plot DOS melalui ",(0,r.kt)("a",{parentName:"p",href:"https:link.com"},"EspressoIn | Tools")," akan segera diperbarui."))}d.isMDXComponent=!0}}]);