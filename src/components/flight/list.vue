<template>
  <div class="flight-list border border-green-300 flex-grow flex-shrink overflow-hidden rounded-xl p-4 pr-2">
    <div class="flight-list__contents pr-2">
      <table class="flight-list__table mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th />
            <th>Airline</th>
            <th>Flight No.</th>
            <th>Terminal</th>
            <th>Gate</th>
            <th>Time</th>
            <th class="pl-2">
              Total Coverage
            </th>
          </tr>
        </thead>
        <tbody>
          <flight-list-item
            v-for="flight in flightList"
            :key="flight.id"
            :flight="flight"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFlights } from '@/use/flights'

const { flightList } = useFlights()
</script>

<style lang="scss">
.flight-list {
  &__contents {
    height: calc(100vh - 132px);
    overflow: auto;
  }

  &__table {
    td, th {
      text-align: left;
      padding-right: 16px;
      white-space: nowrap;
      cursor: pointer;
      padding-bottom: 8px;

      &:last-child {
        padding-right: 0;
      }
    }
  }
}
</style>
