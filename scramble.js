/*There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.
Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

P: In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically
Rules/Requirement, return a string where:
1) the first and last characters remain in original place for each word
2) characters between the first and last characters must be sorted alphabetically
3) punctuation should remain at the same place as it started, for example: shan't -> sahn't
Assumptions
1) words are seperated by single spaces
2) only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
3) special characters do not take the position of the non special characters, for example: -dcba -> -dbca 
4) for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
5) ignore capitalisation
Implicit: if string length is less than or equal to 3, return string

E:

D: input is a string, maybe an array to store letters?

A:
Loop through the string to separate and store alphabetic characters and punctuation.
Sort the alphabetic characters.
Rebuild the string by placing the first character, sorted characters, punctuation, and lastly the final character in the proper order.
*/

let p = console.log;
p(scramble_words("professionals")); //'paefilnoorsss'
p(scramble_words("i")); //'i'
p(scramble_words("")); //''
p(scramble_words("me")); //'me'
p(scramble_words("you")); //'you'
p(scramble_words("card-carrying")); //'caac-dinrrryg'
p(scramble_words("shan't")); //"sahn't"
p(scramble_words("-dcba")); //'-dbca'
p(scramble_words("dcba.")); //'dbca.'

// let str = "card-carrying";
// console.log(str.split("").sort());
