import { ref } from 'vue'
import { flights } from '@/consts'
import { format } from 'date-fns'

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

export const useFlights = () => {
  const selectFlight = (id: number) => {
    currentFlight.value = id
  }

  return {
    flightList,
    currentFlight,
    selectFlight
  }
}
