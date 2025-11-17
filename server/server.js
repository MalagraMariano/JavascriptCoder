const express = require('express');
const cors = require('cors');
const path = require('path');
const { catalogItems } = require('./catalogData');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Opcional: servir imágenes/archivos estáticos si front y server están en la misma máquina
// Ajustar la ruta base según tu estructura de proyecto
app.use('/static', express.static(path.join(__dirname, '..')));

// GET /api/products -> lista completa (soporta ?limit=&category=)
app.get('/api/products', (req, res) => {
    let results = [...catalogItems];

    const { limit, category } = req.query;
    if (category) {
        results = results.filter(p => p.type === category);
    }
    if (limit) {
        results = results.slice(0, Number(limit));
    }

    res.json(results);
});

// GET /api/products/:id -> producto por id
app.get('/api/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const item = catalogItems.find(p => p.id === id);
    if (!item) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(item);
});

app.listen(PORT, () => {
    console.log(`Catalog service running on http://localhost:${PORT}`);
});