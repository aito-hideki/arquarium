<template>
  <tr
    :class="{ 'bg-green-100' :selected }"
    @click="$emit('selected', flight.id)"
  >
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
          'border-gray-200': type === 'text' || type === 'none'
        }"
        @click.stop
      >
    </td>
  </tr>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FlightType, useFlights } from '@/use/flights'

const props = defineProps<{
  flight: FlightType,
  selected: boolean
}>()
defineEmits<{
  (event: 'selected', id: number): void
}>()

const { getCoverageType } = useFlights()

const totalCoverage = computed({
  get: () => props.flight.totalCoverage,
  set: (input: string) => {
    props.flight.totalCoverage = input
  }
})

const type = computed(() => getCoverageType(totalCoverage.value))
</script>
