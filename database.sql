-- Active: 1680540648917@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT(DATETIME('now'))
);

INSERT INTO users(id, name, email, password, role)
VALUES
    ('u001', 'Jose da Silva', 'joses@hotmail.com', '123123', 'NORMAL'),
    ('u002', 'Matheus dos Santos', 'matheussan@gmail.com', '123123', 'ADMIN'),
    ('u003', 'Joana Batista', 'joanabat@yahoo.com.br', '123123', 'NORMAL'),
    ('u004', 'Vilma Souza', 'vilmasou@outlook.com', '123123', 'NORMAL');