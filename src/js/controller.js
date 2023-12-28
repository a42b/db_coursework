"use strict";

const db = require("./database");

exports.getAll = (req, res) => {
  console.log('getAll')
  const query = `SELECT * FROM User`;
  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.sendStatus(404);
    res.status(200).json(result);
  });
};

exports.get = (req, res) => {
  const query = `SELECT * FROM User WHERE id=${req.params.id}`;
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
  const { id, role_id } = req.query;
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