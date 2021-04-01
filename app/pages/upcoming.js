define(['text!pages/templates/upcoming.html','components/mainNavigation','components/upcomingFeatures'],
(template, navigation, upcomingFeatures) => {
    return Vue.extend({
        template,
        components: {
            navigation,
            upcomingFeatures
        }
    });
});