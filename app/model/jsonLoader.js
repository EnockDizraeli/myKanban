define(['text!model/json/board/colors.json','text!model/json/label/colors.json','text!model/json/label/default.json'],
(boardColors, labelColors, defaultLabels) => {
    let error404 = {
        status: 404,
        message: '404. There is no json file for that key'
    };

    let data = {
        'board/colors' : JSON.parse( boardColors ),
        'label/colors' : JSON.parse( labelColors ),
        'label/default' : JSON.parse( defaultLabels ),
    };

    return {
        load
    };

    function load(key){
        return new Promise((resolve, reject) => {
            if (data[key]){
                resolve( getData(key) );
            }else{
                reject(error404);
            }
        });
    };

    function getData(key){
        return data[key];
    };

});