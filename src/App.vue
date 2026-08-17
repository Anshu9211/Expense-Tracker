<template>
    <div class="language-buttons">
      <button @click="changeLanguage('en')">
      {{ $t('English') }}
      </button>

      <button @click="changeLanguage('fr')">
        Français
      </button>
    </div>
  <Header />  
  <div class="box">
    <div class="container">
      <Balance :total="total" />
      <Income :income="income" :expense="expense"/>
      <Translist :transactions="transactions" @transaction-deleted="handleDeleteTransaction"/>
      <AddTransaction @transaction-submitted="handleTransactionSubmitted"/>

    </div>
  </div>

</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Header from './comoponents/Header.vue'
import Balance from './comoponents/Balance.vue'
import Income from './comoponents/income.vue'
import AddTransaction from './comoponents/addTransaction.vue'
import Translist from './comoponents/Translist.vue'
import { useI18n } from 'vue-i18n'

 let { locale } = useI18n()

function changeLanguage(lang) {
  locale.value = lang
}

let storedTransactions =
  JSON.parse(localStorage.getItem('transactions')) || [
    {
      id: 1,
      text: 'Flower',
      amount: -69.69,
    },
    {
      id: 2,
      text: 'Salary',
      amount: 1087,
    },
    {
      id: 3,
      text: 'Book',
      amount: -14,
    },
    {
      id: 4,
      text: 'Phone',
      amount: 14,
    },
  ]
let transactions = ref(storedTransactions)
watch(
  transactions,
  (newTransactions) => {
    localStorage.setItem(
      'transactions',
      JSON.stringify(newTransactions)
    )
  },
  {
    deep: true,
  }
)

function handleTransactionSubmitted(transactionData) {

  transactions.value.push({
    id: Date.now(),
    text: transactionData.text,
    amount: Number(transactionData.amount),
  })

}

function handleDeleteTransaction(id) { transactions.value = transactions.value.filter( (transaction) => transaction.id !== id)
}
let total = computed(() => {
  return transactions.value.reduce( (acc, transaction) =>  acc + Number(transaction.amount),0)    
})
let income = computed(() => {
  return transactions.value
    .filter((transaction) => Number(transaction.amount) > 0)
    .reduce((acc, transaction) => acc + Number(transaction.amount),0)
    .toFixed(2)

})
 let expense = computed(() => {

  return transactions.value
    .filter((transaction) => Number(transaction.amount) < 0)
    .reduce((acc, transaction) => acc + Number(transaction.amount),0)
    .toFixed(2)

})
</script>