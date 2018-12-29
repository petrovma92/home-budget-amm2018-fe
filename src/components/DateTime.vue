<template>
  <div class="card-body">
    <div class="row">
      <div class="col-xs-2">
        <date-picker v-model="datetime" :config="options"></date-picker>
      </div>
    </div>
  </div>
</template>

<script>
import datePicker from 'vue-bootstrap-datetimepicker'
import 'bootstrap/dist/css/bootstrap.css'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'

export default {
  data () {
    return {
      date: new Date(),
      options: {
        format: 'DD/MM/YYYY HH:mm:ss',
        useCurrent: false
      }
    }
  },
  components: {
    datePicker
  }
}
</script>
