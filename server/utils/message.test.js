var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',() => {
    it('should generate the correct message object',() => {
        var from = 'Dolan';
        var text = 'Baltimore is a city.'
        var msg = generateMessage(from,text);

        expect(msg.createdAt).toBeA('number');
        expect(msg).toInclude({from,text});        
    });
})
