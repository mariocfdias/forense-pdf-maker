const express = require('express')
const ejs = require('ejs')
const path = require('path')
const puppeteer = require('puppeteer')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const moment = require('moment')

moment.locale('pt-br');


app.use(bodyParser.json({limit: '50mb'}))

app.use(cors())
app.use('/public',express.static('public'));
var introduction = ''
var objective = ''
var metodology = ''
var conclusion = ''

app.post('/pdf', async(request, response) => {

    console.log(request.body)
    introduction  = request.body.introduction
    objective  = request.body.objective
    metodology  = request.body.metodology
    conclusion  = request.body.conclusion


    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()

    await page.goto('http://localhost:3001/', {
        waitUntil: 'networkidle0'
    })

    const pdf = await page.pdf({
        printBackground: true,
        format: 'A4',
        margin: { left: '2cm', top: '4cm', right: '1cm', bottom: '2.5cm' }
    })

    await browser.close()

    response.contentType("application/pdf")

    return response.send(pdf)

})

app.get('/', (request, response) => {

    let date = moment().format('LLLL')

    console.log(date)
    console.log(introduction)
    const filePath = path.join(__dirname, "print.ejs")
    ejs.renderFile(filePath, { introduction, objective, metodology, conclusion, date }, (err, html) => {
        if(err) {
            console.log(err)
            return response.send('Erro na leitura do arquivo')
        }
    
        return response.send(html)
    })
   
})

app.listen(3001)
