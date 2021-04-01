define(['text!components/templates/editChecklist.html','store/index'],
(template, store) => {
    let isEmpty = (val) => !(/\S/.test(val));

    return Vue.extend({
        template,
        data() {
            return {
                title: ''
            }
        },
        watch: {
            checklist(){
                this.loadTitle();
            }
        },
        props: ['checklist'],
        methods: {
            saveChecklist(){
                if (isEmpty(this.title)) this.loadTitle();
                else this.dispatchToStore();
                this.close();
            },
            dispatchToStore(){
                let checklist = Object.assign({}, this.checklist);
                checklist.title = this.title;
                store.dispatch('checklists/update', checklist);
            },
            close(){
                this.$emit('close');
            },
            loadTitle(){
                this.title = this.checklist.title;
            }
        },
        created() {
            this.loadTitle();
        },
    });
});