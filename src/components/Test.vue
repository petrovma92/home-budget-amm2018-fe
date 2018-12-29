
<!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@4/dist/css/bootstrap.min.css" rel="stylesheet">-->

<!--<link href="https://cdn.jsdelivr.net/npm/pc-bootstrap4-datetimepicker@4.17/build/css/bootstrap-datetimepicker.min.css" rel="stylesheet">-->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <date-picker v-model="datetime" :config="options"></date-picker>
      </div>
    </div>
  </div>
</template>

<script>
// Import required dependencies
// import 'bootstrap/dist/css/bootstrap.css'

// Import this component
import datePicker from 'vue-bootstrap-datetimepicker'

// Import date picker css
// import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'

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
