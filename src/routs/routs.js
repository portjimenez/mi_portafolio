import {Router} from 'express';
import nodemailer from 'nodemailer';
const route = Router();

route.get('/', (req, res) => res.render('index')); // llamada a la pagina principal
route.get('/about',(req, res)=> res.render('about')); //llama a la pagina about
route.get('/contac', (req,res)=> res.render('contac')); //llama a la pagina de contacto
route.get('/myProyect', (req,res)=> res.render('myProyect')); //llama a la parte de los proyectos

//url para enviar el mail
route.post('/enviar-mail', async (req, res)=> {
    const {mail, msm} = req.body;

   const contentHTML = `
        <h1>informacion</h1>
        <ul>
            <li>Correo: ${mail}</li>
            <li>Mensaje: ${msm}</li>
        </ul>
    `;

    //dar datos de correo
    const transporter = nodemailer.createTransport({
        host: 'mail.eterum.website',
        port: 587,
        secure: false,
        auth: {
            user: 'eterumgt@eterum.website',
            pass: 'epr)?}ngUY6k'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    //enviar el mail
    await transporter.sendMail({
        from: "'Contacto' <eterumgt@eterum.website>",
        to: 'manasesj46@gmail.com',
        subject: 'Alguien te ha contactado',
        html: contentHTML
    });

   res.redirect('/contac');
}); 

export default route;