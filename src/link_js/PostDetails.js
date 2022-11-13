import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name : 'PostDetails',

    data(){
        return{
            postId : 0,
            posts : {},
            viewCount : 0,
        };
    },
   
    computed: {
        ...mapGetters(['storageToken','storageUserData']),
    },

methods: {
    loadPost(id) {
        let post = {
               postId : id ,
                };
                axios.post("http://127.0.0.1:8000/api/post/details",post).then((response)=>{
                     
                            if(response.data.post.image != null){
                            response.data.post.image = "http://127.0.0.1:8000/postImage/"+response.data.post.image;
                            }else{
                            response.data.post.image = "http://127.0.0.1:8000/defaultImage/default-profile.png";
                            }
            

                        // console.log(response.data.post);
                        this.posts = response.data.post;
                    });
                    
            },

        back(){
            history.back();
        },

        loadviewCount (){
            let data = {
                user_id : this.storageUserData.id,
                post_id : this.$route.params.newsId,
            };
            axios.post('http://127.0.0.1:8000/api/post/actionlog',data).then((response) => {
                
                this.viewCount = response.data.post.length;
            });
        },
},

mounted() {
        this.loadviewCount();
        this.postId = this.$route.params.newsId;
        this.loadPost(this.postId);

}
}