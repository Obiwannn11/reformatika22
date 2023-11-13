// {
//   title: "mahadAlyTafsir", judul h1
//   picture: img/gedungCsaintek  ambil gambar
//   desc: "mahadAlyTafsir",     deskripsi p
//   rectId:"mahadAlyTafsir"     id kotak yang sesuai dengan svg 
  
// }

let dataGedung = [
    {
      title: "Gedung E Fakultas Saintek",
      picture: "img/gambarGedungESaintek.jpg",
      desc: "Tampak dari Depan Gedung E Fakultas Saintek",
      rectId:"gedungESaintek"
    },
    {
      title: "Gedung D Fakultas Saintek",
      picture: "img/gambarGedungDSaintek2.jpg",
      desc: "Tampak dari Depan Gedung D Fakultas Saintek",
      rectId:"gedungDSaintek"
    },
    {
      title: "Gedung F Fakultas Saintek",
      picture: "img/gambarGedungFST.jpg",
      desc: "Tampak dari Depan Gedung F Fakultas Saintek",
      rectId:"gedungFSaintek"
    },
    {
      title: "Gedung C Jurusan Fakultas Saintek",
      picture: "img/gambarGedungCSaintek.jpg",
      desc: "Tampak dari Depan Gedung C Fakultas Saintek",
      rectId:"gedungCSaintek"
    },
    //dummy
    {
      title: "Poliklinik",
      picture: "img/gambarPoliklinik.jpg",
      desc: "Tampak Depan Poliklinik",
      rectId:"poliklinik"
    },
    {
      title: "Mahad Al Jamiah",
      picture: "img/gambarMahad.jpg",
      desc: "Tampak Depan Mahad Al Jamiah",
      rectId:"mahad"
    },
    {
      title: "Bank BNI",
      picture: "img/gambarBNI.jpg",
      desc: "Tampak Depan Bank BNI",
      rectId:"BNI"
    },
    {
      title: "Gedung Learn Teater",
      picture: "img/gambarGedungLearnTeater.jpg",
      desc: "Tampak Depan Gedung Learn Teater",
      rectId:"gedungTeater"
    },
    {
      title: "Gedung Fakultas Usluhuddin dan Filsafat",
      picture: "img/gambarGedungFUF.jpg",
      desc: "Tampak Depan Gedung Fakultas Usluhuddin dan Filsafat",
      rectId:"gedungFUF"
    },
    {
      title: "Rektorat Universitas Islam Negeri Alauddin",
      picture: "img/gambarRektorat2.jpg",
      desc: "Tampak Depan Rektorat",
      rectId:"rektorat"
    },
    {
      title: "Masjid Agung UIN Alauddin",
      picture: "img/gambarMasjidAgung.jpg",
      desc: "Tampak Masjid Agung Alauddin",
      rectId:"masjidAgung"
    },
    {
      title: "Perpustakaan Syekh Yusuf",
      picture: "img/gambarPerpustakaan.jpg",
      desc: "Tampak Depan Perpustakaan Syekh Yusuf",
      rectId:"perpustakaan"
    },
    {
      title: "Lapangan Sepakbola",
      picture: "img/gambarLapanganSepakbola.jpg",
      desc: "Tampak Lapangan Sepakbola",
      rectId:"lapangansepakbola"
    }, 
    {
      title: "Gedung Fakultas Syariah dan Hukum",
      picture: "img/gambarGedungFSH.jpg",
      desc: "Tampak Depan Fakultas Syariah dan Hukum",
      rectId:"gedungFSH"
    },
    {
      title: "Lapangan Upacara",
      picture: "img/gambarLapanganUpacara.jpg",
      desc: "Tampak Dari Lapangan Upacara",
      rectId:"lapanganUpacara"
    },
    {
      title: "Pusat Pengembangan Bisnis (P2B)",
      picture: "img/gambarP2B.jpg",
      desc: "Tampak Depan P2B",
      rectId:"P2B"
    },
    {
      title: "Gedung LP2M",
      picture: "img/gambarLP2M.jpg",
      desc: "Tampak Depan LP2M",
      rectId:"LP2M"
    },
    {
      title: "Pos Satpam",
      picture: "img/gambarPosSatpam.jpg",
      desc: "Tampak Depan Pos Satpam",
      rectId:"posSatpam"
    },
    {
      title: "Gedung Dosen Fakultas Sains dan Teknologi",
      picture: "img/gambarGedungDosenSaintek.jpg",
      desc: "Tampak Depan Gedung Dosen",
      rectId:"gedungDosenSaintek"
    },
    {
      title: "Sekret Himpunan Fakultas Sains dan Teknologi",
      picture: "img/gambarSekretariathimpunanFST.jpg",
      desc: "Tampak dari Samping Sekret Himpunan Saintek",
      rectId:"sekretHimpunanSaintek"
    },
    {
      title: "Gedung Fakultas Ekonomi dan Bisnis Islam",
      picture: "img/gambarGedungFEBI.jpg",
      desc: "Tampak Depan Fakultas Ekonomi dan Bisnis Islam",
      rectId:"gedungFEBI"
    },
    {
      title: "Taman Darma Wanita",
      picture: "img/gambarTamanDarmaWanita.jpg",
      desc: "Tampak Taman Darma Wanita",
      rectId:"tamanDarmaWanita"
    },
    {
      title: " Asrama Rusunawa",
      picture: "img/gambarAsramaRusunawa3.jpg",
      desc: "Tampak Depan Asrama Rusunawa",
      rectId:"asramaRusunawa"
    },
    {
      title: " Kantin Rusunawa",
      picture: "img/gambarKantinRusunawa.jpg",
      desc: "Tampak Depan Kantin Rusunawa",
      rectId:"kantinRusunawa"
    },
    {
      title: "Kafetaria",
      picture: "img/gambarCafetaria.jpg",
      desc: "Tampak dari Depan Cafetaria",
      rectId:"cafetaria"
    },
    {
      title: "Kantin Rusunawa",
      picture: "img/gambarKantinRusunawa.jpg",
      desc: "Tampak Depan Kantin Rusunawa",
      rectId:"kantinRusunawa"
    },
    {
      title: "Koperasi Al Muawwanah",
      picture: "img/gambarKoperasi.jpg",
      desc: "Tampak Samping dari Koperasi ",
      rectId:"koperasi"
    },
    {
      title: "Gedung Baru Fakultas Kedokteran dan Ilmu Kesehatan",
      picture: "img/gambarGedungFKIKBaru2.jpg",
      desc: "Tampak Depan Gedung Fakultas Kedokteran dan Ilmu Kesehatan ",
      rectId:"gedungBaruFKIK"//gedung utama
    },
    {
      title: "Gedung Baru Fakultas Kedokteran dan Ilmu Kesehatan",
      picture: "img/gambarGedungFKIKBaruBlkg.jpg",
      desc: "Tampak Gedung Fakultas Kedokteran dan Ilmu Kesehatan ",
      rectId:"gedungBaru2FKIK"//gedung blkg
    },
    {
      title: "Gedung Baru Fakultas Kedokteran dan Ilmu Kesehatan",
      picture: "img/gambarGedungFKIKLama2.jpg",
      desc: "Tampak Depan Gedung Fakultas Kedokteran dan Ilmu Kesehatan ",
      rectId:"gedungLamaFKIK"//gedunglmama
    },
    {
      title: "Gedung Lama Fakultas Kedokteran dan Ilmu Kesehatan",
      picture: "img/gambarmushollaFKIK.jpg",
      desc: "Tampak Depan Mushalla Fakultas Kedokteran dan Ilmu Kesehatan ",
      rectId:"mushallaFKIK"
    },
    {
      title: "Gedung Pusat Kegiatan Mahasiswa (PKM)",
      picture: "img/gambarGedungPKM.jpg",
      desc: "Tampak dari Gedung Pusat Kegiatan Mahasiswa (PKM)",
      rectId:"gedungPKM"
    },
    {
      title: "Lapangan Volley",
      picture: "img/gambarLapanganVolley.jpg",
      desc: "Tampak Lapangan Volley",
      rectId:"lapanganVolley"
    },
    {
      title: "Gedung Lembaga Penjaminan Mutu",
      picture: "img/gambarLPM.jpg",
      desc: "Tampak Depan Mushalla Fakultas Kedokteran dan Ilmu Kesehatan ",
      rectId:"gedungLPM"
    },
    {
      title: "Miniatur Kabah",
      picture: "img/gambarMiniaturKabah.jpg",
      desc: "Tampak Miniatur Kabah",
      rectId:"miniaturKabah"
    },
    {
      title: "Cafetaria Syariah",
      picture: "img/gambarCafetariaSyariah.jpg",
      desc: "Tampak Depan Cafetaria Syariah",
      rectId:"cafetariaSyariah"
    },
    {
      title: "Asrama Mahad",
      picture: "img/gambarAsramaMahad.jpg",
      desc: "Tampak Depan Asrama Ma'had ",
      rectId:"asramaMahad"
    },
    {
      title: "Ma'had Aly",
      picture: "img/gambarMahadAly.jpg",
      desc: "Tampak Depan Ma'had Aly ",
      rectId:"mahadAlyTafsir"
    },
    {
      title: "Masjid ",
      picture: "img/gambarMasjidLama.jpg",
      desc: "Tampak Depan Masjid ",
      rectId:"masjidTarbiyah"
    },
    {
      title: "Gedung Fakultas Adab dan Humaniora",
      picture: "img/gambarGedungFAH.jpg",
      desc: "Tampak Depan Gedung Adab dan Humaniora",
      rectId:"gedungFAH"
    },
    {
      title: "Gedung Fakultas Dakwah dan Komunikasi",
      picture: "img/gambarGedungFDK.jpg",
      desc: "Tampak Depan Gedung Dakwah dan Komunikasi",
      rectId:"gedungFDK"
    },
    {
      title: "Gedung PascaSarjana B",
      picture: "img/gambarGedungPascaSarjanaB.jpg",
      desc: "Tampak Depan Gedung PascaSarjana B ",
      rectId:"pascasarjanaB"
    },
    {
      title: "Gedung PascaSarjana C",
      picture: "img/gambarGedungPascaSarjanaC.jpg",
      desc: "Tampak Depan Gedung PascaSarjana C ",
      rectId:"pascasarjanaC"
    },
    {
      title: "Tampak Dari Gedung R",
      picture: "img/gambarGedungR.jpg",
      desc: "Tampak Depan Gedung R",
      rectId:"gedungR"
    },
    {
      title: "Gedung Fakultas Tarbiyah dan Keguruan",
      picture: "img/gambarGedungFTK.jpg",
      desc: "Tampak Depan Gedung Tarbiyah dan Keguruan",
      rectId:"gedungFTK"
    },
    {
      title: "Gedung Fakultas Adab dan Humaniora",
      picture: "img/gambarGedungFAH.jpg",
      desc: "Tampak Depan Gedung Adab dan Humaniora",
      rectId:"gedungFAH"
    },
    {
      title: "Auditorium",
      picture: "img/gambarAuditorium.jpg",
      desc: "Tampak Depan Auditorium",
      rectId:"auditorium"
    },
    {
      title: "Gedung Pascasarjana",
      picture: "img/gambarGedungPascasarjana.jpg",
      desc: "Tampak Samping Gedung Pascasarjana",
      rectId:"gedungPascasarjana2"
    },
    {
      title: "Asrama PIBA",
      picture: "img/gambarAsramaPIBA.jpg",
      desc: "Tampak Depan Asrama PIBA",
      rectId:"asramaPIBA"
    },
    {
      title: "Danau UIN Alauddin",
      picture: "img/gambarDanau.jpg",
      desc: "Tampak Samping Danau UIN Alauddin",
      rectId:"danauUIN"
    },
    {
      title: "Rumah Kebun",
      picture: "img/gambarRumahKebun.jpg",
      desc: "Tampak Depan Rumah Kebun",
      rectId:"greenHouse"
    },
   ]
 
/*
  {
    title: "mahadAlyTafsir", judul h1
    picture: img/gedungCsaintek  ambil gambar
    desc: "mahadAlyTafsir",     deskripsi p
    rectId:"mahadAlyTafsir"     id kotak yang sesuai dengan svg 
    
  }
  
  */
  
  // // deklarasi variabel
  // const modal = document.querySelector("[data-modal]")
  // const openButton = document.querySelector("[data-open-modal]")
  // const closeButton = document.querySelector("[data-close-modal]")
  
  
  //============================================================
  //untuk banyak
  const modal = document.querySelector("[data-modal]")
  const openButton = document.querySelector("[data-open-modal]")  //UNTUK TOMBOL OPEN
  // const openButton = document.querySelectorAll(".kotak")
  const closeButton = document.querySelector("[data-close-modal]")
  //======================================================================
  
  
  // kondisi ketika openButton ditekan
  // openButton.addEventListener("click", () => {
  //     modal.showModal()//menunjukkan posisi modal relative
  //     console.log("ok")
  //     // modal.showmodal() --> menunjukkan modal position fixed
  // })
  
  
  
  //MEMBUKA MODAL KETIKA RECT DI TEKAN
  // Menangkap elemen semua rect
  
  const rect = document.querySelectorAll('rect')
    
  // Menambahkan event listener pada tag rect
  rect.forEach(tag => {
    tag.addEventListener('click', function() {
      // console.log(this.id)
      //                 nama array.find ( variabel => item. NamaProperty === id dari yang di klik)
      const idObjek = dataGedung.find(item => item.rectId === this.id)
      // console.log(idObjek)
        // tangkap id dari tag p yang id nya adalah deskripsi
      const desc = document.getElementById("deskripsi")
      //mengubah desc
      desc.innerText = idObjek.desc
        

        //mengubah judul
      const judul = document.getElementById("title")
      judul.innerText = idObjek.title

      // mengubah gambar
      const pic = document.getElementById("picture")
      pic.src = idObjek.picture

      //menunjukkan modal yang isi nya telah diubah
      modal.showModal()//ketika dipencet tag rect, akan muncul modal
    });
  });
  

  // ==================================================================
  // untuk miniatur ka'bah (KARENA BULAT SENDIRI)

  const ellipse = document.querySelectorAll('ellipse')

  ellipse.forEach(tagE => {
    tagE.addEventListener('click', function() {
      // console.log(this.id)
      //                 nama array.find ( variabel => item. NamaProperty === id dari yang di klik)
      const idObjeks = dataGedung.find(iten => iten.rectId === this.id)
      // console.log(idObjek)
      const desc = document.getElementById("deskripsi")
      //mengubah desc
      desc.innerText = idObjeks.desc
        

        //mengubah judul
      const judul = document.getElementById("title")
      judul.innerText = idObjeks.title

      // mengubah gambar
      const pic = document.getElementById("picture")
      pic.src = idObjeks.picture



      //mengubah desc ellipse kabah
      
      //menunjukkan modal yang isi nya telah diubah
      modal.showModal()//ketika dipencet tag rect, akan muncul modal
    });
  });
  
  
  // buat objek {
    // cari value dri properti objek
    // cari value nya dengan array
  
  //   title
  //   deskripsi
  //   id
  
  
  
  // }
  // cari id 
  // cek id dengan isi 
  
  //memunculkan id rect
  // rect.forEach(tag => {
  //   tag.addEventListener('click', function() {
  //     console.log(this.id)//ketika dipencet, akan memunculkan id dari rect
  //   });
  // });
  
  
  //tutup modal
  closeButton.addEventListener("click", () => {
        modal.close()//tutup modal
    //     
    })
   
  
  
  
  //tutup dialog diluar modal
  modal.addEventListener("click", e => {
      const dialogDimensions = modal.getBoundingClientRect()
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
          modal.close()
      }
    })
  
  
  
  //CARA KUNO
  //BUAT FUNGSI MENANGKAP KLIK ( ADDEVENTLISTENER)
  // LALU TANGKAP ID DARI ELEMEN YANG DI KLIK (ID RECT, GETELEMENTBYID)
  //SHOW MODAL DENGAN TANGKAP ELEMEN (TAGNAME)
  // ..HAPPY CODING
  
  