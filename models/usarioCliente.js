const database = require('../util/database')

module.exports = class UsuarioCliente {
  constructor(
    id,
    nombre,
    apellido,
    cedula,
    telefono,
    direccion,
    email,
    contrasenia,
    usuariocliente
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.telefono = telefono;
    this.direccion = direccion;
    this.email = email;
    this.contrasenia = contrasenia;
    this.usuariocliente = usuariocliente;
  }

  static fetchAll() {
    return database.execute('SELECT * FROM usuariocliente;')
  }

  static post(nombre,apellido,cedula,telefono,direccion,email,contrasenia,usuariocliente){
    console.log(nombre,apellido,cedula,telefono,direccion,email,contrasenia,usuariocliente)
    return database.execute('INSERT INTO usuariocliente (nombre,apellido,cedula,telefono,direccion,email,contrasenia,usuariocliente) VALUES (?,?,?,?,?,?,?,?)', [this.nombre,this.apellido,this.cedula,this.telefono,this.direccion,this.email,this.contrasenia,this.usuariocliente]);
  }
};
