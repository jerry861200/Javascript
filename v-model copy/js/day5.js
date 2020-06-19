let data = {
  name:'小賴',
  sex:'男',
  age:'20~30',
  favor:['女友','遊戲'],
  member:true
}

let vm = new Vue({
  el:'#app',
  data:data,
  methods:{
    objListHandler(index){
      this.objList[index].num++
    },
    numListHandler(index){
      // this.numList[index]++
      // 這樣是失敗的
      this.$set(this.numberList, index, this.numberList[index]+1)
    }
  },
  watch:{
    number(val,oldVal){
      console.log('number:',val,oldVal)
    },
    obj:{
      handler(val, oldVal){

      },
      deep: true
    },
    numberList(val,oldVal){
      console.log('numberList:', val, oldVal)
    },
    objberList(val,oldVal){
      console.log('objList:', val, oldVal)
    }
  }
});
