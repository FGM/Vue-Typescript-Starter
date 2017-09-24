<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <button @click="clicked">Click</button>
    <button @click="parentClicked">Parent click</button>
  </div>
</template>

<script lang="ts">
  import Parent from './Parent';
  import Component from 'vue-class-component';

  // Class name provides component name.
  @Component({})
  export default class Hello extends Parent {
    // Plain properties replace data().
    // message: string = 'Hello Vue';

    // computed() properties are implemented as getters.
    get fullMessage() {
      return `${this.message} from Typescript`;
    }

    created() {
      console.log('Component created');
    }

    // Methods are written as methods too.
    clicked() {
      // Doesn't work (because of ?).
      // super.clicked();

      console.log('Clicked');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
