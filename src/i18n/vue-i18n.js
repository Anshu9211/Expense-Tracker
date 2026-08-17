import { createI18n } from 'vue-i18n'

let messages = {
  en: {
    title: 'Expense Tracker',
    balance: 'Your Balance',
    income: 'Income',
    expense: 'Expense',
    history: 'History',
    addTransaction: 'Add New Transaction',
    text: 'Text',
    amount: 'Amount',
    enterText: 'Enter text...',
    enterAmount: 'Enter amount...',
    amountHelp: '(negative = expense, positive = income)',
    add: 'Add Transaction',
    // delete: 'Delete',
    noTransactions: 'No transactions yet.',
    bothFields: 'Both fields must be filled',
    amountNumber: 'Amount must be a number',
    transactionAdded: 'Transaction added successfully',
   
  },

  fr: {
    title: 'Suivi des dépenses',
    balance: 'Votre solde',
    income: 'Revenus',
    expense: 'Dépenses',
    history: 'Historique',
    addTransaction: 'Ajouter une transaction',
    text: 'Texte',
    amount: 'Montant',
    enterText: 'Entrez le texte...',
    enterAmount: 'Entrez le montant...',
    amountHelp: '(négatif = dépense, positif = revenu)',
    add: 'Ajouter une transaction',
    delete: 'Supprimer',
    noTransactions: 'Aucune transaction pour le moment.',
    bothFields: 'Les deux champs doivent être remplis',
    amountNumber: 'Le montant doit être un nombre',
    transactionAdded: 'Transaction ajoutée avec succès',
   
  },
}

let i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages:messages
})

export default i18n