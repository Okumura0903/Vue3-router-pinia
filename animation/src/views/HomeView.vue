<script setup>
import {ref} from "vue";

//const showText=ref(false);
const inputName=ref("");
const names=ref([]);
const addName=()=>{
  names.value.unshift(inputName.value);
  inputName.value="";
}
</script>

<template>
  <main>
   <!-- <div class="container">
      <Transition name="fade">
        <h1 v-if="showText">Hello World</h1>
        <h1 v-else>Bye World</h1>
      </Transition>
    </div>
    <button @click="showText=!showText">Toggle</button> -->
    <div class="container">
      <input type="text" placeholder="Add person to invite..." v-model="inputName" @keypress.enter="addName">
      <button @click="addName">Add</button>
      <TransitionGroup name="invitees">
        <li v-for="name in names" :key="name" @click="names.splice(names.indexOf(name),1)">{{ name }}</li>
      </TransitionGroup>
    </div>
  </main>
</template>

<style scoped>
  /* .fade-enter-from{
    opacity: 0;
  }
  .fade-enter-to{
    opacity: 1;
  }
  .fade-enter-active{
    transition:all 0.5s ease;
  }
  .fade-leave-from{
    opacity: 1;
  }
  .fade-leave-to{
    opacity: 0;
  }
  .fade-leave-active{
    transition:all 0.5s ease;
  }
  .container{
    position: relative;
  }
  h1{
    position: absolute;
  }
  button{
    margin-top: 50px;
  } */

  main{
    padding: 30px;
  }
  .container{
    max-width: 300px;
    margin: 0 auto;
  }
  .container input{
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgba(128,128,128,0.13);
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.12);
  }
  ul{
    display: inline;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
    width: 300px;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 10px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.12);
    text-align: center;
    background-color: white;
  }
  /* TRANSITION GROUP */
  .invitees-enter-from{
    opacity: 0;
    transform: scale(0.5);
  }
  .inbvitee-enter-to{
    opacity: 1;
    transform: scale(1);
  }
  .invitees-enter-active{
    transition: all 0.5s ease;
  }

  /* .invitees-leave-from{
    opacity: 1;
    transform: scale(1);
  }
  .inbvitee-leave-to{
    opacity: 0;
    transform: scale(0.5);
  } */

  .invitees-leave-active{
    transition: all 0.5s ease;
    position: absolute;
  }

  .invitees-move{
    transition: all 0.5s ease;
  }

</style>