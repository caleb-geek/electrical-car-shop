-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 04, 2021 at 06:25 PM
-- Server version: 5.7.32-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electrical_car_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `id` int(11) NOT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`id`, `amount`, `location`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '36000', 'Kisumu', NULL, '2020-12-20 16:59:04', '2020-12-20 16:59:04'),
(2, '17000', '', NULL, '2020-12-20 17:42:00', '2020-12-20 17:42:00'),
(3, '17000', 'Nairobi', NULL, '2020-12-20 17:45:01', '2020-12-20 17:45:01'),
(4, '453000', 'Eldoret Kenya', NULL, '2021-01-02 21:03:52', '2021-01-02 21:03:52'),
(5, '400000', 'Kisumu', NULL, '2021-01-02 21:40:54', '2021-01-02 21:40:54');

-- --------------------------------------------------------

--
-- Table structure for table `ProductOrders`
--

CREATE TABLE `ProductOrders` (
  `id` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ProductOrders`
--

INSERT INTO `ProductOrders` (`id`, `productId`, `orderId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2020-12-20 16:59:05', '2020-12-20 16:59:05'),
(2, 2, 1, '2020-12-20 16:59:05', '2020-12-20 16:59:05'),
(3, 1, 2, '2020-12-20 17:42:02', '2020-12-20 17:42:02'),
(4, 2, 2, '2020-12-20 17:42:02', '2020-12-20 17:42:02'),
(5, 2, 3, '2020-12-20 17:45:01', '2020-12-20 17:45:01'),
(6, 1, 3, '2020-12-20 17:45:01', '2020-12-20 17:45:01'),
(7, 11, 4, '2021-01-02 21:03:52', '2021-01-02 21:03:52'),
(8, 12, 4, '2021-01-02 21:03:52', '2021-01-02 21:03:52'),
(9, 10, 4, '2021-01-02 21:03:52', '2021-01-02 21:03:52'),
(10, 11, 5, '2021-01-02 21:40:55', '2021-01-02 21:40:55');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `details` text,
  `image` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `name`, `price`, `tag`, `details`, `image`, `count`, `createdAt`, `updatedAt`) VALUES
(8, 'Fly Sparks', '15000', 'This a Fly Sparks Car', 'This a Fly Sparks Car', 'http://127.0.0.1:5000/images/car1.jpg1609620788399.jpg', 1, '2021-01-02 20:53:08', '2021-01-02 20:53:08'),
(9, 'Affordable Car', '2000', 'This a an Affordable Car', 'This is an Affordable Car', 'http://127.0.0.1:5000/images/car2.jpg1609620888029.jpg', 1, '2021-01-02 20:54:48', '2021-01-02 20:54:48'),
(10, 'Range Rover', '20000', 'This is a Range Rover', 'This is a Range Rover Car', 'http://127.0.0.1:5000/images/car3.jpeg1609621026654.jpg', 1, '2021-01-02 20:57:06', '2021-01-02 20:57:06'),
(11, 'Cadillac', '400000', 'This is a Cadillac', 'This is a Cadillac Car', 'http://127.0.0.1:5000/images/car4.jpeg1609621178587.jpg', 1, '2021-01-02 20:59:38', '2021-01-02 20:59:38'),
(12, 'Datsun', '33000', 'This is a Datsun Car', 'This is a Datsun Car', 'http://127.0.0.1:5000/images/car5.jpeg1609621256113.jpg', 1, '2021-01-02 21:00:56', '2021-01-02 21:00:56'),
(13, 'Chevrolet.', '15000', 'This is a Chevrolet.', 'This is a Chevrolet.', 'http://127.0.0.1:5000/images/car7.jpeg1609621688011.jpg', 1, '2021-01-02 21:08:08', '2021-01-02 21:08:08'),
(14, 'Ford', '12000', 'This is a Ford', 'This is a Ford', 'http://127.0.0.1:5000/images/car8.jpeg1609621827283.jpg', 1, '2021-01-02 21:10:27', '2021-01-02 21:10:27'),
(15, 'Honda', '180000', 'cc', 'This is a Honda Car', 'http://127.0.0.1:5000/images/car9.jpeg1609621940395.jpg', 1, '2021-01-02 21:12:20', '2021-01-02 21:12:20'),
(16, 'Mercedes-Benz', '45000', 'This is a Mercedes-Benz', 'This a Mercedes-Benz', 'http://127.0.0.1:5000/images/car10.jpeg1609622196223.jpg', 1, '2021-01-02 21:16:36', '2021-01-02 21:16:36'),
(17, 'BMW', '45000', 'This is a BMW', 'This a BMW Car', 'http://127.0.0.1:5000/images/car11.jpeg1609622267470.jpg', 1, '2021-01-02 21:17:47', '2021-01-02 21:17:47'),
(18, 'Porsche', '17000', 'This is a Porsche Car', 'This is a Porsche Car', 'http://127.0.0.1:5000/images/car12.jpeg1609622876740.jpg', 1, '2021-01-02 21:27:56', '2021-01-02 21:27:56'),
(19, ' Rolls-Royce', '1000', 'This is a  Rolls-Royce', 'This is a  Rolls-Royce', 'http://127.0.0.1:5000/images/car8.jpeg1609623002050.jpg', 1, '2021-01-02 21:30:02', '2021-01-02 21:30:02');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20201217160100-create-user.js'),
('20201217161427-create-product.js'),
('20201217162037-create-order.js'),
('20201218210237-create-product-orders.js');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `physical_address` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `firstName`, `lastName`, `email`, `username`, `contact`, `physical_address`, `password`, `admin`, `createdAt`, `updatedAt`) VALUES
(1, 'caleb', 'osano', 'caleb.osano@gmail.com', 'caleb', '0718726543', 'Eldoret, Kenya', '$2b$10$FBfwDT1LHAW5kg46o6fZwepEiVYiubu.v/wNsV8VFYRfC9lMDYQsi', 1, '2020-12-20 16:34:06', '2020-12-20 16:34:06'),
(2, 'caleb', 'osano', 'caleb.osano@gmail.com', 'caleb', '0718726543', 'Eldoret, Kenya', '$2b$10$z6DcRcwobcbxn0KSuWphj.VREEC/Lh7FNiQadVU3YDIYrNNgunph6', 1, '2020-12-20 16:34:24', '2020-12-20 16:34:24'),
(3, 'Gloria', 'Chemeli', 'gloria@gmail.com', 'gloria', '0718726543', 'Eldoret, Kenya', '$2b$10$A4CdFe9MdwD34K7PDJhxGuKN2kvEupJrEMrX4afGgUf14nRFkcfXS', 1, '2021-01-02 20:39:11', '2021-01-02 20:39:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `ProductOrders`
--
ALTER TABLE `ProductOrders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `ProductOrders`
--
ALTER TABLE `ProductOrders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
