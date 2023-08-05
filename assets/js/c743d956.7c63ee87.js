"use strict";(self.webpackChunkespressoin=self.webpackChunkespressoin||[]).push([[6530],{3905:(n,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>m});var t=e(7294);function r(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}function i(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,t)}return e}function l(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){r(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}function s(n,a){if(null==n)return{};var e,t,r=function(n,a){if(null==n)return{};var e,t,r={},i=Object.keys(n);for(t=0;t<i.length;t++)e=i[t],a.indexOf(e)>=0||(r[e]=n[e]);return r}(n,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)e=i[t],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var o=t.createContext({}),u=function(n){var a=t.useContext(o),e=a;return n&&(e="function"==typeof n?n(a):l(l({},a),n)),e},p=function(n){var a=u(n.components);return t.createElement(o.Provider,{value:a},n.children)},c="mdxType",k={inlineCode:"code",wrapper:function(n){var a=n.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(n,a){var e=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),c=u(e),d=r,m=c["".concat(o,".").concat(d)]||c[d]||k[d]||i;return e?t.createElement(m,l(l({ref:a},p),{},{components:e})):t.createElement(m,l({ref:a},p))}));function m(n,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof n||r){var i=e.length,l=new Array(i);l[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=n,s[c]="string"==typeof n?n:r,l[1]=s;for(var u=2;u<i;u++)l[u]=e[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,e)}d.displayName="MDXCreateElement"},8120:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=e(7462),r=(e(7294),e(3905));const i={sidebar_position:1,title:"Carbon"},l="Contoh Kalkulasi Quantum ESPRESSO untuk Karbon",s={unversionedId:"kalkulasi/contoh/carbon",id:"kalkulasi/contoh/carbon",title:"Carbon",description:"Berikut ini merupakan contoh kalkulasi Quantum ESPRESSO untuk karbon. Kalkulasi ini akan menghasilkan struktur pita energi dan DOS untuk karbon. Struktur Kristal Karbon dalam contoh ini diperoleh dari Materials Project.",source:"@site/docs/kalkulasi/contoh/carbon.md",sourceDirName:"kalkulasi/contoh",slug:"/kalkulasi/contoh/carbon",permalink:"/espressoin/kalkulasi/contoh/carbon",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Carbon"},sidebar:"tutorialSidebar",previous:{title:"Contoh",permalink:"/espressoin/category/contoh"}},o={},u=[{value:"Relaksasi Struktur (VC-Relax)",id:"relaksasi-struktur-vc-relax",level:2},{value:"Self-Consistent Field (SCF)",id:"self-consistent-field-scf",level:2},{value:"Kalkulasi Bands",id:"kalkulasi-bands",level:2},{value:"Post-processing Kalkulasi Bands",id:"post-processing-kalkulasi-bands",level:2},{value:"Visualisasi Band Structure",id:"visualisasi-band-structure",level:2}],p={toc:u},c="wrapper";function k(n){let{components:a,...i}=n;return(0,r.kt)(c,(0,t.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contoh-kalkulasi-quantum-espresso-untuk-karbon"},"Contoh Kalkulasi Quantum ESPRESSO untuk Karbon"),(0,r.kt)("p",null,"Berikut ini merupakan contoh kalkulasi Quantum ESPRESSO untuk karbon. Kalkulasi ini akan menghasilkan struktur pita energi dan DOS untuk karbon. Struktur Kristal Karbon dalam contoh ini diperoleh dari ",(0,r.kt)("a",{parentName:"p",href:"https://next-gen.materialsproject.org/materials/mp-66/"},"Materials Project"),"."),(0,r.kt)("h2",{id:"relaksasi-struktur-vc-relax"},"Relaksasi Struktur (VC-Relax)"),(0,r.kt)("p",null,"Langkah pertama adalah mengoptimalkan struktur kristal untuk mendapatkan posisi atom dan parameter kisi dalam keadaan keseimbangan. Langkah ini penting untuk memastikan sistem berada dalam konfigurasi energi terendah.\nBerikut contoh sederhana ",(0,r.kt)("em",{parentName:"p"},"input file")," (",(0,r.kt)("inlineCode",{parentName:"p"},"carbon_vcr.in"),") untuk relaksasi struktur:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```plaintext\n     &CONTROL\n        calculation   = "vc-relax"\n        forc_conv_thr =  1.00000e-03\n        max_seconds   =  1.72800e+05\n        prefix        = "carbon"\n        pseudo_dir    = "./pseudo"\n        outdir        = "./carbon/vc-relax"\n    /\n\n    &SYSTEM\n        a           =  3.56075e+00\n        degauss     =  1.00000e-02\n        ecutrho     =  2.50000e+02\n        ecutwfc     =  2.50000e+01\n        ibrav       = 1\n        nat         = 8\n        ntyp        = 1\n        occupations = "smearing"\n        smearing    = "gaussian"\n    /\n\n    &ELECTRONS\n        conv_thr         =  1.00000e-12\n        electron_maxstep = 200\n        mixing_beta      =  7.00000e-01\n        startingpot      = "atomic"\n        startingwfc      = "atomic+random"\n    /\n\n    &IONS\n        ion_dynamics = "bfgs"\n    /\n\n    &CELL\n        cell_dynamics = "bfgs"\n        cell_dofree   = "ibrav"\n    /\n\n    K_POINTS {automatic}\n    8  8  8  0 0 0\n\n    ATOMIC_SPECIES\n    C      12.01070  C.pbe-rrkjus.UPF\n\n    ATOMIC_POSITIONS {angstrom}\n    C       0.000000   0.000000   1.780373\n    C       0.890186   0.890186   2.670559\n    C       0.000000   1.780373   0.000000\n    C       0.890186   2.670559   0.890186\n    C       1.780373   0.000000   0.000000\n    C       2.670559   0.890186   0.890186\n    C       1.780373   1.780373   1.780373\n    C       2.670559   2.670559   2.670559    \n```\n')),(0,r.kt)("p",null,"Kalkulasi ini dapat dijalankan dengan perintah berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```bash\npw.x < carbon_vcr.in > carbon_vcr.out\n```\n")),(0,r.kt)("p",null,"Setelah kalkulasi selesai, kita dapat melihat hasilnya dengan perintah berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```bash\ncat carbon_vcr.out\n```\n")),(0,r.kt)("p",null,"Kemudian cari informasi berikut ini"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```plaintext\n     Final enthalpy           =     -91.0731394025 Ry\n    Begin final coordinates\n    new unit-cell volume =    304.23675 a.u.^3 (    45.08324 Ang^3 )\n    density =      3.53910 g/cm^3\n\n    CELL_PARAMETERS (alat=  6.72884230)\n    0.999532400   0.000000000   0.000000000\n    0.000000000   0.999532400   0.000000000\n    0.000000000   0.000000000   0.999532400\n\n    ATOMIC_POSITIONS (angstrom)\n    C             0.0000000000        0.0000000000        1.7795404980\n    C             0.8897692060        0.8897692060        2.6693107905\n    C             0.0000000000        1.7795404980        0.0000000000\n    C             0.8897692060        2.6693107905        0.8897692060\n    C             1.7795404980        0.0000000000        0.0000000000\n    C             2.6693107905        0.8897692060        0.8897692060\n    C             1.7795404980        1.7795404980        1.7795404980\n    C             2.6693107905        2.6693107905        2.6693107905\n    End final coordinates\n\n```\n")),(0,r.kt)("p",null,"Informasi tersebut merupakan struktur cell dan posisi atom yang sudah direlaksasi. Kita dapat menggunakan informasi tersebut untuk kalkulasi selanjutnya."),(0,r.kt)("h2",{id:"self-consistent-field-scf"},"Self-Consistent Field (SCF)"),(0,r.kt)("p",null,"Dengan menggunakan menggunakan informasi dari kalkulasi sebelumnya, maka input file untuk kalkulasi SCF kali ini sebagai berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```plaintext\n    !SCF\n    &CONTROL  \n    outdir= \"./outdir/carbon_1\"\n    prefix= \"carbon\"\n    calculation= 'scf'\n    pseudo_dir= \"./pseudo\"\n    /\n    &SYSTEM  \n    ibrav=0\n    A=3.56075\n    nat=8\n    ntyp=1\n    ecutwfc=30.0\n    ecutrho=300.0\n    occupations='smearing'\n    degauss=0.02\n    smearing='gaussian'\n    /\n    &ELECTRONS  \n    /\n    ATOMIC_SPECIES  \n    C  12.011  C.pbe-n-kjpaw_psl.1.0.0.UPF\n\n    ATOMIC_POSITIONS (angstrom) \n    C  0.0  0.0  1.779540498  1  1  1\n    C  0.889769206  0.889769206  2.6693107905  1  1  1\n    C  0.0  1.779540498  0.0  1  1  1\n    C  0.889769206  2.6693107905  0.889769206  1  1  1\n    C  1.779540498  0.0  0.0  1  1  1\n    C  2.6693107905  0.889769206  0.889769206  1  1  1\n    C  1.779540498  1.779540498  1.779540498  1  1  1\n    C  2.6693107905  2.6693107905  2.6693107905  1  1  1\n\n    K_POINTS (automatic) \n    8 8 8 0 0 0\n    CELL_PARAMETERS (alat) \n    0.9995324 0.0 0.0\n    0.0 0.9995324 0.0\n    0.0 0.0 0.9995324\n\n```\n")),(0,r.kt)("p",null,"Input file SCF ini menggunakan struktur cell dan posisi atom yang sudah direlaksasi. Kalkulasi ini dapat dijalankan dengan perintah berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```bash\npw.x < carbon_scf.in > carbon_scf.out\n```\n")),(0,r.kt)("p",null,"Dan hasilnya dapat dilihat dengan perintah berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```bash\ncat carbon_scf.out\n```\n")),(0,r.kt)("h2",{id:"kalkulasi-bands"},"Kalkulasi Bands"),(0,r.kt)("p",null,"Berikut ini merupakan contoh input file untuk kalkulasi bands. Untuk memperoleh k path, kalian dapat menggunakan ",(0,r.kt)("a",{parentName:"p",href:"https://www.materialscloud.org/work/tools/seekpath/"},"SeeK-path")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```plaintext\n    !BANDS\n    &CONTROL  \n    outdir= \"/home/mibrohim/qe-module/carbon/outdir/carbon_1\"\n    prefix= \"carbon\"\n    pseudo_dir= \"/home/mibrohim/qe-module/pseudo\"\n    calculation='bands'\n    /\n    &SYSTEM  \n    ibrav=0\n    A=3.56075\n    nat=8\n    ntyp=1\n    ecutwfc=30.0\n    ecutrho=300.0\n    occupations='smearing'\n    degauss=0.02\n    smearing='gaussian'\n    /\n    &ELECTRONS  \n    /\n    ATOMIC_SPECIES  \n    C  12.011  C.pbe-n-kjpaw_psl.1.0.0.UPF\n\n    ATOMIC_POSITIONS (angstrom) \n    C  0.0  0.0  1.779540498  1  1  1\n    C  0.889769206  0.889769206  2.6693107905  1  1  1\n    C  0.0  1.779540498  0.0  1  1  1\n    C  0.889769206  2.6693107905  0.889769206  1  1  1\n    C  1.779540498  0.0  0.0  1  1  1\n    C  2.6693107905  0.889769206  0.889769206  1  1  1\n    C  1.779540498  1.779540498  1.779540498  1  1  1\n    C  2.6693107905  2.6693107905  2.6693107905  1  1  1\n\n    K_POINTS (tpiba_b) \n    309\n    0.0  0.0  0.0  1  !\n    0.0072463768  0.0  0.0072463768  1  !\n    0.0144927536  0.0  0.0144927536  1  !\n    0.0217391304  0.0  0.0217391304  1  !\n    0.0289855072  0.0  0.0289855072  1  !\n    0.0362318841  0.0  0.0362318841  1  !\n    0.0434782609  0.0  0.0434782609  1  !\n    0.0507246377  0.0  0.0507246377  1  !\n    0.0579710145  0.0  0.0579710145  1  !\n    0.0652173913  0.0  0.0652173913  1  !\n    0.0724637681  0.0  0.0724637681  1  !\n    0.0797101449  0.0  0.0797101449  1  !\n    0.0869565217  0.0  0.0869565217  1  !\n    0.0942028986  0.0  0.0942028986  1  !\n    0.1014492754  0.0  0.1014492754  1  !\n    0.1086956522  0.0  0.1086956522  1  !\n    0.115942029  0.0  0.115942029  1  !\n    0.1231884058  0.0  0.1231884058  1  !\n    0.1304347826  0.0  0.1304347826  1  !\n    0.1376811594  0.0  0.1376811594  1  !\n    0.1449275362  0.0  0.1449275362  1  !\n    0.152173913  0.0  0.152173913  1  !\n    0.1594202899  0.0  0.1594202899  1  !\n    0.1666666667  0.0  0.1666666667  1  !\n    0.1739130435  0.0  0.1739130435  1  !\n    0.1811594203  0.0  0.1811594203  1  !\n    0.1884057971  0.0  0.1884057971  1  !\n    0.1956521739  0.0  0.1956521739  1  !\n    0.2028985507  0.0  0.2028985507  1  !\n    0.2101449275  0.0  0.2101449275  1  !\n    0.2173913043  0.0  0.2173913043  1  !\n    0.2246376812  0.0  0.2246376812  1  !\n    0.231884058  0.0  0.231884058  1  !\n    0.2391304348  0.0  0.2391304348  1  !\n    0.2463768116  0.0  0.2463768116  1  !\n    0.2536231884  0.0  0.2536231884  1  !\n    0.2608695652  0.0  0.2608695652  1  !\n    0.268115942  0.0  0.268115942  1  !\n    0.2753623188  0.0  0.2753623188  1  !\n    0.2826086957  0.0  0.2826086957  1  !\n    0.2898550725  0.0  0.2898550725  1  !\n    0.2971014493  0.0  0.2971014493  1  !\n    0.3043478261  0.0  0.3043478261  1  !\n    0.3115942029  0.0  0.3115942029  1  !\n    0.3188405797  0.0  0.3188405797  1  !\n    0.3260869565  0.0  0.3260869565  1  !\n    0.3333333333  0.0  0.3333333333  1  !\n    0.3405797101  0.0  0.3405797101  1  !\n    0.347826087  0.0  0.347826087  1  !\n    0.3550724638  0.0  0.3550724638  1  !\n    0.3623188406  0.0  0.3623188406  1  !\n    0.3695652174  0.0  0.3695652174  1  !\n    0.3768115942  0.0  0.3768115942  1  !\n    0.384057971  0.0  0.384057971  1  !\n    0.3913043478  0.0  0.3913043478  1  !\n    0.3985507246  0.0  0.3985507246  1  !\n    0.4057971014  0.0  0.4057971014  1  !\n    0.4130434783  0.0  0.4130434783  1  !\n    0.4202898551  0.0  0.4202898551  1  !\n    0.4275362319  0.0  0.4275362319  1  !\n    0.4347826087  0.0  0.4347826087  1  !\n    0.4420289855  0.0  0.4420289855  1  !\n    0.4492753623  0.0  0.4492753623  1  !\n    0.4565217391  0.0  0.4565217391  1  !\n    0.4637681159  0.0  0.4637681159  1  !\n    0.4710144928  0.0  0.4710144928  1  !\n    0.4782608696  0.0  0.4782608696  1  !\n    0.4855072464  0.0  0.4855072464  1  !\n    0.4927536232  0.0  0.4927536232  1  !\n    0.5  0.0  0.5  1  !\n    0.5054347826  0.0108695652  0.5054347826  1  !\n    0.5108695652  0.0217391304  0.5108695652  1  !\n    0.5163043478  0.0326086957  0.5163043478  1  !\n    0.5217391304  0.0434782609  0.5217391304  1  !\n    0.527173913  0.0543478261  0.527173913  1  !\n    0.5326086957  0.0652173913  0.5326086957  1  !\n    0.5380434783  0.0760869565  0.5380434783  1  !\n    0.5434782609  0.0869565217  0.5434782609  1  !\n    0.5489130435  0.097826087  0.5489130435  1  !\n    0.5543478261  0.1086956522  0.5543478261  1  !\n    0.5597826087  0.1195652174  0.5597826087  1  !\n    0.5652173913  0.1304347826  0.5652173913  1  !\n    0.5706521739  0.1413043478  0.5706521739  1  !\n    0.5760869565  0.152173913  0.5760869565  1  !\n    0.5815217391  0.1630434783  0.5815217391  1  !\n    0.5869565217  0.1739130435  0.5869565217  1  !\n    0.5923913043  0.1847826087  0.5923913043  1  !\n    0.597826087  0.1956521739  0.597826087  1  !\n    0.6032608696  0.2065217391  0.6032608696  1  !\n    0.6086956522  0.2173913043  0.6086956522  1  !\n    0.6141304348  0.2282608696  0.6141304348  1  !\n    0.6195652174  0.2391304348  0.6195652174  1  !\n    0.625  0.25  0.625  1  !\n    0.375  0.375  0.75  1  !\n    0.3698630137  0.3698630137  0.7397260274  1  !\n    0.3647260274  0.3647260274  0.7294520548  1  !\n    0.3595890411  0.3595890411  0.7191780822  1  !\n    0.3544520548  0.3544520548  0.7089041096  1  !\n    0.3493150685  0.3493150685  0.698630137  1  !\n    0.3441780822  0.3441780822  0.6883561644  1  !\n    0.3390410959  0.3390410959  0.6780821918  1  !\n    0.3339041096  0.3339041096  0.6678082192  1  !\n    0.3287671233  0.3287671233  0.6575342466  1  !\n    0.323630137  0.323630137  0.647260274  1  !\n    0.3184931507  0.3184931507  0.6369863014  1  !\n    0.3133561644  0.3133561644  0.6267123288  1  !\n    0.3082191781  0.3082191781  0.6164383562  1  !\n    0.3030821918  0.3030821918  0.6061643836  1  !\n    0.2979452055  0.2979452055  0.595890411  1  !\n    0.2928082192  0.2928082192  0.5856164384  1  !\n    0.2876712329  0.2876712329  0.5753424658  1  !\n    0.2825342466  0.2825342466  0.5650684932  1  !\n    0.2773972603  0.2773972603  0.5547945205  1  !\n    0.272260274  0.272260274  0.5445205479  1  !\n    0.2671232877  0.2671232877  0.5342465753  1  !\n    0.2619863014  0.2619863014  0.5239726027  1  !\n    0.2568493151  0.2568493151  0.5136986301  1  !\n    0.2517123288  0.2517123288  0.5034246575  1  !\n    0.2465753425  0.2465753425  0.4931506849  1  !\n    0.2414383562  0.2414383562  0.4828767123  1  !\n    0.2363013699  0.2363013699  0.4726027397  1  !\n    0.2311643836  0.2311643836  0.4623287671  1  !\n    0.2260273973  0.2260273973  0.4520547945  1  !\n    0.220890411  0.220890411  0.4417808219  1  !\n    0.2157534247  0.2157534247  0.4315068493  1  !\n    0.2106164384  0.2106164384  0.4212328767  1  !\n    0.2054794521  0.2054794521  0.4109589041  1  !\n    0.2003424658  0.2003424658  0.4006849315  1  !\n    0.1952054795  0.1952054795  0.3904109589  1  !\n    0.1900684932  0.1900684932  0.3801369863  1  !\n    0.1849315068  0.1849315068  0.3698630137  1  !\n    0.1797945205  0.1797945205  0.3595890411  1  !\n    0.1746575342  0.1746575342  0.3493150685  1  !\n    0.1695205479  0.1695205479  0.3390410959  1  !\n    0.1643835616  0.1643835616  0.3287671233  1  !\n    0.1592465753  0.1592465753  0.3184931507  1  !\n    0.154109589  0.154109589  0.3082191781  1  !\n    0.1489726027  0.1489726027  0.2979452055  1  !\n    0.1438356164  0.1438356164  0.2876712329  1  !\n    0.1386986301  0.1386986301  0.2773972603  1  !\n    0.1335616438  0.1335616438  0.2671232877  1  !\n    0.1284246575  0.1284246575  0.2568493151  1  !\n    0.1232876712  0.1232876712  0.2465753425  1  !\n    0.1181506849  0.1181506849  0.2363013699  1  !\n    0.1130136986  0.1130136986  0.2260273973  1  !\n    0.1078767123  0.1078767123  0.2157534247  1  !\n    0.102739726  0.102739726  0.2054794521  1  !\n    0.0976027397  0.0976027397  0.1952054795  1  !\n    0.0924657534  0.0924657534  0.1849315068  1  !\n    0.0873287671  0.0873287671  0.1746575342  1  !\n    0.0821917808  0.0821917808  0.1643835616  1  !\n    0.0770547945  0.0770547945  0.154109589  1  !\n    0.0719178082  0.0719178082  0.1438356164  1  !\n    0.0667808219  0.0667808219  0.1335616438  1  !\n    0.0616438356  0.0616438356  0.1232876712  1  !\n    0.0565068493  0.0565068493  0.1130136986  1  !\n    0.051369863  0.051369863  0.102739726  1  !\n    0.0462328767  0.0462328767  0.0924657534  1  !\n    0.0410958904  0.0410958904  0.0821917808  1  !\n    0.0359589041  0.0359589041  0.0719178082  1  !\n    0.0308219178  0.0308219178  0.0616438356  1  !\n    0.0256849315  0.0256849315  0.051369863  1  !\n    0.0205479452  0.0205479452  0.0410958904  1  !\n    0.0154109589  0.0154109589  0.0308219178  1  !\n    0.0102739726  0.0102739726  0.0205479452  1  !\n    0.0051369863  0.0051369863  0.0102739726  1  !\n    0.0  0.0  0.0  1  !\n    0.0083333333  0.0083333333  0.0083333333  1  !\n    0.0166666667  0.0166666667  0.0166666667  1  !\n    0.025  0.025  0.025  1  !\n    0.0333333333  0.0333333333  0.0333333333  1  !\n    0.0416666667  0.0416666667  0.0416666667  1  !\n    0.05  0.05  0.05  1  !\n    0.0583333333  0.0583333333  0.0583333333  1  !\n    0.0666666667  0.0666666667  0.0666666667  1  !\n    0.075  0.075  0.075  1  !\n    0.0833333333  0.0833333333  0.0833333333  1  !\n    0.0916666667  0.0916666667  0.0916666667  1  !\n    0.1  0.1  0.1  1  !\n    0.1083333333  0.1083333333  0.1083333333  1  !\n    0.1166666667  0.1166666667  0.1166666667  1  !\n    0.125  0.125  0.125  1  !\n    0.1333333333  0.1333333333  0.1333333333  1  !\n    0.1416666667  0.1416666667  0.1416666667  1  !\n    0.15  0.15  0.15  1  !\n    0.1583333333  0.1583333333  0.1583333333  1  !\n    0.1666666667  0.1666666667  0.1666666667  1  !\n    0.175  0.175  0.175  1  !\n    0.1833333333  0.1833333333  0.1833333333  1  !\n    0.1916666667  0.1916666667  0.1916666667  1  !\n    0.2  0.2  0.2  1  !\n    0.2083333333  0.2083333333  0.2083333333  1  !\n    0.2166666667  0.2166666667  0.2166666667  1  !\n    0.225  0.225  0.225  1  !\n    0.2333333333  0.2333333333  0.2333333333  1  !\n    0.2416666667  0.2416666667  0.2416666667  1  !\n    0.25  0.25  0.25  1  !\n    0.2583333333  0.2583333333  0.2583333333  1  !\n    0.2666666667  0.2666666667  0.2666666667  1  !\n    0.275  0.275  0.275  1  !\n    0.2833333333  0.2833333333  0.2833333333  1  !\n    0.2916666667  0.2916666667  0.2916666667  1  !\n    0.3  0.3  0.3  1  !\n    0.3083333333  0.3083333333  0.3083333333  1  !\n    0.3166666667  0.3166666667  0.3166666667  1  !\n    0.325  0.325  0.325  1  !\n    0.3333333333  0.3333333333  0.3333333333  1  !\n    0.3416666667  0.3416666667  0.3416666667  1  !\n    0.35  0.35  0.35  1  !\n    0.3583333333  0.3583333333  0.3583333333  1  !\n    0.3666666667  0.3666666667  0.3666666667  1  !\n    0.375  0.375  0.375  1  !\n    0.3833333333  0.3833333333  0.3833333333  1  !\n    0.3916666667  0.3916666667  0.3916666667  1  !\n    0.4  0.4  0.4  1  !\n    0.4083333333  0.4083333333  0.4083333333  1  !\n    0.4166666667  0.4166666667  0.4166666667  1  !\n    0.425  0.425  0.425  1  !\n    0.4333333333  0.4333333333  0.4333333333  1  !\n    0.4416666667  0.4416666667  0.4416666667  1  !\n    0.45  0.45  0.45  1  !\n    0.4583333333  0.4583333333  0.4583333333  1  !\n    0.4666666667  0.4666666667  0.4666666667  1  !\n    0.475  0.475  0.475  1  !\n    0.4833333333  0.4833333333  0.4833333333  1  !\n    0.4916666667  0.4916666667  0.4916666667  1  !\n    0.5  0.5  0.5  1  !\n    0.5  0.4947916667  0.5052083333  1  !\n    0.5  0.4895833333  0.5104166667  1  !\n    0.5  0.484375  0.515625  1  !\n    0.5  0.4791666667  0.5208333333  1  !\n    0.5  0.4739583333  0.5260416667  1  !\n    0.5  0.46875  0.53125  1  !\n    0.5  0.4635416667  0.5364583333  1  !\n    0.5  0.4583333333  0.5416666667  1  !\n    0.5  0.453125  0.546875  1  !\n    0.5  0.4479166667  0.5520833333  1  !\n    0.5  0.4427083333  0.5572916667  1  !\n    0.5  0.4375  0.5625  1  !\n    0.5  0.4322916667  0.5677083333  1  !\n    0.5  0.4270833333  0.5729166667  1  !\n    0.5  0.421875  0.578125  1  !\n    0.5  0.4166666667  0.5833333333  1  !\n    0.5  0.4114583333  0.5885416667  1  !\n    0.5  0.40625  0.59375  1  !\n    0.5  0.4010416667  0.5989583333  1  !\n    0.5  0.3958333333  0.6041666667  1  !\n    0.5  0.390625  0.609375  1  !\n    0.5  0.3854166667  0.6145833333  1  !\n    0.5  0.3802083333  0.6197916667  1  !\n    0.5  0.375  0.625  1  !\n    0.5  0.3697916667  0.6302083333  1  !\n    0.5  0.3645833333  0.6354166667  1  !\n    0.5  0.359375  0.640625  1  !\n    0.5  0.3541666667  0.6458333333  1  !\n    0.5  0.3489583333  0.6510416667  1  !\n    0.5  0.34375  0.65625  1  !\n    0.5  0.3385416667  0.6614583333  1  !\n    0.5  0.3333333333  0.6666666667  1  !\n    0.5  0.328125  0.671875  1  !\n    0.5  0.3229166667  0.6770833333  1  !\n    0.5  0.3177083333  0.6822916667  1  !\n    0.5  0.3125  0.6875  1  !\n    0.5  0.3072916667  0.6927083333  1  !\n    0.5  0.3020833333  0.6979166667  1  !\n    0.5  0.296875  0.703125  1  !\n    0.5  0.2916666667  0.7083333333  1  !\n    0.5  0.2864583333  0.7135416667  1  !\n    0.5  0.28125  0.71875  1  !\n    0.5  0.2760416667  0.7239583333  1  !\n    0.5  0.2708333333  0.7291666667  1  !\n    0.5  0.265625  0.734375  1  !\n    0.5  0.2604166667  0.7395833333  1  !\n    0.5  0.2552083333  0.7447916667  1  !\n    0.5  0.25  0.75  1  !\n    0.5  0.2426470588  0.7426470588  1  !\n    0.5  0.2352941176  0.7352941176  1  !\n    0.5  0.2279411765  0.7279411765  1  !\n    0.5  0.2205882353  0.7205882353  1  !\n    0.5  0.2132352941  0.7132352941  1  !\n    0.5  0.2058823529  0.7058823529  1  !\n    0.5  0.1985294118  0.6985294118  1  !\n    0.5  0.1911764706  0.6911764706  1  !\n    0.5  0.1838235294  0.6838235294  1  !\n    0.5  0.1764705882  0.6764705882  1  !\n    0.5  0.1691176471  0.6691176471  1  !\n    0.5  0.1617647059  0.6617647059  1  !\n    0.5  0.1544117647  0.6544117647  1  !\n    0.5  0.1470588235  0.6470588235  1  !\n    0.5  0.1397058824  0.6397058824  1  !\n    0.5  0.1323529412  0.6323529412  1  !\n    0.5  0.125  0.625  1  !\n    0.5  0.1176470588  0.6176470588  1  !\n    0.5  0.1102941176  0.6102941176  1  !\n    0.5  0.1029411765  0.6029411765  1  !\n    0.5  0.0955882353  0.5955882353  1  !\n    0.5  0.0882352941  0.5882352941  1  !\n    0.5  0.0808823529  0.5808823529  1  !\n    0.5  0.0735294118  0.5735294118  1  !\n    0.5  0.0661764706  0.5661764706  1  !\n    0.5  0.0588235294  0.5588235294  1  !\n    0.5  0.0514705882  0.5514705882  1  !\n    0.5  0.0441176471  0.5441176471  1  !\n    0.5  0.0367647059  0.5367647059  1  !\n    0.5  0.0294117647  0.5294117647  1  !\n    0.5  0.0220588235  0.5220588235  1  !\n    0.5  0.0147058824  0.5147058824  1  !\n    0.5  0.0073529412  0.5073529412  1  !\n    0.5  0.0  0.5  1  !\n\n    CELL_PARAMETERS (alat) \n    0.9995324 0.0 0.0\n    0.0 0.9995324 0.0\n    0.0 0.0 0.9995324\n```\n")),(0,r.kt)("p",null,"Kalkulasi ini dapat dijalankan dengan perintah berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```bash\npw.x < carbon_bands.in > carbon_bands.out\n```\n")),(0,r.kt)("h2",{id:"post-processing-kalkulasi-bands"},"Post-processing Kalkulasi Bands"),(0,r.kt)("p",null,"Tahap ini dilakukan agar file output yang dihasilkan dapat dibaca oleh program visualisasi band structure.\nBerikut ini merupakan contoh input file untuk post-processing kalkulasi bands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```plaintext\n    !BANDSPP\n    &BANDS  \n    outdir= \"./outdir/carbon_1\"\n    filband='bands.out'\n/\n```\n")),(0,r.kt)("p",null,"Kalkulasi ini dapat dijalankan dengan perintah berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```bash\nbands.x < carbon_bandspp.in > carbon_bandspp.out\n```\n")),(0,r.kt)("h2",{id:"visualisasi-band-structure"},"Visualisasi Band Structure"),(0,r.kt)("p",null,"Kalian dapat plot file bands.out.gnu dengan Web App ",(0,r.kt)("a",{parentName:"p",href:"https://espresoin-tools.streamlit.app/"},"EspressoIn | Tools"),"."),(0,r.kt)("p",null,"Berikut ini merupakan contoh plot band structure dari kalkulasi bands:\n",(0,r.kt)("img",{alt:"carbon_bands",src:e(3514).Z,width:"2400",height:"1800"})))}k.isMDXComponent=!0},3514:(n,a,e)=>{e.d(a,{Z:()=>t});const t=e.p+"assets/images/carbon_bands_calc-9e4042b556728dc7886ee9662f22afca.png"}}]);