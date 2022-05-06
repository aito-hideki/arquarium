<template>
  <div class="rounded-xl bg-hex-FFEFDF px-8 py-4">
    {{ alert }}
  </div>
</template>

<script setup lang="ts">
import { useAlert } from '@/use/alert'

const { alert } = useAlert()
</script>
