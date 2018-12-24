<template>
<div>
  <menu-bar v-on:logout="$emit('logout')" />
  <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
  <div class="d-flex">
    <div class="d-flex p-3 flex-column">
      <b-btn class="btn-success mb-3" @click="createAccount">New account</b-btn>
      <b-btn class="mb-3">Add expense</b-btn>
    </div>
    <template>
      <b-table striped hover :items="accountList" :fields="fields"></b-table>
    </template>

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
    var accountList = [{
      id: 1,
      type: 'deposit',
      reason: 'description for test one',
      currency: 'RUB',
      amount: 10000
    }, {
      id: 2,
      type: 'deposit',
      reason: 'description for test two',
      currency: 'USD',
      amount: 200
    }, {
      id: 3,
      type: 'withdraw',
      reason: 'description for test three',
      currency: 'EUR',
      amount: 180
    }, {
      id: 4,
      type: 'withdraw',
      reason: 'description for test four description for test four description for test four description for test four description for test four description for test four description for test four description for test four',
      currency: 'JPY',
      amount: 16000
    }, {
      id: 5,
      type: 'deposit',
      reason: 'description for test four description for test four description for test four description for test four description for test four description for test four description for test four description for test four',
      currency: 'JPY',
      amount: 16000
    }, {
      id: 6,
      type: 'unknown',
      reason: '<...>',
      currency: 'XXX',
      amount: 999999
    }]

    for (var i = 0; i < accountList.length; i++) {
      console.log(accountList[i])
      if (accountList[i].type === 'withdraw') {
        accountList[i]._cellVariants = {type: 'danger'}
      } else if (accountList[i].type === 'deposit') {
        accountList[i]._cellVariants = {type: 'success'}
      } else {
        accountList[i]._cellVariants = {type: 'active'}
      }
    }

    return {
      accountList,
      fields: [
        {
          key: 'id',
          sortable: true
        },
        {
          key: 'type',
          sortable: true
        },
        {
          key: 'reason',
          label: 'Transaction reason',
          sortable: true
        },
        {
          key: 'currency',
          label: 'Currency code',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        },
        {
          key: 'amount',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        }
      ],
      errorText: '',
      showAlert: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
