import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            tasks:[
                {description:"Do homework", isHighPriority: true},
                {description:"Dance till you drop", isHighPriority:false}
            ]
        }
    });
});
