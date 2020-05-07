const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const { service,  user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
    service,
    
    auth: { user,pass },
});

transport.use('compile', hbs({
    viewEngine: 'handlebars',
    viewEngine: {
        extName: '.hbs',
        partialsDir: path.resolve('./src/resources/mail/'),
        layoutsDir: path.resolve('./src/resources/mail/'),
        defaultLayout: undefined, 
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
}));

module.exports = transport; 