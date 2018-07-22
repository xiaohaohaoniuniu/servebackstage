<template>
  <div id="register" class="container">
    <div class="text-center">
      <img width="200" src="http://image.youzhan.org/e/35/22ccaf4c24ef690f7767e6a3ba5f0.png" alt="">
    </div>
    <form class="input-box">
      <div class="form-group">
        <label for="exampleInputEmail1">邮箱</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="邮箱" v-model="email">
      </div>
      <div class="form-group">
        <label>密码</label>
        <input type="password" class="form-control" placeholder="密码" v-model="password">
      </div>
      <div class="form-group">
        <label>确认密码</label>
        <input type="password" class="form-control" placeholder="确认密码" v-model="confirmPassword">
      </div>
      <div class="form-group">
        <button v-on:click="registerbtn" type="button" class="form-control btn btn-info">注册</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    }
  },
  methods: {
    registerbtn() {
      if (this.password != this.confirmPassword) {
        alert("两次密码不一致");
        return;
      }
      if (this.password == "" || this.confirmPassword == "" || this.email=="") {
        alert("邮箱密码必填");
        return;
      }

      var newUser = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      }
      axios.post('/users.json', newUser)
        .then(res => {
          alert('注册成功，请登录');
          this.$router.push("/login")
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}

</script>
<style>
.container {
  padding-top: 20px;
}

.input-box {
  margin-top: 20px;
}

</style>
