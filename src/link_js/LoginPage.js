import axios from 'axios';
import { mapGetters } from 'vuex';
export default{
    name:'LoginPage',

    data() {
        return {
            userData : {
                email : '',
                password : '',
            },
            tokenStatus : false,
            userStatus : false,
        };
    },

    computed: {
      ...mapGetters(['storageToken','storageUserData']),
    },

 methods: {
    home(){
        this.$router.push({
          name:'home'
        });
      },

      login(){
        this.$router.push({
          name:'loginPage'
        });
      },

      logout(){
        this.$store.dispatch('setToken',null);
        this.login();
      },

      accountLogin(){
        axios.post("http://127.0.0.1:8000/api/user/login",this.userData).then((response) => {
                if(response.data.token == null){
                    this.userStatus = true;
                }else{
                    this.userStatus = false;
                    this.setUserInfo(response);
                    this.home();
                }
        });

      },

      
      checkToken(){
        if(this.storageToken != null && this.storageToken != undefined && this.storageToken != ""){
            this.tokenStatus = true
        }else{
          this.tokenStatus = false
        }
    },

      
      setUserInfo(response){
        this.$store.dispatch('setToken',response.data.token);
        this.$store.dispatch('setUserData',response.data.user);
    },

 },
 mounted () {
    this.userData = {};
 },

}