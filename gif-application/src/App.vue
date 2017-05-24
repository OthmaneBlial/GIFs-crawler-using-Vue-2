<template>
  <div>

  <br><br>
    <div>
      <form  v-on:submit.prevent="searchGifs">
          <div>
            <input
              id = "search"
              placeholder="Search gifs"
              v-model="query"
            ></input>
          <button class="btn btn-primary btn-search" type="submit">Search</button>
        </div>
      </form>
    </div>
      <br><br>


      <div class="row" v-if="allGifs">
        <div class="col-md-4 gif-image" v-for="gif in gifs">
          <img :src="gif" @click="showOneGif(gif)" style="width:700px;height:300px;">
        </div>
      </div>
      <div class="row"  v-if="oneGif">
      <button class="btn btn-warning" style="margin: 5px; " v-on:click="returnToAllGifs">Return to all Gifs</button>
        <div class="col-md-12">
          <img :src="chosenGif" alt="HTML5 Icon" style="width:1700px;height:800px;">
        </div>
      </div>
    </div>


  </div>
</template>

<script>

  export default {
    /**
     * The name of the application.
     */
    name: 'GifApp',

    data() {
      return {
        gifs: [],
        query: "",
        chosenGif: null,
        oneGif: false,
        allGifs: true
      };
    },

    /**
     * The methods of this Vue instance.
     */
    methods: {

      searchGifs() {

        this.gifs = [];
        this.fetchGifs(this.query);

      },

      fetchGifs(query) {
        this.axios.get("http://api.giphy.com/v1/gifs/search?q="+ query +"&api_key=dc6zaTOxFJmzC")
          .then(({data}) => {
            //this.gifs = data.data[0].images.downsized.url;
            //console.log(data.data.length);

            const obj = data.data;

            for ( const key in obj ) {
              //console.log( obj[key].images.downsized.url ); 
              this.gifs.push(obj[key].images.downsized.url);
            }

          });


      },

      showOneGif(gif) {
        this.chosenGif = gif;
        this.allGifs = false;
        this.oneGif = true;

      },

      returnToAllGifs() {

        this.oneGif = false;
        this.allGifs = true;
        this.chosenGif = null;

      },


    },
  }
</script>


<style>

#search {
  width: 1330px;
  height: 40px;
  padding: 5px;
  margin: 3px;
  margin-left: 1%;
  margin-right: 1%;
  font-size: 20px;
}

.btn-search {
  margin-top: 10px;
  width: 50%;
  margin-left: 25%;
  height: 50px;
  font-size: 20px;

}

.gif-image {
  
  padding: 10px;
}

</style>
