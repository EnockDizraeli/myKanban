define([],() => {
        var allCharsString = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONOPQRTSUVWXYZ';
        let allChars = allCharsString.split('');

        return function(length){
            var identifier = '';
            for(var i = 0;i < length;i++){
                var randomIndex = Math.floor(Math.random() * allChars.length);
                identifier += allChars[randomIndex];
            }
            return identifier;
        };
});