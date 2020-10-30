Vue.component ('app-progress', {
    props: {
        max: Number,
        val: Number
    }, 
    computed: {
        width () {
            let w = this.val / this.max * 100;
            if (w > 100) {
                w = 100;
            } 
            return {
                width: w + '%'
            }
        }
    },
    template: `
        <div class="progress">
            <div class="progress-bar" v-bind:style="width"></div>
        </div>
    `
}); 


var vm = new Vue ({ 
    el: '#vue',
    data: {
        name: ' ',
        showH2: false,
        nambers: [],
        maxNambers: 10,

    },
    methods: {
        // вычесляются постоянно. Дорого
        addNamber () {
            if (!this.done){
                this.nambers.push (Math.random());
            }
        },
        
    },
    computed: {
        // вычесляемое свойство, только при изменении одного из его свойства. Должно выполняться сразу
        sum () {
            let sum = 0;
            for (let i = 0; i < this.nambers.length; i++) {
                sum += this.nambers[i] ;
            }
            return sum;
        },
        done () {
            return this.nambers.length >=  this.maxNambers
        }
    },
    watch:{
        // используется при отработке асинхронных операций. Например обращение на сервер
    }
})


/**
 * 
 * В " " прописывается по сути код java script-a. А ковычки его обрамляют
 * v-show = "true/false" - показывает или скрывает то где находится
 * 
 * v-if="" - если внутри if будет true, то показываем тег.
 *      можно дополнить <template v-else> <div>...</div> </template>  в доме покажется <div></div> и его содержимое но не покажется <template></template>
 * 
 * v-on:click = ""  (или @click) -  слушает событие. При наступлении исполняет то, что в ковычках
 *       v-on:click.once = ""  - событие осуществляется единожды
 * v-bind:title = "showH2 ? 'Hide' : 'show' "  (или :title = ...)  - позволяет записать динамическое значение в html атрибут
 * v-for = "namber in nambers" - вывод записей массива в тегах в который был добавлен
 *      :key="key" - по умолчанию vue задает значение index. Но лучше ставить id, например user.id
 * v-model = "name"  - для двунаправленного связывания данных с элементами форм input, textarea и select. Переменная "name" принемает введенное в поле значение 
 *      v-model.lazy - срабатывает после смены фокуса.
 * 
 * 
 */