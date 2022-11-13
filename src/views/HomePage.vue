<template>
  <div id="app">
    <div class="d-flex justify-content-center">
      <p class="btn btn-danger me-3" @click="home()" v-if="!tokenStatus">Home</p>
      <p class="btn bg-dark" @click="login()" v-if="!tokenStatus">Login</p>
      <p class="btn bg-dark" @click="logout()" v-if="tokenStatus">Logout</p>
    </div>
    <!-- Whats New Start -->
    <section class="whats-news-area pt-50 pb-20">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <div class="d-flex justify-content-end">
                  <input type="text" class="col-2" v-model="searchKey"  v-on:keyup.enter="search()" style="border:10x;"> 
                  <i class="fas fa-search special-tag mt-2 ms-2 " style="font-size:20px;" @click="search()"></i>
            </div>

            <div class="row d-flex justify-content-between">
              <div class="col-lg-3 col-md-3">
                <div class="section-tittle mb-30">
                  <h3>Whats New</h3>
                </div>
              </div>
              <div class="col-lg-9 col-md-9">
                <div class="properties__button">
                  <!--Nav Button  -->
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        class="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                        @click="categorySearch('')"
                        >All</a
                      >
                      <a
                        class="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                        @click="categorySearch(category.title)"
                        v-for="(category,index) in categoryLists" :key="index"
                        >{{ category.title }}</a>
                    </div>
                  </nav>
                  <!--End Nav Button  -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <!-- Nav Card -->
                <div class="tab-content" id="nav-tabContent">
                  <!-- card one -->
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div class="whats-news-caption">
                    <span class="text-white bg-danger d-flex justify-content-center py-3 my-3 rounded" v-if="!tokenStatus">There is no data , pls! Login first</span>
                    <span v-if="tokenStatus">
                      <div class="row">
                        <div class="mx-auto mt-5 d-flex justify-content-center align-items-center  " style="height:70vh;"
                        v-if="postLists.length == 0">
                          <h3 class="text-muted">There is no data!</h3>
                        </div>

                        <div
                        class="col-lg-6 col-md-6"
                        v-else-if="postLists.length != 0"
                        v-for="(post , index) in postLists"
                        :key="index"
                      >
                        <div class="single-what-news mb-100" @click="postDetails(post.post_id)">
                          <div class="what-img">
                            <img :src="post.image"/>
                          </div>
                          <div class="what-cap">
                            <span class="color1">My News</span>
                            <div class="text-decoration-none">
                              <h4 class="">
                                <a href="details.html">{{ post.title }}</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </span>
                    </div>
                  </div>
                </div>
                <!-- End Nav Card -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Whats New End -->

    <!--Start pagination -->
    <!-- <div class="pagination-area pb-45 text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="single-wrap d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-start">
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow roted"></span
                    ></a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="details.html">01</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">02</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">03</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow right-arrow"></span
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- End pagination  -->
  </div>
</template>

<script src="../link_js/HomePage.js"></script>