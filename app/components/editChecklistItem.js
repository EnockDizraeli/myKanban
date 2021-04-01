define(['text!components/templates/editChecklistItem.html','store/index'],
(template, store) => {
    let isEmpty = (val) => !(/\S/.test(val));
    return Vue.extend({
        template,
        props: ['item'],
        data() {
            return {
                title: ''
            }
        },
        watch: {
            item(){
                this.loadTitle();
            }
        },
        methods: {
            editItem(){
                if ( isEmpty(this.title) ) 
                    this.loadTitle();
                else 
                    this.dispatchToStore();

                this.close();
            },
            dispatchToStore(){
                let item = Object.assign({}, this.item);
                item.title = this.title;
                store.dispatch('checklistItems/update', item);
            },
            loadTitle(){
                this.title = this.item.title;
            },
            close(){
                this.$emit('close');
            }
        },
        created() {
            this.loadTitle();
        },
    });
});