var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',() => {
    it('should generate the correct message object',() => {
        var from = 'Dolan';
        var text = 'Baltimore is a city.'
        var msg = generateMessage(from,text);

        expect(msg.createdAt).toBeA('number');
        expect(msg).toInclude({from,text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from="Dolan";
        var lng=1;
        var lat=2;
        var url='https://www.google.com/maps?q=2,1';

        var msg = generateLocationMessage(from, lat, lng);

        expect(msg.createdAt).toBeA('number');
        expect(msg).toInclude({from,url});
    });
});
