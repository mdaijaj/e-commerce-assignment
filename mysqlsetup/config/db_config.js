module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Aijaj@#123",
  DB: "e-commerce",
  dialect: "mysql",
  innodb_log_file_size: "512M",
  innodb_strict_mode: 1,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};