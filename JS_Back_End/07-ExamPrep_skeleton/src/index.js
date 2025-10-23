import express from 'express';
import routes from './routes.js';
import handlebars from 'express-handlebars';
import mongoose, { mongo } from 'mongoose';


const app = express();  

//Connect to DB
try {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'exam_prep_db' 
    });

    console.log('Connected to DB successfuly...')
} catch (error) {
    console.error('Error connecting to DB: ', error.message);
}

//Config handlebars
app.engine('hbs',handlebars.engine({ 
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }   
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Add static middleware
app.use(express.static('src/public'));

//Body parser
app.use(express.urlencoded({ extended: false })); 

//Add routes
app.use(routes);

app.listen(5000, () => {  
    console.log('Server is running on http://localhost:5000...');  
});

