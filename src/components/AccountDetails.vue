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
              <date-picker v-model="time" type="datetime" :lang="lang" range date-format="YYYY-MM-DD HH:mm"
                           format="YYYY-MM-DD HH:mm"></date-picker>
              <b-btn @click="loadTransactions" variant="light" class="m-1">Get accounts with time range filter</b-btn>
            </div>
          </div>
        </div>
        <template>
          <div class="top"></div>
          <b-table striped hover :items="transactionList" :fields="fields"></b-table>
        </template>
      </div>

    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import DateTime from '@/components/DateTime'
import DatePicker from 'vue2-datepicker'

export default {
  name: 'Home',
  components: {
    DatePicker,
    'datetime': DateTime,
    'menu-bar': MenuBar
  },
  methods: {
    loadTransactions () {
      if (this.time != null && this.time[0] != null && this.time[1] != null) {
        this.$http.get('account/' + this.$route.params.id + '/transactions', {params: {
          from: this.time[0].toISOString(),
          to: this.time[1].toISOString()
        }}).then(resp => {
          this.transactionList = setColorToTransaction(resp.data.content)
        })
      } else {
        this.$http.get('account/' + this.$route.params.id + '/transactions').then(resp => {
          this.transactionList = setColorToTransaction(resp.data.content)
        })
      }
    },
    createAccount () {
      this.$router.push({name: 'NewAccount'})
    }
  },
  data () {
    return {
      time: null,
      transactionList: [],
      lang: {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
        placeholder: {
          date: 'Select Date',
          dateRange: 'Select Date Range'
        }
      },
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
          key: 'createDate',
          label: 'Time',
          sortable: true
        },
        {
          key: 'newValue',
          label: 'Value',
          sortable: true
        },
        {
          key: 'reason',
          label: 'Transaction reason',
          sortable: true
        },
        {
          key: 'currency.code',
          label: 'Currency code',
          sortable: true
        },
        {
          key: 'amount',
          sortable: true
        }
      ],
      errorText: '',
      showAlert: false
    }
  },
  mounted () {
    this.loadTransactions()
  }
}
function setColorToTransaction (transactionList) {
  for (let i = 0; i < transactionList.length; i++) {
    console.log(transactionList[i])
    if (transactionList[i].type === 'withdrawal') {
      transactionList[i]._cellVariants = {type: 'danger'}
    } else if (transactionList[i].type === 'deposit') {
      transactionList[i]._cellVariants = {type: 'success'}
    } else {
      transactionList[i]._cellVariants = {type: 'active'}
    }
  }
  return transactionList
}
</script>
