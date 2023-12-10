<script setup>
import axios from "axios";
import { NButton } from "naive-ui";
import { ref,computed,onMounted } from "vue";
import Card from "../components/Card.vue";
import paginate from "vuejs-paginate-next";

// const characters = ref(null);

// onMounted(async()=>{
//   const response = await axios.get('https://rickandmortyapi.com/api/character');
//   characters.value = response.data.results;
// });

const dispNum=ref(0);
const characters = ref(null);

  const response = await axios.get('https://rickandmortyapi.com/api/character');
  characters.value=response.data.results;

  const allCharacters=response.data.results.length;
  let maxPage=Math.floor(allCharacters/8)+1;
  if(allCharacters%8===0){
    maxPage=maxPage-1;
  }

  const clickCallback= (pageNum) => {
    dispNum.value=pageNum*8-8;
  }

  const dispCharacters=computed(()=>{
    return characters.value.slice(dispNum.value,dispNum.value+8);
  });



</script>

<template>
  <!-- {{ characters }}
  <div v-for="character in dispCharacters" :key="character.id">
    {{ character.name }}
  </div>
  {{ dispNum }}
  {{ maxPage }} -->
  <div class="container">
    <div v-if="dispCharacters" class="cards">
      <Card v-for="character in dispCharacters" :key="character.id"
       :image="character.image"
       :name="character.name"
      >
      <p>{{ character.location.name }}</p>
      </Card>
    </div>
    <div v-else class="cards spinner">
      <NSpin size="large" />
    </div>
    <div class="button-container">
      <div>
      <paginate
      :page-count=maxPage
      :page-range="5"
      :margin-pages="5"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      >
      </paginate>
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep(.pagination) .page-item{
/**v-deepで子コンポーネントのクラスor要素を指定)**/
  margin: 0 10px;
  cursor: pointer;
}
::v-deep(.pagination) .page-item.active .page-link{
  font-weight: bold;
}
.pagination{
  display: flex;
  list-style-type: none;
  color:white;
}
.container {
    background-color: rgb(27, 26, 26);
    padding: 30px;
    margin-top:100px;
}
.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
.cards h3 {
    font-weight: bold;
}
.cards p {
    font-size: 10px;
}
.jobs {
    display: flex;
    flex-wrap: wrap;
}
.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px
}
.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}
.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>