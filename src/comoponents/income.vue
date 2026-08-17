<template>

  <div class="inc-exp-container">
    <div>
      <h4>{{ $t('income') }}</h4>
      <p class="money plus">${{ income }}</p>
    </div>
    <div>
      <h4>{{ $t('expense') }}</h4>
      <p class="money minus">${{ Math.abs(Number(expense)).toFixed(2) }}</p>
    </div>
  </div>

</template>

<script setup>

defineProps({
  income: {
    type: Number,
    required: true,
  },

  expense: {
    type: Number,
    required: true,
  },
})

</script>