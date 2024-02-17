-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2024 at 03:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `studentId` int(11) NOT NULL,
  `firstName` varchar(200) DEFAULT NULL,
  `lastName` varchar(200) DEFAULT NULL,
  `emailAddress` varchar(200) DEFAULT NULL,
  `contactNo` varchar(100) DEFAULT NULL,
  `courseCode` varchar(20) DEFAULT NULL,
  `specialisationCode` varchar(200) DEFAULT NULL,
  `yearEnrolled` varchar(50) DEFAULT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`studentId`, `firstName`, `lastName`, `emailAddress`, `contactNo`, `courseCode`, `specialisationCode`, `yearEnrolled`, `nationality`, `userId`) VALUES
(14, 'Nita', 'Daugherty', 'wepad@mailinator.com', '53', '61', '78', '1998', 'Dolor aut quia labor', 29),
(21, 'Brynn', 'Hampton', 'norycefu@mailinator.com', '29', '4', '38', '1981', 'Nobis consequuntur s', 98),
(74, '1111111', '1111111111111111', 'ryjikus@mailinator.com', '123123123123123', '20', '19', '2003', 'In veniam qui et ex', 80),
(18656456, 'Phillip', 'Carter', 'student3@example.com', '0420547312', '3698', 'M3003', '2022', 'Austria', 7),
(19513498, 'Virginia', '1111111', 'dihyla@mailinator.com', '1123', '33', '51', '2018', 'Similique vero volup', 5),
(19513577, 'Jimmy', 'Smith', 'student2@example.com', '0476342506', '3699', 'M3001', '2020', 'Austalia', 6);

-- --------------------------------------------------------

--
-- Table structure for table `tutorials`
--

CREATE TABLE `tutorials` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tutorials`
--

INSERT INTO `tutorials` (`id`, `title`, `description`, `published`, `createdAt`, `updatedAt`) VALUES
(18, 'Qui incidunt sed ut1231212312', 'Tempora du121234', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Occaecat qui dolore ', 'Velit quod sed ratio', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'In adipisicing quia ', 'Est sit impedit vo', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Sed nihil aspernatur', 'Reprehenderit aliqui', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Id est dolores est s', 'Commodi quia est est', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'aaaaaaaaaaaaaaaaaaaaaa', '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`studentId`),
  ADD KEY `courseCode` (`courseCode`),
  ADD KEY `specialisationCode` (`specialisationCode`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `tutorials`
--
ALTER TABLE `tutorials`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tutorials`
--
ALTER TABLE `tutorials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
