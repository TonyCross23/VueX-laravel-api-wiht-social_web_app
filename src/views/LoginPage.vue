<template>
    <div id="app">
      <div class="d-flex justify-content-center">
        <p class="btn btn-danger me-3" @click="home()" v-if="!tokenStatus">Home</p>
        <p class="btn bg-dark" @click="login()" v-if="!tokenStatus">Login</p>
        <p class="btn bg-dark" @click="logout()" v-if="tokenStatus">Logout</p>
      </div>
      <!-- Login form -->
     <div class="d-flex justify-content-center my-5">
        <form>
            <div class="form-group mb-2">
                <div class="alert alert-danger" role="alert" v-if="userStatus">
                 The Credential Do Not Match!
                  </div>
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="userData.email" v-on:keyup.enter="accountLogin()">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control"  placeholder="Password" v-model="userData.password" v-on:keyup.enter="accountLogin()">
            </div>
            <button type="button" class="btn btn-white my-4" @click="accountLogin()" >Login</button>

          </form>
     </div>

    </div>
  </template>
  
  <script src="../link_js/LoginPage.js"></script>