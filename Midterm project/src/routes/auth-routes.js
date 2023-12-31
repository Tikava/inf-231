import { Router } from 'express';
import AuthService from '../services/auth-service.js';
import { authMiddleware } from '../middleware/auth-middleware.js';


const router = Router();
const authService = new AuthService();


router.post('/verifyToken', authMiddleware, (req, res) => {
    res.json({ valid: true, uid: req.user.uid });
});

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userRecord = await authService.signUp(username, email, password);
        res.status(201).json({ message: 'User created', user: userRecord });
    } catch (error) {
        res.status(400).json({ message: 'Sign up failed', error: error.message });
    }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const { user, idToken, error } = await authService.signIn(email, password);
        if (!user) {
            res.status(401).json({ message: 'Login failed', error: error });
        } else {
            req.session.userId = user.uid;
            res.json({ message: 'Login successful', idToken: idToken });
        }
    } catch (error) {
        console.error('SignIn Error:', error); 
        res.status(500).json({ message: 'An error occurred during sign-in', error: 'Internal server error' });
    }
});


router.post('/signout', async (req, res) => {
    try {
        res.json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ message: 'Logout failed', error: error.message });
    }
});

router.post('/reset-password', async (req, res) => {
    const { email } = req.body;
    try {
        await authService.resetPassword(email);
        res.json({ message: 'Password reset email sent' });
    } catch (error) {
        res.status(500).json({ message: 'Password reset failed', error: error.message });
    }
});

export default router;
