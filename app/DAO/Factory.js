define(['DAO/Board','DAO/List','DAO/Card','DAO/Checklist','DAO/ChecklistItem','DAO/Label','DAO/CardLabel'], 
(BoardDAO, ListDAO, CardDAO, ChecklistDAO, ChecklistItemDAO, LabelDAO, CardLabelDAO) => {
    return {
        create
    };

    function create(name){
        switch(name){
            case 'board':
            return new BoardDAO;

            case 'list':
            return new ListDAO;

            case 'card':
            return new CardDAO;

            case 'checklist':
            return new ChecklistDAO;

            case 'checklistItem':
            return new ChecklistItemDAO;

            case 'label':
            return new LabelDAO;

            case 'cardLabel':
            return new CardLabelDAO;
        }
    }
});