define(['text!components/templates/editListTitle.html','store/index'],
(template, store) => {
    let isEmpty = (val) => !(/\S/.test(val));

    return Vue.extend({
        template,
        props: ['list'],
        watch: {
            list(val){
                this.title = this.list.title;
            }
        },
        data() {
            return {
                title: ''
            }
        },
        methods: {
            editList(){
                this.handleValidity();
                this.dispatchToStore();
                this.$emit('blur');
            },
            handleValidity(){
                this.title = ( isEmpty(this.title) ) ? this.list.title : this.title;
            },
            dispatchToStore(){
                let list = Object.assign({}, this.list);
                list.title = this.title;
                store.dispatch('lists/update', list);
            }
        },
        created() {
            this.title = this.list.title;
        }
    });
});