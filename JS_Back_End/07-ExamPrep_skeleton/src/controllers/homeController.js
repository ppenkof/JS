import { Router } from "express";

const homeController = Router();
homeController.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

homeController.post('/', (req, res) => {
    const formData = req.body;
    res.send(`Form submitted `);
});

export default homeController;