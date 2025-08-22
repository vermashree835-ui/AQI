const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// POST /api/login
router.post('/', async (req, res) => {
    try {
        const { idToken } = req.body; // token from frontend
        if (!idToken) return res.status(400).json({ error: 'Missing ID token' });

        // Verify Firebase token
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const { uid, name, email, picture } = decodedToken;

        const db = req.app.locals.db;

        // Check if user exists
        const [rows] = await db.query('SELECT * FROM users WHERE firebase_uid = ?', [uid]);
        let user;
        if (rows.length === 0) {
            // Create new user
            const [result] = await db.query(
                'INSERT INTO users (firebase_uid, name, email, profile_pic) VALUES (?, ?, ?, ?)',
                [uid, name || '', email || '', picture || '']
            );
            user = { id: result.insertId, firebase_uid: uid, name, email, profile_pic: picture };
        } else {
            user = rows[0];
        }

        res.json(user);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});

module.exports = router;
