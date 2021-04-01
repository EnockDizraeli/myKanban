define(['text!components/templates/upcomingFeatures.html'],
(template) => {
    let features = [{
        icon: 'mdi-credit-card-multiple',
        title: 'Card Templates',
        description: 'A card template will allow you to duplicate checklists and labels in an easy and convenient.'
    },{
        icon: 'mdi-attachment',
        title: 'Card Attachments',
        description: 'Attach important files relevant to your cards for extra information.'
    },{
        icon: 'mdi-window-restore',
        title: 'Board Templates',
        description: 'Get a head start in your boards by making a template with all the default cards'
    },{
        icon: 'mdi-download',
        title: 'Importing and exporting boards',
        description: 'Import boards from other apps like trello and jira and export your boards for portability and persistence.'
    },{
        icon: 'mdi-newspaper',
        title: 'Card covers',
        description: 'Add important imagery to your cards with covers for aesthetic purposes and to convey purpose.'
    }];

    return Vue.extend({
        template,
        data() {
            return {
                features
            }
        },
    });
});