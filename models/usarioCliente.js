const database = require("../util/database");

module.exports = class UsuarioCliente {
  constructor(
    id,
    nombre,
    apellido,
    cedula,
    telefono,
    direccion,
    correo,
    contrasenia,
    usuario
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.telefono = telefono;
    this.direccion = direccion;
    this.correo = correo;
    this.contrasenia = contrasenia;
    this.usuario = usuario;
  }

  static fetchAll() {
    return database.execute("SELECT * FROM usuariocliente;");
  }

  static post(
    nombre,
    apellido,
    cedula,
    telefono,
    direccion,
    correo,
    contrasenia,
    usuario
  ) {
    console.log( nombre,
      apellido,
      cedula,
      telefono,
      direccion,
      correo,
      contrasenia,
      usuario);
    return database.execute(
      "INSERT INTO usuariocliente (nombre,apellido,cedula,telefono,direccion,correo,contrasenia,usuario) VALUES (?,?,?,?,?,?,?,?)",
      [
        nombre,
        apellido,
        cedula,
        telefono,
        direccion,
        correo,
        contrasenia,
        usuario,
      ]
    );
  };

  static update(
    id,
    nombre,
    apellido,
    cedula,
    telefono,
    direccion,
    correo,
    contrasenia,
    usuario
  ) {
    console.log(
      id,
      nombre,
      apellido,
      cedula,
      telefono,
      direccion,
      correo,
      contrasenia,
      usuario
    );
    return database.query(
      "UPDATE usuariocliente SET nombre = ? , apellido = ? , cedula = ? , telefono = ? , direccion = ? , correo = ? , contrasenia = ?, usuario = ?  WHERE id = ?",
      [
        nombre,
        apellido,
        cedula,
        telefono,
        direccion,
        correo,
        contrasenia,
        usuario,
        id,
      ],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  }

  static delete(id) {
    console.log(id);
    return database.query(
      "DELETE FROM usuariocliente WHERE id = ?",
      [id],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  }

  static logeo(correo,contrasenia) {
    console.log(correo,contrasenia);
    return database.execute("SELECT * FROM usuariocliente WHERE correo = ? AND contrasenia = ?",[correo,contrasenia]);
  };
};
