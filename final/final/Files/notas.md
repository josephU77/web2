## SQL
CREATE SCHEMA `node_crud` DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci ;
### table
 CREATE TABLE `node_crud`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_spanish_ci;