# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
    
```sql

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
    -- Table `mydb`.`User`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`User` (
    `id` INT NOT NULL,
    `firstname` MEDIUMTEXT NULL,
    `lastname` MEDIUMTEXT NULL,
    `nickname` MEDIUMTEXT NULL,
    `email` MEDIUMTEXT NULL,
    `password` MEDIUMTEXT NULL,
    `Role_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Role_id`),
    INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
    CONSTRAINT `fk_User_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Role`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
    `id` INT NOT NULL,
    `name` TINYTEXT NULL,
    PRIMARY KEY (`id`))
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`User`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`User` (
    `id` INT NOT NULL,
    `firstname` MEDIUMTEXT NULL,
    `lastname` MEDIUMTEXT NULL,
    `nickname` MEDIUMTEXT NULL,
    `email` MEDIUMTEXT NULL,
    `password` MEDIUMTEXT NULL,
    `Role_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Role_id`),
    INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
    CONSTRAINT `fk_User_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Survey`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Survey` (
    `id` INT NOT NULL,
    `title` MEDIUMTEXT NULL,
    `description` LONGTEXT NULL,
    `created` DATE NULL,
    `User_id` INT NOT NULL,
    PRIMARY KEY (`id`, `User_id`),
    INDEX `fk_Survey_User1_idx` (`User_id` ASC) VISIBLE,
    CONSTRAINT `fk_Survey_User1`
        FOREIGN KEY (`User_id`)
        REFERENCES `mydb`.`User` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Question`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Question` (
    `id` INT NOT NULL,
    `text` MEDIUMTEXT NULL,
    `type` TINYTEXT NULL,
    `Survey_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Survey_id`),
    INDEX `fk_Question_Survey1_idx` (`Survey_id` ASC) VISIBLE,
    CONSTRAINT `fk_Question_Survey1`
        FOREIGN KEY (`Survey_id`)
        REFERENCES `mydb`.`Survey` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Answer`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Answer` (
    `id` INT NOT NULL,
    `text` MEDIUMTEXT NULL,
    `User_id` INT NOT NULL,
    `Question_id` INT NOT NULL,
    PRIMARY KEY (`id`, `User_id`, `Question_id`),
    INDEX `fk_Answer_User_idx` (`User_id` ASC) VISIBLE,
    INDEX `fk_Answer_Question1_idx` (`Question_id` ASC) VISIBLE,
    CONSTRAINT `fk_Answer_User`
        FOREIGN KEY (`User_id`)
        REFERENCES `mydb`.`User` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Answer_Question1`
        FOREIGN KEY (`Question_id`)
        REFERENCES `mydb`.`Question` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Permission`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Permission` (
    `id` INT NOT NULL,
    `name` TINYTEXT NOT NULL,
    PRIMARY KEY (`id`, `name`))
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Grant`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Grant` (
    `id` INT NOT NULL,
    `appointed` DATE NULL,
    `Role_id` INT NOT NULL,
    `Permission_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Role_id`, `Permission_id`),
    INDEX `fk_Grant_Role1_idx` (`Role_id` ASC) VISIBLE,
    INDEX `fk_Grant_Permission1_idx` (`Permission_id` ASC) VISIBLE,
    CONSTRAINT `fk_Grant_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Grant_Permission1`
        FOREIGN KEY (`Permission_id`)
        REFERENCES `mydb`.`Permission` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`State`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`State` (
    `id` INT NOT NULL,
    `name` TINYTEXT NULL,
    PRIMARY KEY (`id`))
    ENGINE = InnoDB;


    -- -----------------------------------------------------
    -- Table `mydb`.`Action`
    -- -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS `mydb`.`Action` (
    `id` INT NOT NULL,
    `date` DATE NULL,
    `Survey_id` INT NOT NULL,
    `State_id` INT NOT NULL,
    `Role_id` INT NOT NULL,
    PRIMARY KEY (`id`, `Survey_id`, `State_id`, `Role_id`),
    INDEX `fk_Action_Survey1_idx` (`Survey_id` ASC) VISIBLE,
    INDEX `fk_Action_State1_idx` (`State_id` ASC) VISIBLE,
    INDEX `fk_Action_Role1_idx` (`Role_id` ASC) VISIBLE,
    CONSTRAINT `fk_Action_Survey1`
        FOREIGN KEY (`Survey_id`)
        REFERENCES `mydb`.`Survey` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Action_State1`
        FOREIGN KEY (`State_id`)
        REFERENCES `mydb`.`State` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_Action_Role1`
        FOREIGN KEY (`Role_id`)
        REFERENCES `mydb`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
        ENGINE = InnoDB;

    INSERT INTO mydb.Role (id, name) VALUES (1, 'Expert');
    INSERT INTO mydb.Role (id, name) VALUES (2, 'User');
    SET SQL_MODE=@OLD_SQL_MODE;
    SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
    SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


```

## RESTfull сервіс для управління даними

RESTfull API для управління даними таблиці Survey створеної в MySQL 
було створено за допомогою фреймворку Espress.js. 
RESTfull API представляє собою CRUD застосунок. 

### Кореневий файл server.js

```
    const express = require("express");
    const bodyParser = require("body-parser");
    const connection = require("./database");

    const app = express();
    const port = process.env.PORT || 8080;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    const routes = require("./routes");
    routes(app);

    app.listen(port, () => {
    console.log(`App listen on port ${port}`);
    });
```

### Підключення бази даних database.js

```
    const mysql = require("mysql2");

    const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1111",
    database: "mydb",
    });

    connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database!');
    }
    });

    module.exports = connection;

```

### Routers route.js
```
   "use strict";

    module.exports = (app) => {
    const users = require("./controller");

    app.route("/users").get(users.getAll);
    app.route("/user/:id/:role_id").get(users.get);
    app.route("/users/add").post(users.add);
    app.route("/user/update/:id/:role_id").patch(users.update);
    app.route("/user/delete/:id/:role_id").delete(users.delete);
};
```

### Контроллери controller.js

```
   "use strict";

    const db = require("./database");

    exports.getAll = (req, res) => {
    const query = `SELECT * FROM User`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.sendStatus(404);
        res.status(200).json(result);
    });
    };

    exports.get = (req, res) => {
    const { id, role_id } = req.params;
    if (!(id && role_id)) return res.status(400).json("Id and roleId required");
    const query = `SELECT * FROM User WHERE id=${id} and Role_id=${role_id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.sendStatus(404);
        res.status(200).json(result[0]);
    });
    };

    exports.add = (req, res) => {
    const { firstname, lastname, email, id, Role_id} = req.body;
    if (!(firstname && lastname && id && Role_id))
        return res.status(400).json("Firstname, lastname, id and role id are required");
    db.query(`SELECT * FROM user WHERE id=${id} AND Role_id=${Role_id}`, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length !== 0)
        return res.status(404).json(`User with id ${id} exists`);
        const query =
        "INSERT INTO `user`(`firstname`, `lastname`, `email`, `id`, `Role_id`) VALUES('" +
        firstname +
        "', '" +
        lastname +
        "', '" +
        email +
        "', '" +
        id +
        "', '" +
        Role_id +
        "')";
        db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json(`User with id ${id} was created`);
        });
    });
    };

    exports.update = (req, res) => {
    const { id, role_id } = req.params;
    if (!(id && role_id)) return res.status(400).json("Id and roleId required");
    const { firstname, lastname, email } = req.body;

    if (!(firstname || lastname || email)) {
        return res.status(400).json("Required firstname, lastname, or email");
    }

    let updateQuery = "UPDATE user SET ";
    const updateFields = [];

    if (firstname) {
        updateFields.push(`firstname='${firstname}'`);
    }
    if (lastname) {
        updateFields.push(`lastname='${lastname}'`);
    }
    if (email) {
        updateFields.push(`email='${email}'`);
    }

    updateQuery += updateFields.join(', ') + ` WHERE id=${id} AND Role_id=${role_id}`;

    db.query(updateQuery, (err, result) => {
        if (err) {
        return res.status(500).json(err);
        }
        if (result.affectedRows === 0) {
        return res.status(404).json("No user with this id and role_id");
        }
        res.status(200).json(`User with id ${id} and Role_id ${role_id} was updated`);
    });
    };


    exports.delete = (req, res) => {
    const { id, role_id } = req.params;
    if (!(id && role_id)) return res.status(400).json("Id and roleId required");
    const query = `DELETE FROM user WHERE id=${id} and Role_id=${role_id}`;
    db.query(`SELECT * FROM user WHERE id=${id} and Role_id=${role_id}`, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0)
        return res.status(404).json("No user with this id");
        db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(`User with id ${id} and roleId ${role_id} was deleted`);
        });
    });
    };
```