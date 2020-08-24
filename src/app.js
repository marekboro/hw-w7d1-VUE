import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            tasks:[
                {description:"Walk through the valley", isHighPriority: false},
                {description:"Harvest Grain", isHighPriority: false},
                {description:"Look at my wife", isHighPriority: false},
                {description:"Shun fancy things like electricity", isHighPriority: false},
                {description:"Milk cows", isHighPriority: false},
                {description:"Feed the chickens", isHighPriority:false},
                {description:"Finish all of my chores", isHighPriority:false},
                {description:"Party like it's 1699", isHighPriority:true}
            ],
            newTask:""
        },
        methods:{
            addNewTask: function(){
                this.tasks.push({
                    description:this.newTask,
                    isHighPriority:this.priority
                }) 
            },
            flipPriority:function(index){
                if (this.tasks[index].isHighPriority){
                    this.tasks[index].isHighPriority=false;
                }
                else {
                this.tasks[index].isHighPriority=true;
                }
            },
            removeTask:function(index){
                this.tasks.splice(index,1);
            },
            convertBool:function(bool){
                if (bool === true){
                    return "High"
                }
                else {
                    return "Low"
                }
            }

            

        }
    });
});
