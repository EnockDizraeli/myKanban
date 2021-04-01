define([],() => {

    class Card{
        constructor(data){
            this.id = data.id;
            this.title = data.title;
            this.description = data.description;

            this.data = data;
        }

        setTitle(title){
            
        }

        setDescription(description){

        }

        setBoard(boardID){

        }

        setList(listID){

        }

        setPosition(position){

        }
    };

    return Card;
});