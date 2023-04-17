const app = Vue.createApp({
  data(){
    return{
      newItem:"",
      // 按送出會傳送到空陣列
      todos:[
        {content:'check emails',completed: false}
      ],
      // input 及時輸入的內容
      newTodo:'',
      // newItemHighPriority: false, 如果選項只有兩個可以設定成布林值
    }
  },
  methods:{
    // 按送出會觸發的函式
    addTodo: function(todo){
        if(todo.trim() === ''){
          alert('輸入值不得為空！');
          this.newTodo = "";
          return;
        }
        else {
          // push into 空陣列
        // this = data() 裡面的資料
        this.todos.push({content:todo,completed: false});
        console.log(this.todos);
        this.newTodo = "";
        }
    },
    removeTodo: function(todo){
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  }
});
app.mount("#app");