<template>

  <div class="history">
    <h3>{{ $t('history') }}</h3>
    <p v-if="transactions.length === 0" class="no-transactions">{{ $t('noTransactions') }} </p>

    <ul v-else id="list" class="list">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        :class=" transaction.amount < 0 ? 'minus' : 'plus' ">

        <span class="transaction-text"> {{ transaction.text }} </span>

        <span class="transaction-amount">{{ transaction.amount < 0 ? '-' : '+' }} ${{ Math.abs(transaction.amount).toFixed(2) }} </span>
 
        <button class="delete-btn"@click="
            $emit('transaction-deleted',transaction.id) ">X </button>
      </li>
    </ul>
  </div>

</template>

<script setup>

defineProps({
  transactions: {
    type: Array,
    required: true,
  },

})

defineEmits([
  'transaction-deleted',
])

</script>