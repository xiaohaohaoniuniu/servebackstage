<template>
  <div id="pizzaheader">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="container">
          <ul class="nav navbar-nav navbar-left">
            <li>
              <router-link to="/">
                <img class="logo" src="http://image.youzhan.org/e/35/22ccaf4c24ef690f7767e6a3ba5f0.png"> 服务预约后台管理
              </router-link>
            </li>
            <li>
              <router-link to="/admin">添加修理厂</router-link>
            </li>
            <li>
              <router-link to="/">修理厂列表</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <!-- 登录成功就不显示 -->
            <li v-show="!isLogin">
              <router-link to="/login"><span class="glyphicon glyphicon-user"></span> 登录</router-link>
            </li>
            <li v-show="!isLogin">
              <router-link to="/register"><span class="glyphicon glyphicon-log-in"></span> 注册</router-link>
            </li>
            <!-- 登录成功显示 -->
            <li v-show="isLogin"><a href="javascript:;">{{nowUser}}</a></li>
            <li v-show="isLogin"><a href="javascript:;" v-on:click="exit">[退出]</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "pizzaheader",
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
    nowUser() {
      return this.$store.state.nowUser
    }
  },
  methods: {
    exit() {
      this.$store.commit('nowIsLogin', false);
      this.$store.commit('setLoginIng', null);
      this.$router.push('/login');
    }
  }
}

</script>
<style scoped>
#pizzaheader {
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
}

#pizzaheader a {
  margin-right: 20px;
}

.logo {
  width: 20px;
}

</style>
