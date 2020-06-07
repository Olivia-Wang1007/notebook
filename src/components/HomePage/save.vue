<template>
  <div>



   My name is <input v-model="name">
   <!-- <textarea name="txt" id="" cols="30" rows="10" v-model="txt"></textarea> -->
    <p>
    <button @click="persist">Save</button>
    <button @click="test">test</button>
  </p>
  <h2>{{name}}</h2>

  </div>
</template>

<script>
export default {
data() {
      return {
 name: ''
      }
},
   methods: {
         mounted() {
    if (localStorage.name) {
    //   this.name = localStorage.name;
    //   this.name = $event.target.value;
    //ocalStorage.setItem('name', this.name)
    localStorage.setItem('name', this.name)
    this.name = localStorage.getItem('name')
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    }
  },
    test(){
        console.log("我是test");
    },
    persist() {
     // localStorage.name = this.name;
    //   localStorage.age = this.age;
        localStorage.setItem('name', this.name)
    this.name = localStorage.getItem('name')
      console.log('now pretend I did more stuff...');
    }
   }

}
</script>

<style>

</style>