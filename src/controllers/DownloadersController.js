const mailer = require('../modules/mailer');

const Downloader = require('../models/Downloader');

module.exports = {
    async index(req, res) {
        const downloaders = await Downloader.find();
        
        return res.json(downloaders);
    },

    async store(req, res) {
        const downloader = await Downloader.create(req.body);
        const { name, email } =  req.body;

        mailer.sendMail({
            from: 'brainiac@gmail.com',
            to: process.env.RECIPIENT,
            subject: 'Quem baixou meus arquivos!!!',
            template: 'downloader_receive_files',
            context:{ name, email }
        }, (err) => {
            if (err)
                return res.status(400).send({ error: 'Cannot send email' });

            // return res.send();
            return res.json(downloader);
        });

       
    },

    async destroy(req, res) {
        await Downloader.findByIdAndRemove(req.params.id);

        return res.json();
    }
}