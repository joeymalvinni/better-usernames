let generateUsername = require('../index');
let CategoryError = require('../src/CategoryError')
let chai = require('chai')
var expect  = chai.expect;

function isCapitalized(word){
    return word.charAt(0) === word.charAt(0).toUpperCase()
}

chai.Assertion.addProperty('uppercase', function () {
    var obj = this._obj;
    new chai.Assertion(obj).to.be.a('string');
  
    this.assert(
        obj === obj.toUpperCase(), 
        'expected #{this} to be all uppercase', 
        'expected #{this} to not be all uppercase'
    );
});

chai.Assertion.addProperty('capitalized', function () {
    var obj = this._obj;
    new chai.Assertion(obj).to.be.a('string');
  
    this.assert(
        isCapitalized(obj), 
        'expected #{this} to start with an uppercase', 
        'expected #{this} to not start with an uppercase'
    );
});


describe('Random Usernames:', function() {
    it('Should output three items in an array', function(done){
        expect(generateUsername({
            order: ["adjectives", "nouns"],
            separator: '_',
            formatter: (str) => str.split('_'),
        })).to.have.length(2)
        done()
    })
    it('Should add custom words when customWords is enabled', function(done){
        let output = generateUsername({
            order: ["customWord", "adjectives", "nouns"],
            separator: '_',
            formatter: (str) => str.split('_'),
            customWords: true
        })

        expect(output).to.have.length(3);
        expect(output).to.include('customWord');
        done()
    })
    it('Should throw an error when customWords isn\'t enabled and an inputted word is not a category', function(done){
        try {
            generateUsername({
                order: ["wordThatWillThrowError"],
                customWords: false
            })
        } catch (err) {
            expect(err.message).to.eql(new CategoryError('wordThatWillThrowError').message)
            done()
        }
    })
    it('Should correctly format words when specifying a custom formatter', function(done){
        let output = generateUsername({
            order: ["adjectives", "nouns"],
            formatter: (word) => word.toUpperCase()
        })

        expect(output).to.be.uppercase;
        done()
    })
    it('Should use a seperator when specified', function(done){
        let output = generateUsername({
            separator: '__'
        })

        expect(output).to.include('__')
        done()
    })
    it('Should capitalize words when specified', function(done){
        let output = generateUsername({
            order: ['nouns', 'adjectives'],
            capitalize: ['nouns', 'adjectives'],
            separator: '_',
            formatter: (username) => username.split('_')
        })
        
        expect(output).to.have.length(2)
        expect(output[0]).to.be.capitalized
        expect(output[1]).to.be.capitalized
        done()
    })
});