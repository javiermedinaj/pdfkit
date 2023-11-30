import { Router } from 'express';
import buildPdf from '../libs/pdfKit.js';

const myRouter = Router();

myRouter.get('/invoice', (req, res) => {

    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="invoice.pdf"',
    });

    const stream = res;  // Utiliza directamente res como el flujo de respuesta

    buildPdf(
       (data) => stream.write(data),
       () => stream.end()
    );

});


export default myRouter;
