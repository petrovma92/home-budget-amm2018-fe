<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm card">
        <div class="card-body">
          <h3 class="card-title">Create Account</h3>
          <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
          <b-alert :show="showSuccess" variant="success">User {{username}} has been registered! Would you like to <router-link to="/login">log in</router-link>?</b-alert>
          <br>
          <form id="register">
            <div class="form-group">
              <label for="name">Name: </label>
              <input v-model="name" name="name" id="name">
            </div>
            <div class="form-group">
              <label for="description">Description: </label>
              <input v-model="description" name="description" id="description">
            </div>
            <div class="form-group">
              <label for="value">Value: </label>
              <input v-model="value" @change="checkPwd" type="number" name="value" id="value">
              <!--<small :show="pwdError != null" class="form-text text-error">{{pwdError}}</small>-->
            </div>
            <!--<div class="form-group">-->
              <!--<label for="pwd1">Repeat password: </label>-->
              <!--<input v-model="password1" @change="checkPwd" type="password" id="pwd1">-->
            <!--</div>-->
            <!--<b-btn :disabled="pwdError != null" @click="register" variant="info" class="m-1">Register</b-btn>-->

          </form>
        </div>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewAccount',
  data () {
    return {
      showAlert: false,
      showSuccess: false,
      errorText: '',
      pwdError: null,
      name: '',
      description: '',
      value: ''
    }
  },
  methods: {
    checkPwd () {
      this.pwdError = null
      if (this.password !== this.password1) {
        this.pwdError = 'Passwords do not match'
      }
    },
    register () {
      console.log('IMPLEMENT ME')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  text-align: right;
}

div.container-fluid {
  margin-top: 10rem;
}

div.card {
  max-width: 34em;
}

.text-error {
  color: red;
}
</style>
