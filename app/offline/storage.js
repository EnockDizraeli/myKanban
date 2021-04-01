define(['dexie'],
(Dexie) =>  {
    let DATABASE_NAME = "myKanban_v1.1.4";

    const database = (() => {
        let dbName = DATABASE_NAME;
        let db = new Dexie(dbName, {});

        db.version(1).stores({
            boards: 'id, title, created, description, starred, background',
            lists: 'id, boardID, title',
            cards: 'id, listID, boardID, title, created, description',
            checklists: 'id, cardID, title',
            checklistItems: 'id, title, checklistID, completed, index, created',
            labels: 'id, boardID, color, name',
            cardLabels: 'id, cardID, labelID'
        });

        db.version(2).stores({
            boards: 'id, title, created, description, starred, background, closed',
        }).upgrade(trans => {
            return trans;
        })

        db.open();
        return db;
    })();

    function clear(){
        database.delete();
        Dexie.delete(DATABASE_NAME);
    };
    
    database.clear = clear;
    return database;
});