import express from 'express';
import routes from './routes.js';

const app = express();  

//Add static middleware
app.use(express.static('src/public'));

//Body parser
app.use(express.urlencoded({ extended: false })); 

//Add routes
app.use(routes);

app.listen(5000, () => {  
    console.log('Server is running on http://localhost:5000...');  
});

