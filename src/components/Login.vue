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
        <button v-on:click="loginbtn" type="button" class="form-control btn btn-info">登录</button>
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
    }
  },
  methods: {
    loginbtn() {
      axios.get("/users.json")
      .then(res=>{
        var result = res.data;
        var newResult = []
        for(var k in result){
          newResult.push(result[k]);
        }
        var nowLogin = newResult.filter((item)=>{
          return item.email == this.email && item.password == this.password
        })
        // console.log(nowLogin)
        if(nowLogin.length > 0){
          // nowLogin[0].email
          // 登录了
          this.$store.commit('nowIsLogin',true)
          // 用户的email
          this.$store.commit('setLoginIng',nowLogin[0].email);
          this.$router.push('/home');
        }
      })
      .catch(err=>{
        console.log('出错了啊aaaaaaaaaaaaa')
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
