import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Rafael Henrique de Freitas',
        email: 'oraffaudi@gmail.com',
        password_hash: '1234456879897 '
    });
    return res.json(user);
});

export default routes;
