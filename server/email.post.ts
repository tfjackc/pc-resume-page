// server/api/send-email.post.ts
import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend'
import { useCompiler } from '#vue-email'
import 'dotenv/config';
import { storeToRefs} from "pinia";
import { useDataStore} from "~/store/data_store";
const data_store = useDataStore();
const { name, email, message } = storeToRefs(data_store);


const mailerSend = new MailerSend({
    apiKey: process.env.API_KEY || '',
})

const sentFrom = new Sender('colpitt.jack@gmail.com', 'Jack Colpitt')
const recipients = [
    new Recipient('pnwest.geo@gmail.com', 'Jack Colpitt')
]
export default defineEventHandler(async (event) => {

    // @ts-ignore
    const template: Result | string = await useCompiler('ContactCard.vue', {
        props: {
            url: 'https://localhost:3000/',
            name: name.value,
            email: email.value,
            message: message.value
        }
    })

    // If template is of type Result, extract the string
    const htmlContent = typeof template === 'string' ? template : template.html;

    const options = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setSubject('This is a Subject')
        .setHtml(htmlContent)

    await mailerSend.email.send(options)
    return { message: 'Email sent' }
})