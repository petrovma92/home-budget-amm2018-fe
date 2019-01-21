<template>
<div>
  <menu-bar v-on:logout="$emit('logout')" />
  <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
  <div class="d-flex">
    <div class="d-flex p-3 flex-column">
      <b-btn class="btn-success mb-3" @click="createAccount">New account</b-btn>
      <b-btn class="mb-3">Add expense</b-btn>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm p-3">
          <div class="float-left">
          <h5>From:</h5>
          <datetime></datetime>
          </div>
        </div>
        <div class="col-sm p-3">
          <div class="float-right">
          <h5>To:</h5>
          <datetime></datetime>
          </div>
        </div>
      </div>

      <template>
        <div class="top"></div>

        <b-table striped hover :items="accountList" :fields="fields"></b-table>
      </template>
    </div>

  </div>
</div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import DateTime from '@/components/DateTime'

export default {
  name: 'Home',
  components: {
    'menu-bar': MenuBar,
    'datetime': DateTime
  },
  methods: {
    loadAccounts () {
      console.log('IMPLEMENT ME')
    },
    createAccount () {
      console.log('createAccount IMPLEMENT ME')
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
