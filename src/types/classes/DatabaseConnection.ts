class DatabaseConnection {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;

  constructor(
    host: string,
    port: number,
    user: string,
    password: string,
    database: string
  ) {
    this.host = host;
    this.port = port;
    this.user = user;
    this.password = password;
    this.database = database;
  }
}

export { DatabaseConnection };
