<template>
  <div class="add-transaction">
    <h3>{{ $t('addTransaction') }}</h3>
    <form id="form" @submit.prevent="onSubmit">
      <div class="form-control">
        <label for="text">{{ $t('text') }}</label>
        <input
          type="text"
          v-model="text"
          id="text"
          :placeholder="$t('enterText')"
        />
      </div>
      <div class="form-control">
        <label for="amount">{{ $t('amount') }}<br />
          <small>{{ $t('amountHelp') }}</small>
        </label>
        <input
          type="number"
          v-model="amount"
          id="amount"
          :placeholder="$t('enterAmount')"
          step="0.01"
        />
      </div>
      <button type="submit"class="btn"> {{ $t('add') }}</button>
    </form>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
let text = ref('')
let amount = ref('')
let toast = useToast()
let emit = defineEmits([
  'transaction-submitted',
])
 let { locale ,t } = useI18n()

function changeLanguage(lang) {
  locale.value = lang
}
function onSubmit() {
  if (
    !text.value.trim() ||
    amount.value === ''
  ) {
    toast.error(
       t('bothFields')
    )
    return
  }
  let numericAmount =
    Number(amount.value)
  if (Number.isNaN(numericAmount)) {
    toast.error(
       t('amountNumber')
    )
    return
  }
  emit(
    'transaction-submitted',
    {
      text: text.value.trim(),
      amount: numericAmount,
    }
  )
  toast.success(
     t('transactionAdded')
  )
  text.value = ''
  amount.value = ''

}

</script>