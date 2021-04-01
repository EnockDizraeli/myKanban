define([],() => {
    return {
        data() {
            return {
                opened: false
            }
        },
        methods: {
            open(){
                this.opened = true;
                this.$emit('open');
            },
            close(){
                this.opened = false;
                this.$emit('close');
            }
        },
    }
});