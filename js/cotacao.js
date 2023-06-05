// É preciso fazer um npm install request no terminal

const request = require('request')

const moedas = 'USD-BRL,EUR-BRL,BTC-BRL,ARS-BRL'

const opc = {
        url: `https://economia.awesomeapi.com.br/last/${moedas}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
}

const callback_todas_cotacoes = function(erro, res, body){
    let json = JSON.parse(body)
    console.log(json)
}

const callback_dolar = function(erro, res, body){
    let json = JSON.parse(body)
    cotacao = json.USDBRL['bid']
    data = json.USDBRL['create_date']
    console.log('DOLAR = R$'+cotacao+' data: '+data)
}

const callback_euro = function(erro, res, body){
    let json = JSON.parse(body)
    cotacao = json.EURBRL['bid']
    data = json.EURBRL['create_date']
    console.log('EURO = R$'+cotacao+' data: '+data)
}

const callback_pesoarg = function(erro, res, body){
    let json = JSON.parse(body)
    cotacao = json.ARSBRL['bid']
    data = json.ARSBRL['create_date']
    console.log('PESO ARGENTINO = R$'+cotacao+' data: '+data)
}

const callback_bitcoin = function(erro, res, body){
    let json = JSON.parse(body)
    cotacao = json.BTCBRL['bid']
    data = json.BTCBRL['create_date']
    console.log('BITCOIN = R$'+cotacao+' data: '+data)
}

setInterval(() => {
    request(opc, callback_dolar)
    request(opc, callback_euro)
    request(opc, callback_pesoarg)
    request(opc, callback_bitcoin)
    console.log("\n")
}, 5000);
