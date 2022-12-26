import Express, { urlencoded } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from './routs/routs.js'; //estoy importando las rutas

const app = Express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(urlencoded({extended: false})); //recuperea la informacion del formulario del mail

app.set('views', join(__dirname, 'view'));
app.set('view engine', 'ejs'); 

app.use(Express.static(join(__dirname, 'public'))); //llamada al css y tido lo que este en la carpeta public
app.use(indexRoutes);//llama al archivo de rutas


app.listen(process.env.PORT || 3000);
console.log('El servidor se esta ejecutando en el puerto ',process.env.PORT || 3000)