-- ============================================================
-- BJP Leaders Dashboard — MySQL Migration Script
-- Database: u851000947_bjp_dashboard
-- Run this in phpMyAdmin or any MySQL client
-- ============================================================

-- 1. GEOGRAPHY TABLES
CREATE TABLE IF NOT EXISTS `states` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL UNIQUE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `districts` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `state_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`state_id`) REFERENCES `states`(`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `constituencies` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `district_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`district_id`) REFERENCES `districts`(`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `divisions` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `constituency_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`constituency_id`) REFERENCES `constituencies`(`id`) ON DELETE CASCADE
);

-- 2. PROFILES TABLE
CREATE TABLE IF NOT EXISTS `profiles` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(150) NOT NULL,
  `role` VARCHAR(100),
  `party_position` VARCHAR(150),
  `phone` VARCHAR(20),
  `email` VARCHAR(150),
  `state_id` INT UNSIGNED,
  `district_id` INT UNSIGNED,
  `constituency_id` INT UNSIGNED,
  `bio` TEXT,
  `avatar_url` VARCHAR(500),
  `is_active` TINYINT(1) DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`state_id`) REFERENCES `states`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`district_id`) REFERENCES `districts`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`constituency_id`) REFERENCES `constituencies`(`id`) ON DELETE SET NULL
);

-- 3. ARTICLES TABLE
CREATE TABLE IF NOT EXISTS `articles` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `headline` VARCHAR(500) NOT NULL,
  `body` LONGTEXT,
  `media_url` VARCHAR(500),
  `status` ENUM('DRAFT','PUBLISHED','ARCHIVED') DEFAULT 'DRAFT',
  `state_id` INT UNSIGNED,
  `district_id` INT UNSIGNED,
  `constituency_id` INT UNSIGNED,
  `author_id` INT UNSIGNED,
  `published_at` DATETIME,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`state_id`) REFERENCES `states`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`district_id`) REFERENCES `districts`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`constituency_id`) REFERENCES `constituencies`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`author_id`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS `article_leaders` (
  `article_id` INT UNSIGNED NOT NULL,
  `profile_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`article_id`, `profile_id`),
  FOREIGN KEY (`article_id`) REFERENCES `articles`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`id`) ON DELETE CASCADE
);

-- 4. GRIEVANCES TABLE
CREATE TABLE IF NOT EXISTS `grievances` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `ticket_id` VARCHAR(20) NOT NULL UNIQUE,
  `citizen_name` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(20),
  `category` VARCHAR(100),
  `description` TEXT,
  `status` ENUM('OPEN','IN_PROGRESS','RESOLVED','CLOSED') DEFAULT 'OPEN',
  `priority` ENUM('LOW','MEDIUM','HIGH','URGENT') DEFAULT 'MEDIUM',
  `state_id` INT UNSIGNED,
  `district_id` INT UNSIGNED,
  `constituency_id` INT UNSIGNED,
  `assigned_to` INT UNSIGNED,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`state_id`) REFERENCES `states`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`district_id`) REFERENCES `districts`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`constituency_id`) REFERENCES `constituencies`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`assigned_to`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
);

-- 5. VOLUNTEERS TABLE
CREATE TABLE IF NOT EXISTS `volunteers` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(20),
  `email` VARCHAR(150),
  `skills` VARCHAR(500),
  `availability` VARCHAR(100),
  `state_id` INT UNSIGNED,
  `district_id` INT UNSIGNED,
  `constituency_id` INT UNSIGNED,
  `status` ENUM('ACTIVE','INACTIVE','PENDING') DEFAULT 'PENDING',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`state_id`) REFERENCES `states`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`district_id`) REFERENCES `districts`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`constituency_id`) REFERENCES `constituencies`(`id`) ON DELETE SET NULL
);

-- 6. EVENTS TABLE
CREATE TABLE IF NOT EXISTS `events` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(300) NOT NULL,
  `description` TEXT,
  `event_type` ENUM('RALLY','MEETING','SEMINAR','PRESS_CONFERENCE','OTHER') DEFAULT 'OTHER',
  `venue` VARCHAR(300),
  `event_date` DATE NOT NULL,
  `start_time` TIME,
  `end_time` TIME,
  `state_id` INT UNSIGNED,
  `district_id` INT UNSIGNED,
  `constituency_id` INT UNSIGNED,
  `organizer_id` INT UNSIGNED,
  `rsvp_count` INT DEFAULT 0,
  `volunteer_count` INT DEFAULT 0,
  `status` ENUM('UPCOMING','ONGOING','COMPLETED','CANCELLED') DEFAULT 'UPCOMING',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`state_id`) REFERENCES `states`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`district_id`) REFERENCES `districts`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`constituency_id`) REFERENCES `constituencies`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`organizer_id`) REFERENCES `profiles`(`id`) ON DELETE SET NULL
);
