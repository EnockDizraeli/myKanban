define(['text!pages/templates/blog.html','components/mainNavigation'],
(template, navigation) => {
    return Vue.extend({
        template,
        components: {
            navigation
        }
    });
});