<template>
<div>
  <menu-bar v-on:logout="$emit('logout')" />
  <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
  <div class="d-flex">
    <div class="d-flex p-3 flex-column">
      <b-btn class="btn-success mb-3" @click="createAccount">New account</b-btn>
      <b-btn class="mb-3">Add expense</b-btn>
    </div>
    <div class="d-flex flex-wrap p-3">
      <account-short v-for="{id, name, description, currency, currentValue} in accountList" :key="id"
            :id="id"
            :name="name"
            :description="description"
            :currency="currency.code"
            :amount="currentValue"
      />
    </div>
  </div>
</div>
</template>

<script>
import AccountShort from '@/components/AccountShort'
import MenuBar from '@/components/MenuBar'

export default {
  name: 'Home',
  components: {
    'account-short': AccountShort,
    'menu-bar': MenuBar
  },
  methods: {
    loadAccounts () {
      console.log('IMPLEMENT ME')
    },
    createAccount () {
      this.$router.push({name: 'NewAccount'})
    }
  },
  data () {
    return {
      accountList: [{
        id: 1,
        name: 'one',
        description: 'description for test one',
        currency: 'RUB',
        amount: 10000
      },
      {
        id: 2,
        name: 'two',
        description: 'description for test two',
        currency: 'USD',
        amount: 200
      },
      {
        id: 3,
        name: 'three',
        description: 'description for test three',
        currency: 'EUR',
        amount: 180
      },
      {
        id: 4,
        name: 'four',
        description: 'description for test four',
        currency: 'JPY',
        amount: 16000
      }],
      errorText: '',
      showAlert: false
    }
  },
  mounted () {
    this.loadAccounts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
