# a1-g8-ajedrez
a1-g8-ajedrez created by GitHub Classroom
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Partida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Partida` (
  `idPartida` INT NOT NULL,
  `Usuario` VARCHAR(45) NULL,
  `Fecha` DATE NULL,
  `Nivel` INT NULL,
  `Finalizado` VARCHAR(45) NULL,
  PRIMARY KEY (`idPartida`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuario` (
  `idUsuario` INT NOT NULL,
  `Nombre y apellido` VARCHAR(45) NULL,
  `DNI` INT NULL,
  `Correo` VARCHAR(45) NULL,
  `Login` VARCHAR(45) NULL,
  `Password` VARCHAR(45) NULL,
  `Partida_idPartida` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
  INDEX `fk_Usuario_Partida_idx` (`Partida_idPartida` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_Partida`
    FOREIGN KEY (`Partida_idPartida`)
    REFERENCES `mydb`.`Partida` (`idPartida`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Detalle_Partidas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Detalle_Partidas` (
  `idDetalle_Partidas` INT NOT NULL,
  `id.Partidas` INT NULL,
  `Fecha` DATE NULL,
  `Partidas_ganadas` VARCHAR(45) NULL,
  `Partidas_Perdidas` VARCHAR(45) NULL,
  `id.Usuario` VARCHAR(45) NULL,
  `Partida_idPartida` INT NOT NULL,
  PRIMARY KEY (`idDetalle_Partidas`),
  INDEX `fk_Detalle_Partidas_Partida1_idx` (`Partida_idPartida` ASC) VISIBLE,
  CONSTRAINT `fk_Detalle_Partidas_Partida1`
    FOREIGN KEY (`Partida_idPartida`)
    REFERENCES `mydb`.`Partida` (`idPartida`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Juego`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Juego` (
  `idJuego` INT NOT NULL,
  `Cod.Juego` VARCHAR(45) NULL,
  `Nombre` VARCHAR(45) NULL,
  `Descripción` VARCHAR(45) NULL,
  `Partida_idPartida` INT NOT NULL,
  PRIMARY KEY (`idJuego`),
  INDEX `fk_Juego_Partida1_idx` (`Partida_idPartida` ASC) VISIBLE,
  CONSTRAINT `fk_Juego_Partida1`
    FOREIGN KEY (`Partida_idPartida`)
    REFERENCES `mydb`.`Partida` (`idPartida`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
