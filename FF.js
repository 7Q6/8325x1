//// written by Nikhil 'itsN1X' Pandita for Exit Corp.
//// Day No. = 8326
//// All rights to cope with stress distributed.
//// L0NG%2f::xENNiE.\\\2611


const app = document.getElementById('root');const logo = document.createElement('img');logo.src = 'https://avatars1.githubusercontent.com/u/13474314?s=24';
const Zeus = document.createElement('div');Zeus.setAttribute('class', 'Zeus');


var bb = {
BTC: 0.001,	ETH: 0.1,	LTC: 0.0,	XRP: 0.0,	EOS: 0.7,	BNB: 0.0,	USDT: 2.0,	BCH:0.0,
BSV: 0.000015,	TRX: 2048,	ADA: 0.0,	XLM: 160,	XMR: 0.0,	LEO: 0.0,	DASH:0.0,	NEO:0.00002	
};

var request = new XMLHttpRequest();
request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/', true);
request.onload = function () {
  var datagggg = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    datagggg.forEach(id => {
      const Butch = document.createElement('div');
      Butch.setAttribute('class', 'Butch');

///////////////////////////////////////////////////////////////// main ///

const zz01 = document.createElement('b');
const zz02 = document.createElement('em');
const zz03 = document.createElement('mark');
const zz04 = document.createElement('code');
const zz0b = document.createElement('hr');

////////////////////////////////////////////////////////// definitions ///

zz01.innerText = bb[id.symbol]+'~'+id.symbol;
zz02.innerText = ' = ¶ ' + ((id.price_usd * bb[id.symbol]) * 1000*68.51) + ' ';
zz03.innerText = '  '+(((bb[id.symbol])/id.available_supply)*100) +  ' %.		';
zz04.innerText = ' ' + id.percent_change_1h +' ¦ '+ id.percent_change_24h +' ¦ '+ id.percent_change_7d + ' (:  ß' + id.price_btc +')';

///////////////////////////////////////////////////////// end/of/main/ ///

app.appendChild(Zeus);

      Zeus.appendChild(Butch);
      Butch.appendChild(zz01);
      Butch.appendChild(zz02);
      Butch.appendChild(zz03);
      Butch.appendChild(zz04);
      Butch.appendChild(zz0b);

    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `wuhtf ¬gg`;
    app.appendChild(errorMessage);
  }
}
    const TerrorMessage = document.createElement('marquee');
    TerrorMessage.setAttribute('behavior', 'alternate');
    TerrorMessage.setAttribute('bgcolor', '#42F619');
    TerrorMessage.textContent = '✌ / Please consider voting our Proxy : 3r3333333333 on eOS™ network  : ]  ';
Zeus.appendChild(TerrorMessage);
TerrorMessage.appendChild(logo);
request.send();