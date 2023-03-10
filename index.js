
///LLAMANDO INFO btc
const btcData = async() =>{
  const response = await
    fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}
const ethData = async () => {
  const response = await
    fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}

const bnbData = async () => {
  const response = await
    fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNB&tsym=USD&limit=119&api_key=');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}
const yfiData = async () => {
  const response = await
    fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=YFI&tsym=USD&limit=');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}

const paxgData = async () => {
  const response = await
    fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=PAXG&tsym=USD&limit=119&api_key=');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}

const xmrData = async () => {
  const response = await
    fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=XMR&tsym=USD&limit=119&api_key=');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}

const bnxData = async () => {
  const response = await
    fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BNX&tsym=USD&limit=119&api_key=ac2effc46c41b2b23f3d66af5699f23690e2552d485f411602ef3474f7a577a9');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}

const ltcData = async () => {
  const response = await
    fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=LTC&tsym=USD&limit=119&api_key=');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}



//ERRORES
function checkStatus(response){
  if(response.ok){
    return Promise.resolve(response);
  }else{
    return Promise.reject(new Error(response.statusText))
  }
}

//GRAFICOS
let createBtcChart
let createEthChart
let createBnbChart

async function printBinanceChart() {
  let { times, prices } = await bnbData()

  let binanceChart = document.getElementById('bnb-Chart').getContext('2d');

  let gradient = binanceChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(78,56,216,.5)');
  gradient.addColorStop(.425, 'rgba(118,106,192,0)');
 

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createBnbChart = new Chart(binanceChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(255,255,255)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function () { }
        },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}

async function printEthereumChart() {
  let { times, prices } = await ethData()

  let ethereumChart = document.getElementById('eth-Chart').getContext('2d');

  let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(78,56,216,.5)');
  gradient.addColorStop(.425, 'rgba(118,106,192,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createEthChart = new Chart(ethereumChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(118,106,192,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function () { }
        },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}



async function printBtcChart() {
  let { times, prices } = await btcData()

  let btcChart = document.getElementById('btc-Chart').getContext('2d');

  let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createBtcChart = new Chart(btcChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function () { }
        },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9))',//rgba(
        bodyFontSize: 15,
        bodyFontColor: '#303030'
      }
    }
  });
}

async function updateBitcoinPrice() {
  let { times, prices } = await btcData()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("btc-price").innerHTML = "$" + currentPrice;
  document.getElementById("cornerbtc-price").innerHTML = "$" + currentPrice;
}
async function updateEthereumPrice() {
  let { times, prices } = await ethData()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("eth-price").innerHTML = "$" + currentPrice;
  document.getElementById("cornereth-price").innerHTML = "$" + currentPrice;
}
async function updateBinancePrice() {
  let { times, prices } = await bnbData()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("cornerbnb-price").innerHTML = "$" + currentPrice;
  document.getElementById("cornerbnb-price").innerHTML = "$" + currentPrice;
}
async function updateYearnPrice() {
  let { times, prices } = await yfiData()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("corneryfi-price").innerHTML = "$" + currentPrice;
}
async function updatePaxGoldPrice() {
  let { times, prices } = await paxgData()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("cornerpaxg-price").innerHTML = "$" + currentPrice;
}

async function updateMoneroPrice() {
  let { times, prices } = await paxgData()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("cornerxmr-price").innerHTML = "$" + currentPrice;
}

async function updateBinaryXPrice() {
  let { times, prices } = await paxgData()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("cornerbnx-price").innerHTML = "$" + currentPrice;
}

async function updateLiteCoinrice() {
  let { times, prices } = await ltcData()
  let currentPrice = prices[prices.length - 1].toFixed(2);

  document.getElementById("cornerltc-price").innerHTML = "$" + currentPrice;
}



updateLiteCoinrice()
updateBinaryXPrice()
updateMoneroPrice()
updatePaxGoldPrice()
updateYearnPrice()
updateBinancePrice()
updateBitcoinPrice()
updateEthereumPrice()
printBtcChart()
printEthereumChart()

printBinanceChart()
