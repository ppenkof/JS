import { Router } from "express";

const errorController = Router();

errorController.all('/*path',(req, res) => {
    res.send('URL Not Found');  
});

export default errorController;