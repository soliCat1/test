const dollar = '$'
const euro = '€'
const ruble =  '₽'
const month = '/Month'
const day = '/Day'

const currencyRatio = {
  '$': 1,
  '€': 0.93,
  '₽': 89.67
}

const periodRatio = {
  '/Month': 1,
  '/Day': 0.03
}

let activeCurrency = '$'
let activePeriod = '/Month'

const pricingList = document.querySelector('.pricing__list')

const makeChange = () => {
  const amounts = document.querySelectorAll('.price__amount')
  const currency = document.querySelectorAll('.price__currency')
  const periods = document.querySelectorAll('.price__period')
  currency.forEach(el => {
    el.textContent = activeCurrency
  })
  periods.forEach(el => {
    el.textContent = activePeriod
  })
  amounts.forEach(el => {
    el.textContent = parseInt(el.dataset.price * currencyRatio[activeCurrency] * periodRatio[activePeriod], 10)
  })
}

const initPrices = () => {
  pricingList.addEventListener('click', ({target}) => {
    if (target.classList.contains('price__currency')) {
      if (target.textContent === dollar) {
        activeCurrency = ruble
        makeChange()
      } else if (target.textContent === ruble) {
        activeCurrency = euro
        makeChange()
      }  else if (target.textContent === euro) {
        activeCurrency = dollar
        makeChange()
      }
    } else if (target.classList.contains('price__period')) {
      if (target.textContent === month) {
        activePeriod = day
        makeChange()
      } else {
        activePeriod = month
        makeChange()
      }
    }
  })
}

export {initPrices}

