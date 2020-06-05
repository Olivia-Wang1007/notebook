<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
      <li>
        <a
          href="#"
          target="_blank"
          rel="noopener"
          >Olivia's note book</a
        >
        <p>这是登陆页面</p>
        <p>测试</p>
      </li>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>