let app=new Vue({
    el: "#flashcards-app",
    data: {
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },{
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ],
        form:{
            question:"",
            answer:"",
            category:"",
            flipped:false
        }
    },
    methods:{
        //no matter how hard I try, nothing about Vue reactivity makes sense
        //nothing works
        //I can't update the cards by using vue
        //I can only use a wonky work around
        flip: function(key) {
            //alert(app.data.cards[key].flipped);
            /*
            let that={
                question:this.question,
                answer:this.answer,
                category:this.category,
                flipped:this.flipped
            };*/
            let temp=document.getElementById(key).children;
            if (this.flipped) {
                this.flipped=false;
                temp[1].classList.remove("hide");
                temp[2].classList.add("hide");
            //Vue.set(this,"flipped",false);
            //app.data.cards.splice(key,1,that);
            }
            else {
                this.flipped=true;
                temp[2].classList.remove("hide");
                temp[1].classList.add("hide");
                //that.flipped=true;
                //this.flipped=true;
                //Vue.set(app.data.cards[key],'flipped',true);
                //app.data.cards.splice(key,1,that);
            }
        },
        submit: function(){
            this.cards.push(this.form);
        }
    }
})
