
/**
 * This module provides the main function that outputs a username.
 * Copyright 2021 © Joey Malvinni
 * @author Joey Malvinni
 *
 * @license
 * Copyright 2021 © Joey Malvinni. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 **/

const fs = require('fs');
const capitalize = require('./src/capitalize')
const CategoryError = require('./src/CategoryError')
const { randomNumber, randomRange } = require('./src/random')
const shuffle = require('./src/shuffle')

let words = {};

let wordCategories = [];

let wordsFolder;

wordsFolder = fs.readdirSync(__dirname + '/data')

for(let i = 0; i < wordsFolder.length; i++){
    words[wordsFolder[i].slice(0, -5).split('_').join(' ')] = JSON.parse(fs.readFileSync(__dirname + '/data/' + wordsFolder[i]).toString());
    wordCategories.push(wordsFolder[i].slice(0, -5).split('_').join(' '));
};

function generateNumber(){
    var number = randomNumber(randomRange(1, 6));
    while(isNaN(number)){
        number = randomNumber(randomRange(1, 6));
    };
    return number;
}

/**
 * Generates a username.
 * @function
 * @param {object} settings - Advanced options can be set here.
 */

function generateUsername(settings){
    settings = settings || {};

    if (typeof(settings.wordFormatter) !== 'function') {
        settings.wordFormatter = (word) => word;
    };

    if (typeof(settings.formatter) !== 'function') {
        settings.formatter = (word) => word;
    };

    if (typeof(settings.separator) !== 'string') {
        settings.separator = '';
    };

    if (!Array.isArray(settings.order)) { 
        settings.order = ["adjectives", "nouns", "numbers"];
    };

    if (!Array.isArray(settings.capitalize)) {
        settings.capitalize = wordCategories;
    };


    var final = '';

    for (let i = 0; i < settings.order.length; i++){
        if (typeof words[settings.order[i]] !== 'undefined' && wordCategories.indexOf(settings.order[i]) !== -1) {
            let index = randomNumber(randomRange(0, words[settings.order[i]].length));
            while(typeof words[settings.order[i]][index] == 'undefined'){
                index = randomNumber(randomRange(0, words[settings.order[i]].length));
            };
            let word = shuffle(words[settings.order[i]])[index].toString();
            if (settings.capitalize.includes(settings.order[i])) {
                word = capitalize(word);
            } else {
                word = word.toLowerCase();
            };
            final += settings.wordFormatter(word);
        } else {
            if (settings.order[i] === 'numbers') {
                final += settings.wordFormatter(generateNumber().toString());
            } else {
                if (settings.customWords) {
                    final += settings.wordFormatter(settings.order[i].toString());
                } else {
                    throw new CategoryError(settings.order[i]);
                };
            };
        };
        if (i !== settings.order.length - 1) final += settings.separator;
    };
    return settings.formatter(final.toString());
};

module.exports = generateUsername;