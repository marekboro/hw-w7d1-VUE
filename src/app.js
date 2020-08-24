import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            tasks:[
                {description:"Do homework", isHighPriority: true},
                {description:"Scratch back", isHighPriority: false},
                {description:"Stare at the stars", isHighPriority: false},
                {description:"Listen to music", isHighPriority: false},
                {description:"Stare at the ceiling", isHighPriority: false},
                {description:"Dance till you drop", isHighPriority:false}
            ],
            // newTask:"Feed Chickens" // TEST
            newTask:""
        },
        methods:{
            addNewTask: function(){
                this.tasks.push({
                    description:this.newTask,
                    isHighPriority:false
                }) 
            },
            flipPriority:function(index){
                if (this.tasks[index].isHighPriority){
                    this.tasks[index].isHighPriority=false;
                }
                else {
                this.tasks[index].isHighPriority=true;
                }
            }
            

        }
    });
});
