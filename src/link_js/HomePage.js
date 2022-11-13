import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "HomePage",

  data() {
    return {
      postLists: {},
      categoryLists:{},
      searchKey: "",
      tokenStatus : false,
    };
  },

  computed: {
      ...mapGetters(['storageToken','storageUserData']),
  },

  methods: {
    getAllPost() {
      axios.get("http://localhost:8000/api/allPostlist").then((response) => {


        for( let i=0; i<response.data.post.length; i++){
          if(response.data.post[i].image != null){
            response.data.post[i].image = "http://127.0.0.1:8000/postImage/"+response.data.post[i].image;
          }else{
            response.data.post[i].image = "http://127.0.0.1:8000/defaultImage/default-profile.png";
          }
        }

        this.postLists = response.data.post;
      });

    },

    loadCategory(){
        axios.get("http://127.0.0.1:8000/api/getAllCategory").then((response)=>{
          this.categoryLists =  response.data.category;
        });
  },



  search(){
    let search = {
      key : this.searchKey
    }
    axios.post("http://127.0.0.1:8000/api/allPostSearch",search).then((response)=>{
            for( let i=0; i<response.data.searchData.length; i++){
                if(response.data.searchData[i].image != null){
                  response.data.searchData[i].image = "http://127.0.0.1:8000/postImage/"+response.data.searchData[i].image;
                }else{
                  response.data.searchData[i].image = "http://127.0.0.1:8000/defaultImage/default-profile.png";
                }
              }

              this.postLists = response.data.searchData;
          });
  },

  postDetails(id){
        this.$router.push({
              name:'newsDetails',
              params: {
                  newsId: id,
              },
        });
      },

  categorySearch(searchKey){
      let search = {
        key : searchKey
      }

      axios.post("http://127.0.0.1:8000/api/category/search",search).then((response)=>{
            for( let i=0; i<response.data.result.length; i++){
                if(response.data.result[i].image != null){
                  response.data.result[i].image = "http://127.0.0.1:8000/postImage/"+response.data.result[i].image;
                }else{
                  response.data.result[i].image = "http://127.0.0.1:8000/defaultImage/default-profile.png";
                }
              }


              this.postLists = response.data.result;
          });
      },

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
    
      checkToken(){
          if(this.storageToken != null && this.storageToken != undefined && this.storageToken != ""){
              this.tokenStatus = true
          }else{
            this.tokenStatus = false
          }
      }
    
  },

  mounted() {
    this.checkToken();
    this.getAllPost();
    this.loadCategory();
  },
};