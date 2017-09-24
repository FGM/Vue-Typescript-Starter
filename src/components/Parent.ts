import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Parent extends Vue {
  message: string = 'Hey Vue';

  created() {
    console.log('Parent created');
  }

  clicked() {
    console.log('Click from parent');
  }

  parentClicked() {
    console.log('Parent clicked');
  }
}
