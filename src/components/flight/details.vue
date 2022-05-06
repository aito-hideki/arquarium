<template>
  <div class="w-300px flex-shrink-0 bg-purple-50 rounded-xl p-4 pt-11">
    <table v-if="selectedFlight">
      <tr>
        <td class="pr-4">ID</td>
        <td>{{ selectedFlight.id }}</td>
      </tr>
      <tr>
        <td class="pr-4">Transaction</td>
        <td>{{ selectedFlight.arrived ? 'Arrived' : 'Departed' }}</td>
      </tr>
      <tr>
        <td class="pr-4">Airline</td>
        <td>{{ selectedFlight.airline }}</td>
      </tr>
      <tr>
        <td class="pr-4">Flight No.</td>
        <td>{{ selectedFlight.flightNumber }}</td>
      </tr>
      <tr>
        <td class="pr-4">Terminal</td>
        <td>{{ selectedFlight.terminal }}</td>
      </tr>
      <tr>
        <td class="pr-4">Gate</td>
        <td>{{ selectedFlight.gate }}</td>
      </tr>
      <tr>
        <td class="pr-4">Time</td>
        <td>{{ selectedFlight.time }}</td>
      </tr>
      <tr>
        <td class="pr-4">Total Coverage</td>
        <td>{{ selectedFlight.totalCoverage || 'N/A' }}</td>
      </tr>
    </table>
    <span v-else>
      Please select one from the list
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFlights } from '@/use/flights'

const { flightList, currentFlight } = useFlights()

const selectedFlight =
  computed(() => flightList.value[currentFlight.value - 1])
</script>
