<template>
  <tr>
    <td>{{ flight.id }}</td>
    <td class="text-lg">
      <i
        v-if="flight.arrived"
        class="mdi mdi-login-variant text-green-600"
      />
      <i
        v-else
        class="mdi mdi-logout-variant text-red-600"
      />
    </td>
    <td>{{ flight.airline }}</td>
    <td>{{ flight.flightNumber }}</td>
    <td>{{ flight.terminal }}</td>
    <td>{{ flight.gate }}</td>
    <td>{{ flight.time }}</td>
    <td>
      <input
        v-model="totalCoverage"
        class="outline-none border rounded-md py-1 px-2"
        :class="{
          'bg-green-400 text-green-50 border-green-400': type === 'currency',
          'bg-yellow-400 text-yellow-50 border-yellow-400': type === 'percentage',
          'border-gray-200': type === 'text'
        }"
      >
    </td>
  </tr>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FlightType } from '@/use/flights'

const props = defineProps<{
  flight: FlightType
}>()

const currencies = ['$', '£', '¥', '€']

const coverageType = (coverage: string) => {
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

const totalCoverage = computed({
  get: () => props.flight.totalCoverage,
  set: (input: string) => {
    props.flight.totalCoverage = input
  }
})

const type = computed(() => coverageType(totalCoverage.value))
</script>
