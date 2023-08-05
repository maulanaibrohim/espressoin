---
sidebar_position: 3
title: Input File
---

# Input File Quantum Espresso untuk Program PWscf

Dekripsi singkat terkait input file Quantum Espresso

---

Pada bagian ini akan dijelaskan secara singkat mengenai sintaks input file Quantum Espresso untuk program PWscf. Input file ini biasanya diberi nama `input.in` atau `input.pw.in`. 

## Struktur Input File

Format input file Quantum Espresso:
tanda `{}` menandakan pilihan, tanda `[]` menandakan opsional atau bergantung pada sistem yang dihitung atau dikalkulasi.

:::danger PENTING
Perlu diingat bahwa urutan penulisan `Namelist` harus sesuai dengan urutan yang tertera di bawah ini. Jika Urutan `Namelist` tidak sesuai, maka program akan ***error***.

Selain itu, kita dapat menghapus `Namelist` yang tidak digunakan dalam kalkulasi (`Namelist` yang termasuk optional dengan tanda `[]`).

:::

Berikut ini merupakan  struktur input file Quantum Espresso untuk program PWscf:

``` powershell
&CONTROL
  ...
/

&SYSTEM
  ...
/

&ELECTRONS
  ...
/

[ &IONS
  ...
 / ]

[ &CELL
  ...
 / ]

[ &FCP
  ...
 / ]

[ &RISM
  ...
 / ]

ATOMIC_SPECIES
 X  Mass_X  PseudoPot_X
 Y  Mass_Y  PseudoPot_Y
 Z  Mass_Z  PseudoPot_Z

ATOMIC_POSITIONS { alat | bohr | angstrom | crystal | crystal_sg }
  X 0.0  0.0  0.0  {if_pos(1) if_pos(2) if_pos(3)}
  Y 0.5  0.0  0.0
  Z 0.0  0.2  0.2

K_POINTS { tpiba | automatic | crystal | gamma | tpiba_b | crystal_b | tpiba_c | crystal_c }
if (gamma)
   nothing to read
if (automatic)
   nk1, nk2, nk3, k1, k2, k3
if (not automatic)
   nks
   xk_x, xk_y, xk_z,  wk
if (tpipa_b or crystal_b in a 'bands' calculation) see Doc/brillouin_zones.pdf

[ CELL_PARAMETERS { alat | bohr | angstrom }
   v1(1) v1(2) v1(3)
   v2(1) v2(2) v2(3)
   v3(1) v3(2) v3(3) ]

[ OCCUPATIONS
   f_inp1(1)  f_inp1(2)  f_inp1(3) ... f_inp1(10)
   f_inp1(11) f_inp1(12) ... f_inp1(nbnd)
 [ f_inp2(1)  f_inp2(2)  f_inp2(3) ... f_inp2(10)
   f_inp2(11) f_inp2(12) ... f_inp2(nbnd) ] ]

[ CONSTRAINTS
   nconstr  { constr_tol }
   constr_type(.)   constr(1,.)   constr(2,.) [ constr(3,.)   constr(4,.) ] { constr_target(.) } ]

[ ATOMIC_VELOCITIES
   label(1)  vx(1) vy(1) vz(1)
   .....
   label(n)  vx(n) vy(n) vz(n) ]

[ ATOMIC_FORCES
   label(1)  Fx(1) Fy(1) Fz(1)
   .....
   label(n)  Fx(n) Fy(n) Fz(n) ]

[ ADDITIONAL_K_POINTS
     see: K_POINTS ]

[ SOLVENTS
   label(1)     Density(1)     Molecule(1)
   label(2)     Density(2)     Molecule(2)
   .....
   label(nsolv) Density(nsolv) Molecule(nsolv) ]

[ HUBBARD { atomic | ortho-atomic | norm-atomic | wf | pseudo }
  if (DFT+U)
      U  label(1)-manifold(1) u_val(1)
    [ J0 label(1)-manifold(1) j0_val(1) ]
      .....
      U  label(n)-manifold(n) u_val(n)
    [ J0 label(n)-manifold(n) j0_val(n) ]
  if (DFT+U+J)
      paramType(1) label(1)-manifold(1) paramValue(1)
      .....
      paramType(n) label(n)-manifold(n) paramValue(n)
  if (DFT+U+V)
      U  label(I)-manifold(I) u_val(I)
    [ J0 label(I)-manifold(I) j0_val(I) ]
      V  label(I)-manifold(I) label(J)-manifold(J) I J v_val(I,J)
      .....
      U  label(N)-manifold(N) u_val(N)
    [ J0 label(N)-manifold(N) j0_val(N) ]
      V  label(N)-manifold(N) label(M)-manifold(M) N M v_val(N,M)
]

```

## Penjelasan Ringkas Input File PWscf Quantum Espresso

Berikut ini merupakan penjelasan ringkas dari input file Quantum Espresso untuk program PWscf. Penjelasn ini membahas parameter-parameter yang sering digunakan dalam kalkulasi. Untuk penjelasan lebih lengkap, dapat dilihat di [dokumentasi resmi Quantum Espresso](https://www.quantum-espresso.org/Doc/INPUT_PW.html).

---
**&CONTROL**
*Bagian ini berisi parameter kontrol untuk perhitungan.*

- `calculation`: Menentukan jenis perhitungan yang akan dilakukan, seperti 'scf', 'nscf', 'bands', 'relax', 'md', 'vc-relax', atau 'vc-md'.
- Parameter lainnya: `title`, `verbosity`, `restart_mode`, `wf_collect`, `nstep`, `iprint`, `tstress`, `tprnfor`, `dt`, `outdir`, `wfcdir`, `prefix`, `lkpoint_dir`, `max_seconds`, `etot_conv_thr`, `forc_conv_thr`, `disk_io`, `pseudo_dir`, `tefield`, `dipfield`, `lelfield`, `nberrycyc`, `lorbm`, `lberry`, `gdir`, `nppstr`, `gate`, `twochem`, `lfcp`, `trism`.

---
**&SYSTEM**
*Bagian ini menentukan informasi tentang sistem yang akan dikaji.*

- `ibrav`, `celldm`, `A`, `B`, `C`, `cosAB`, `cosAC`, `cosBC`: Menentukan struktur kristal dan parameter kisi.
- `nat`, `ntyp`: Menentukan jumlah atom dan jenis atom dalam sistem.
- `nbnd`, `nbnd_cond`: Menentukan jumlah total pita (bands) dan pita yang dianggap sebagai elektron konduksi.
- `occupations`: Menentukan bagaimana okupansi elektron diperlakukan.
- `ecutwfc`, `ecutrho`, `ecutfock`: Menentukan ambang energi untuk fungsi gelombang, kepadatan muatan, dan potensial Fock.
- Parameter lainnya: `nr1`, `nr2`, `nr3`, `nr1s`, `nr2s`, `nr3s`, `nosym`, `nosym_evc`, `noinv`, `no_t_rev`, `force_symmorphic`, `use_all_frac`, `occupations`, `one_atom_occupations`, `starting_spin_angle`, `degauss_cond`, `nelec_cond`, `degauss`, `smearing`, `nspin`, `sic_gamma`, `pol_type`, `sic_energy`, `sci_vb`, `sci_cb`, `noncolin`, `ecfixed`, `qcutz`, `q2sigma`, `input_dft`, `ace`, `exx_fraction`, `screening_parameter`, `exxdiv_treatment`, `x_gamma_extrapolation`, `ecutvcut`, `nqx1`, `nqx2`, `nqx3`, `localization_thr`, `Hubbard_occ`, `Hubbard_alpha`, `Hubbard_beta`, `starting_ns_eigenvalue`, `dmft`, `dmft_prefix`, `ensemble_energies`, `edir`, `emaxpos`, `eopreg`, `eamp`, `angle1`, `angle2`, `lforcet`, `constrained_magnetization`, `fixed_magnetization`, `lambda`, `report`, `lspinorb`, `assume_isolated`, `esm_bc`, `esm_w`, `esm_efield`, `esm_nfit`, `lgcscf`, `gcscf_mu`, `gcscf_conv_thr`, `gcscf_beta`, `vdw_corr`, `london`, `london_s6`, `london_c6`, `london_rvdw`, `london_rcut`, `dftd3_version`, `dftd3_threebody`, `ts_vdw_econv_thr`, `ts_vdw_isolated`, `xdm`, `xdm_a1`, `xdm_a2`, `space_group`, `uniqueb`, `origin_choice`, `rhombohedral`, `zgate`, `relaxz`, `block`, `block_1`, `block_2`, `block_height`, `nextffield`.

*Note*: Untuk parameter `occupations`, dapat digunakan nilai `smearing` atau `tetrahedra`. Untuk `smearing`, dapat digunakan nilai `gaussian`, `methfessel-paxton`, atau `marzari-vanderbilt`. Untuk `smearing` dan `tetrahedra`, dapat digunakan nilai `cold` atau `full`.

---
**&ELECTRONS**
*Bagian ini berisi parameter terkait perhitungan yang melibatkan elektron.*

- `electron_maxstep`, `exx_maxstep`: Menentukan jumlah maksimum iterasi untuk konsistensi sendiri elektron dan perhitungan EXX.
- `scf_must_converge`: Menentukan apakah siklus SCF harus konvergen.
- `conv_thr`, `adaptive_thr`, `conv_thr_init`, `conv_thr_multi`: Menentukan ambang batas konvergensi.
- `mixing_mode`, `mixing_beta`, `mixing_ndim`, `mixing_fixed_ns`: Mengendalikan skema pencampuran dan parameter yang terkait.
- `diagonalization`, `diago_thr_init`, `diago_cg_maxiter`, `diago_ppcg_maxiter`, `diago_david_ndim`, `diago_rmm_ndim`, `diago_rmm_conv`, `diago_gs_nblock`, `diago_full_acc`: Menentukan metode diagonalisasi dan parameter terkait.
- `efield`, `efield_cart`, `efield_phase`: Menentukan medan listrik yang diterapkan.
- `startingpot`, `startingwfc`: Menentukan tebakan awal untuk potensial ionik dan fungsi gelombang.
- Parameter lainnya: `tqr`, `real_space`.

---
**&IONS**, **&CELL**, **&FCP**, **&RISM**
*Bagian-bagian ini berisi parameter untuk perhitungan yang melibatkan ion, sel, FCP (Polarisasi Inti Bebas), dan RISM (Model Interaksi Referensi Situs). 

---
**ATOMIC_SPECIES**
*Bagian ini mendefinisikan spesies atomik yang ada dalam sistem.*

- `X`, `Y`, `Z`: Simbol untuk setiap spesies atomik.
- `Mass_X`, `Mass_Y`, `Mass_Z`: Massa atom untuk setiap spesies.
- `PseudoPot_X`, `PseudoPot_Y`, `PseudoPot_Z`: Nama file atau label untuk file pseudopotensial.

---
**ATOMIC_POSITIONS**
*Bagian ini menentukan posisi atom.*

- `alat`, `bohr`, `angstrom`, `crystal`, `crystal_sg`: Unit untuk posisi atom.
- `X`, `Y`, `Z`: Simbol spesies atomik.
- `x`, `y`, `z`: Koordinat atomik.
- `if_pos(1)`, `if_pos(2)`, `if_pos(3)`: Penanda apakah posisi atom tetap.

---
**K_POINTS**
*Bagian ini mendefinisikan grid titik k untuk sampling Zona Brillouin.*

- `tpiba`, `automatic`, `crystal`, `gamma`, `tpiba_b`, `crystal_b`, `tpiba_c`, `crystal_c`: Opsi untuk pembentukan titik k.
- Tergantung pada opsi yang dipilih, Parameter dan nilainya dapat berbeda, seperti `nks`, `xk_x`, `xk_y`, `xk_z`, `wk`, `nk1`, `nk2`, `nk3`, `sk1`, `sk2`, `sk3`.

*note*: Untuk opsi `tpiba`, `tpiba_b`, dan `tpiba_c`, nilai `xk_x`, `xk_y`, dan `xk_z` harus dalam satuan `2pi/alat`.

---
**ADDITIONAL_K_POINTS**, **CELL_PARAMETERS**, **CONSTRAINTS**, **OCCUPATIONS**, **ATOMIC_VELOCITIES**, **ATOMIC_FORCES**, **SOLVENTS**, **HUBBARD**

*Bagian-bagian ini bersifat opsional dan memiliki tujuan tertentu, seperti  k point tambahan, parameter sel, batasan, okupansi, kecepatan atom, gaya atomik, properti pelarut, dan parameter Hubbard.*

---

Pemahaman ini seharusnya memberikan gambaran umum tentang berbagai bagian dan Parameter yang umum digunakan dalam berkas masukan `pw.x` untuk komponen PWscf Quantum ESPRESSO. Ingatlah untuk merujuk ke dokumentasi resmi Quantum ESPRESSO untuk penjelasan yang lebih rinci dan Parameter tambahan.
