import { ref } from 'vue'
import { flights } from '@/consts'
import { format } from 'date-fns'
import { useAlert } from './alert'

export type FlightType = {
  id: number,
  time: string,
  arrived: boolean,
  airline: string,
  flightNumber: string,
  terminal: string,
  gate: string,
  totalCoverage: string
}

const currencies = ['$', '£', '¥', '€']

const flightList = ref(flights.map(
  ({ TIME, AIRLINE, FLIGHT_NUMBER, TRANSACTION, TERMINAL, GATE }, idx) => ({
    id: idx + 1,
    time: format(new Date(TIME), 'yyyy/MM/dd HH:MM'),
    arrived: TRANSACTION === 'ARR',
    airline: AIRLINE,
    flightNumber: FLIGHT_NUMBER,
    terminal: TERMINAL,
    gate: GATE,
    totalCoverage: ''
  })
))
const currentFlight = ref(-1)

const getCoverageType = (coverage: string) => {
  if (!coverage) { return 'none' }

  const isCurrency = currencies.findIndex((currency) =>
    (coverage.startsWith(currency) || coverage.endsWith(currency)) &&
    !isNaN(+coverage.replace(currency, ''))
  ) !== -1

  if (isCurrency) { return 'currency' }

  const isPercentage =
    coverage.endsWith('%') && !isNaN(+coverage.replace('%', ''))

  if (isPercentage) { return 'percentage' }

  return 'text'
}

export const useFlights = () => {
  const { updateAlert } = useAlert()

  const selectFlight = (id: number) => {
    currentFlight.value = id

    const { id: flightID, totalCoverage } = flightList.value[currentFlight.value - 1]
    console.log(totalCoverage)
    switch (getCoverageType(totalCoverage)) {
      case 'currency':
        updateAlert(`Currency value detected for row with ID ${flightID} 🤑`)
        break
      case 'percentage':
        updateAlert(`Percentage value detected for row with ID ${flightID} 🤔`)
        break
      case 'text':
        updateAlert(`Percentage value detected for row with ID ${flightID} 🙂`)
        break
      case 'none':
        updateAlert(`No value detected for row with ID ${flightID} 🤷`)
        break
    }
  }

  return {
    flightList,
    currentFlight,
    getCoverageType,
    selectFlight
  }
}
