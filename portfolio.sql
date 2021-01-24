-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 24, 2021 at 07:20 AM
-- Server version: 5.7.24
-- PHP Version: 7.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_diri`
--

CREATE TABLE `data_diri` (
  `id` int(11) NOT NULL,
  `nama` varchar(64) NOT NULL,
  `pekerjaan` varchar(64) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `no_telp` varchar(24) DEFAULT NULL,
  `tentang_saya` text,
  `pendidikan` text,
  `pengalaman` text,
  `pengetahuan_industri` text,
  `teknologo_dan_alat` text,
  `kemampuan_lain` text,
  `bahasa` text,
  `social_media` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_diri`
--

INSERT INTO `data_diri` (`id`, `nama`, `pekerjaan`, `foto`, `email`, `no_telp`, `tentang_saya`, `pendidikan`, `pengalaman`, `pengetahuan_industri`, `teknologo_dan_alat`, `kemampuan_lain`, `bahasa`, `social_media`, `created_at`, `updated_at`) VALUES
(1, 'Achmad Musyaffa Taufiqi', 'Full Stack Developer', 'me.jpg', 'amusfq@gmail.com', '+62 896 1289 0670', 'Saya senang mempelajari hal baru berbau teknologi, hampir semua waktu luang yang ada saya gunakan untuk mencoba mempelajari teknologi baru.', '\"[{\\\"jurusan\\\":\\\"S1 Teknik Informatika\\\",\\\"instansi\\\":\\\"Universitas Narotama Surabaya\\\",\\\"tahun\\\":\\\"2019 - Sekarang\\\"},{\\\"jurusan\\\":\\\"Teknik Komputer dan Jaringan\\\",\\\"instansi\\\":\\\"SMK YPM 1 Taman Sidoarjo\\\",\\\"tahun\\\":\\\"2016 - 2019\\\"}]\"', '\"[{\\\"bagian\\\":\\\"Full Stack Developer\\\",\\\"aplikasi\\\":\\\"Sistem Informasi Kandang - Anugrah Farm\\\",\\\"tahun\\\":\\\"November 2020 - Januari 2020\\\",\\\"deskripsi\\\":\\\"Membuat aplikasi kandang ayam untuk mengatur pembelian, penjualan, stock, dan laporan berbasis web dengan teknologi ReactJS dan Laravel.\\\"},{\\\"bagian\\\":\\\"Full Stack Developer\\\",\\\"aplikasi\\\":\\\"Sistem Informasi Kepegawaian - Yayasan Pupuk KALTIM\\\",\\\"tahun\\\":\\\"Oktober 2020 - November 2020\\\",\\\"deskripsi\\\":\\\"Membuat aplikasi sistem informasi kepegawaian dan penggajian guru dan karyawan untuk satu Yayasan berbasis web dengan teknologi ReactJS dan Laravel.\\\"},{\\\"bagian\\\":\\\"Full Stack Developer\\\",\\\"aplikasi\\\":\\\"BEOMATRIX Project\\\",\\\"tahun\\\":\\\"Februari 2020 - Sekarang\\\",\\\"deskripsi\\\":\\\"Pembuatan dan pengembangan aplikasi sentiment analisis tweet dari pengguna twitter berbasis web menggunakan teknologi Python dan ReactJS\\\"},{\\\"bagian\\\":\\\"Swift Programmer\\\",\\\"aplikasi\\\":\\\"Apple Developer Foundation Batch #4 - Universitas Ciputra Surabaya\\\",\\\"tahun\\\":\\\"November 2019\\\",\\\"deskripsi\\\":\\\"Belajar tentang ekosistem apple, cara berfikir dan mendapat tugas akhir membuat aplikasi pencarian magang untuk device iOS dengan teknologi Swift.\\\"},{\\\"bagian\\\":\\\"Teknisi Lapangan - Magang\\\",\\\"aplikasi\\\":\\\"Kreatif Computer - Sidoarjo\\\",\\\"tahun\\\":\\\"Juli 2017 - Oktober 2017\\\",\\\"deskripsi\\\":\\\"Proses magang saat SMK dan saya memilih untuk belajar menjadi teknisi komputer. Saya belajar cara memperbaiki perangkat lunak, keras ditoko maupun panggilan ke lokasi.\\\"},{\\\"bagian\\\":\\\"Pemilik dan Teknisi\\\",\\\"aplikasi\\\":\\\"Misbah Cell - Sidoarjo\\\",\\\"tahun\\\":\\\"Mei 2016 - Sekarang\\\",\\\"deskripsi\\\":\\\"Saya membuka konter sebegai pemasukan tambahan dirumah dan menerima jasa service handphone dan komputer.\\\"}]\"', 'Web Desain Responsive, Desain UI dan Desain Database', 'HTML, CSS, SASS/SCSS, Bootstrap, TailwindCSS, PHP, Laravel, MySQL, MariaDB, Javascript, ReactJS, React Native,  jQuery, Python, C#, Swift', 'Figma. Framer, Adobe Photoshop, Corel Draw, Adobe Premier, Adobe After Effect', '\"[\\\"Indonesia (Aktif)\\\",\\\"Inggris (Pasif)\\\"]\"', '\"[\\\"facebook.com/amusfq\\\",\\\"instagram.com/amusfq\\\",\\\"linkedin.com/in/amusfq\\\",\\\"github.com/amusfq\\\"]\"', '2021-01-18 07:45:29', '2021-01-18 08:25:50');

-- --------------------------------------------------------

--
-- Table structure for table `me`
--

CREATE TABLE `me` (
  `id` int(11) NOT NULL,
  `header` varchar(255) NOT NULL,
  `scroll` varchar(24) NOT NULL,
  `tentang` text NOT NULL,
  `download` varchar(24) NOT NULL,
  `more` varchar(24) NOT NULL,
  `projects` varchar(24) NOT NULL,
  `skills` text NOT NULL,
  `contact` varchar(24) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `me`
--

INSERT INTO `me` (`id`, `header`, `scroll`, `tentang`, `download`, `more`, `projects`, `skills`, `contact`, `created_at`, `updated_at`) VALUES
(1, 'Halo;Saya Achmad Musyaffa Taufiqi;Full Stack Developer', 'Gulir Kebawah', 'Tentang Saya;Saat ini saya bekerja sebagai freelancere. Saya senang membuat aplikasi web dengan;dan;. Saya juga seorang mahasiswa aktif di Universitas Narotama.', 'Unduh Resume', 'Selengkapnya', 'Proyek', 'Kemampuan;Ketika waktu luang saya senang meningkatkan kemampuan development web dengan;dan;. Dan telah mempelajari alat dan framework berikut', 'Hubungi Saya', '2021-01-22 04:45:13', '2021-01-22 08:24:57'),
(2, 'Hello;I\'m Achmad Musyaffa Taufiqi;a Full Stack Developer', 'Scroll Down', 'About Me;I’m currently working as a freelance fullstack developer. I enjoy building web apps using;and;. I\'m also an active student in Narotama University.', 'Download Resume', 'See More', 'Projecs', 'Skills;in my spare time I improve my skills in web development using;and;. Now I have learned this tools and frameworks', 'Get in touch', '2021-01-22 08:08:28', '2021-01-22 08:25:04');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `untuk` varchar(255) DEFAULT NULL,
  `posisi` varchar(64) DEFAULT NULL,
  `teknologi` varchar(64) NOT NULL,
  `keterangan` text,
  `pengerjaan` varchar(64) NOT NULL,
  `link` varchar(64) DEFAULT NULL,
  `foto` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `judul`, `untuk`, `posisi`, `teknologi`, `keterangan`, `pengerjaan`, `link`, `foto`, `created_at`, `updated_at`) VALUES
(1, 'Magang', 'Apple Developer Foundation Batch #4 - Universitas Ciputra Surabaya', 'Swift Programmer', 'SwiftUI', 'Belajar tentang ekosistem apple, cara berfikir dan mendapat tugas akhir membuat aplikasi pencarian magang untuk device iOS dengan teknologi Swift.', 'November 2019', NULL, 'magang01.jpg,magang02.jpg', '2021-01-20 09:18:14', '2021-01-24 07:03:13'),
(2, 'BEOMATRIX', 'BEOMATRIX Project', 'Full Stack Developer', 'ReactJS,Python', 'Pembuatan dan pengembangan aplikasi sentiment analisis tweet dari pengguna twitter berbasis web menggunakan teknologi Python dan ReactJS.', 'Februari 2020 - Sekarang', 'https://beomatrix.com', 'beomatrix01.png,beomatrix02.png', '2021-01-20 09:18:14', '2021-01-20 09:52:40'),
(3, 'Sistem Informasi Kepegawaian', 'Yayasan Pupuk KALTIM', 'Full Stack Developer', 'ReactJS,Laravel', 'Membuat aplikasi sistem informasi kepegawaian dan penggajian guru dan karyawan untuk satu Yayasan berbasis web dengan teknologi ReactJS dan Laravel.', 'Oktober 2020 - November 2020', 'https://ess.ypk.or.id/', 'sispeg01.jpg,sispeg02.jpg,sispeg03.jpg,sispeg04.jpg', '2021-01-20 09:20:33', '2021-01-20 12:16:27'),
(4, 'Sistem Informasi Kandang', 'Anugrah Farm', 'Full Stack Developer', 'ReactJS,Laravel', 'Membuat aplikasi kandang ayam untuk mengatur pembelian, penjualan, stock, dan laporan berbasis web dengan teknologi ReactJS dan Laravel.', 'November 2020 - Januari 2020', NULL, 'anugrah_farm01.png,anugrah_farm02.png,anugrah_farm03.png,anugrah_farm04.png,anugrah_farm05.jpg', '2021-01-20 09:20:33', '2021-01-20 12:02:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_diri`
--
ALTER TABLE `data_diri`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `me`
--
ALTER TABLE `me`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_diri`
--
ALTER TABLE `data_diri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `me`
--
ALTER TABLE `me`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
