const sql = require('mssql');

const config = {
  server: process.env.NEXT_PUBLIC_DB_SERVER,
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  database: process.env.NEXT_PUBLIC_DB_DATABASE,
  options: {
    encrypt: process.env.NEXT_PUBLIC_DB_OPTIONS_ENCRYPT === 'true', // Convert to boolean
    trustServerCertificate: process.env.NEXT_PUBLIC_DB_OPTIONS_TRUST_SERVER_CERTIFICATE === 'true', // Convert to boolean
  },
};

async function connect() {
  try {
    await sql.connect(config);
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    // You might want to throw the error here to handle it in the calling code
    throw err;
  }
}

module.exports = {
  connect,
};
