-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zara` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `zara` ;

-- -----------------------------------------------------
-- Table `zara`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zara`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `quantity` INT NOT NULL,
  `price` INT NOT NULL,
  `image 1` VARCHAR(500) NOT NULL,
  `image 2` VARCHAR(500) CHARACTER SET 'armscii8' NOT NULL,
  `cart_id` INT NOT NULL,
  PRIMARY KEY (`id`, `cart_id`),
  INDEX `fk_products_cart1_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `zara`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zara`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `cart_id` INT NOT NULL,
  PRIMARY KEY (`id`, `cart_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_users_cart_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_cart`
    FOREIGN KEY (`cart_id`)
    REFERENCES `zara`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

