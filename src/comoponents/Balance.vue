<template>
  <div class="balance-section">
    <h4>{{ $t('balance') }}</h4>
    <h1>${{ total.toFixed(2) }}</h1>
  </div>
</template>

<script setup>

defineProps({
  total: {
    type: Number,
    required: true,
  },
})

</script>