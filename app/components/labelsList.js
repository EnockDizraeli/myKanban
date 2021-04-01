define(['text!components/templates/labelsList.html','components/label'],
(template, appLabel) => {
    return Vue.extend({
        template,
        props: {
            card: {
                required: false,
                default: false
            },
            labels: {
                required: true,
            }
        },
        components: {
            appLabel
        }
    });
});