import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const db = new Sequelize(
    process.env.BD_NOMBRE,
    process.env.BD_USER,
    process.env.BD_PASS ?? '',
    {
        host: process.env.BD_HOST,
        port: '3306',
        dialect: 'mysql',
        define: {
            timestamps: true,
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        operatorAliases: false,
    }
);

// Intentar autenticar la conexión
try {
    await db.authenticate();
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.error('Error al conectar a la base de datos:', error);
}

export default db;
