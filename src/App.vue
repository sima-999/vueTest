<template>
  <div id="app" class="app2">
    <!-- <div>
    <img src="./assets/logo.png">
    </div> -->
    <div>
      <div>{{myTest(2,2)}}</div>
      <div>1234</div>
      <div>456</div>
      <!-- <small>789</small><small>101112</small> -->
      <span>789</span><span>101112</span>
    </div>
    <div>
      <!-- <vue-drag-tree :data='data' :allowDrag='allowDrag' :allowDrop='allowDrop' :defaultText='"New Node"'
        @current-node-clicked='curNodeClicked' @drag="dragHandler" @drag-enter="dragEnterHandler"
        @drag-leave="dragLeaveHandler" @drag-over="dragOverHandler" @drag-end="dragEndHandler" @drop="dropHandler"
        v-slot="slotProps1">
        <span :class="[slotProps1.isClicked ? 'i-am-clicked' : 'i-am-not-clicked']"></span>
        <span class='i-am-node-name'>{{slotProps1.nodeName}}</span>
      </vue-drag-tree> -->
    </div>
    <div class="tabs">
      <ul>
        <router-link :exact="true" active-class="active" tag="li" to="/">
          <div>TEST</div>
        </router-link>
        <router-link tag="li" :to="{name:'Home'}">
          <div>首页</div>
        </router-link>
        <router-link tag="li" :to="{name:'Categories'}">
          <div>分类</div>
        </router-link>
        <router-link tag="li" :to="{name:'ShoppingCart'}">
          <div>购物车</div>
        </router-link>
        <router-link active-class="active" tag="li" :to="{name:'Me'}">
          <div>我</div>
        </router-link>
      </ul>
    </div>
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import myTest,{obj} from '@/model/test';
import * as niut from '@/model/test';
let s=myTest;

s=5;
  export default {
    name: 'App',
    data() {
      return {
        myTest,
        s,
        slotProps1:{
          isClicked:false,
          nodeName:'123123'
        },
        data: [{
            name: 'Node 0-0',
            id: 0,
            children: [{
                name: 'Node 1-1',
                id: 3,
                children: [{
                    name: 'Node 2-1',
                    id: 4,
                    children: []
                  },
                  {
                    name: 'Node 2-2',
                    id: 10,
                    children: []
                  }
                ]
              },
              {
                name: 'Node 1-2',
                id: 13,
                children: []
              }
            ]
          },
          {
            name: 'Node 0-1',
            id: 14,
            children: []
          }
        ],
      }
    },
    created(){
      let s=obj;
      obj.prop= 123;
      import('@/model/test').then(x=>{
        // debugger;
      })
      // this.myTest=4;
    },
    methods: {
      allowDrag(model, component) {
        if (model.name === 'Node 0-1') {
          // can't be dragged
          return false;
        }
        // can be dragged
        return true;
      },
      allowDrop(model, component) {
        if (model.name === 'Node 2-2') {
          // can't be placed
          return false;
        }
        // can be placed
        return true;
      },
      curNodeClicked(model, component) {
        // console.log('curNodeClicked', model, component);
      },
      dragHandler(model, component, e) {
        // console.log('dragHandler: ', model, component, e);
      },
      dragEnterHandler(model, component, e) {
        // console.log('dragEnterHandler: ', model, component, e);
      },
      dragLeaveHandler(model, component, e) {
        // console.log('dragLeaveHandler: ', model, component, e);
      },
      dragOverHandler(model, component, e) {
        // console.log('dragOverHandler: ', model, component, e);
      },
      dragEndHandler(model, component, e) {
        // console.log('dragEndHandler: ', model, component, e);
      },
      dropHandler(model, component, e) {
        // console.log('dropHandler: ', model, component, e);
      }
    }
  }

</script>

<style>
  /* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.O, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-active {
    transform: translateX(-430px);
    opacity: 0;
  }

  .active {
    color: red;
  }

</style>
