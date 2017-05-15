/**
 * reverse a number
 */
function reverseNumber(num)
{
    return (num + "").split("").reverse().join("");
}
alert(reverseNumber(1234)); //4321

/**
 * get all the possible sub string
 *
 * eg:dog -> d,do,dog,o,og,g 
 */
function getSubstrings(string)
{
    var len = string.length;
    var substrings = new Array();
    for(var i = 0; i < len; i++)
    {
        for(var j = i + 1; j <= len; j++)
            substrings.push(string.substring(i,j));
    }
    return substrings;
}
alert(getSubstrings("Owen"));

/**
 * sort the string char order
 */
function sortString(string)
{
    return string.split("").sort().join("");
}
alert(sortString("owen")); //enow

/**
 * set first letter to upper case
 */
function capitalizeFirstLetter(sentence)
{
    var words = sentence.split(" ");
    var result = "";
    for(var i = 0; i < words.length; i++)
    {
        //slice(startIndex): cut string
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        result += words[i] + " ";
    }
    return result;
}
alert(capitalizeFirstLetter("this is owen's first function!"));

/**
 * find the longest word in sentence
 */
function findLongest(sentence)
{
    var words = sentence.split(" ");
    var longest = words[0];
    for(var i = 0; i < words.length - 1; i++)
    {
        if(words[i].length < words[i + 1].length)
            longest = words[i + 1];
    }
    return longest;
}
alert(findLongest("Web Development Tutorial"));

/**
 * find number of vowels(ÔªÒô)
 */
function getNumOfVowels(sentence)
{
    var vowels_list = "aeiouAEIOU";
    var count = 0;
    for(var i = 0; i < sentence.length; i++)
    {
        if(vowels_list.indexOf(sentence[i]) !== -1)
            count++;
    }
    return count;
}
alert(getNumOfVowels("this is a test of vowels count!"));

/**
 * whether a number is prime(ËØÊý)
 */
function isPrime(num)
{
    if(num == 1)
        return false;
    else if(num == 2)
        return true;
    else
    {
        for(var i = 2; i < num; i++)
        {
            if(num % i == 0)
                return false;
        }
        return true;
    }
}
alert(isPrime(8));
alert(isPrime(13));

/**
 * get the nth lowest and nth greatest number from an array
 */
function getNLowestAndGreatest(array, n)
{
    if(n > array.length)
        n = array.length;
    
    var result = [];
    var sorted = array.sort();
    result.push(sorted[n]);
    result.push(sorted[array.length - n]);
    return result;
}
alert(getNLowestAndGreatest([2,5,-1,7,8,12], 4));

/**
 * get the perfect number within 1000.
 *
 * when sum of all it's divisors(exclude itself) is equal to itself, the num is perfect.
 * when half the sum of all it's divisors(include itself) is equal to itself, it's perfect.
 * eg: 6 is perfect, 1 + 2 + 3 = 6 and (1 + 2 + 3 + 6) / 2 = 6
 */
function getPerfectNumber(range)
{
    var perfect = [];
    if(range < 6){}
    else if(range == 6)
        perfect.push(6);
    else
    {
        perfect.push(6);
        for(var num = 7; num <= range; num++)
        {
            var sum = 1;
            for(var i = 2; i < num; i++)
            {
                if(num % i == 0)
                    sum += i;
            }
            if(sum == num)
                perfect.push(num);
        }
    }
    return perfect;
}
alert(getPerfectNumber(4));
alert(getPerfectNumber(6)); //6
alert(getPerfectNumber(30));//6, 28
alert(getPerfectNumber(10000)); //6, 28, 496, 8128

/**
 * get the unique char in sentence, there is no Set in js
 */
function getUniChar(sentence)
{
    var uniChar = sentence[0];
    for(var i = 1; i < sentence.length; i++)
    {
        if(uniChar.indexOf(sentence[i]) == -1)
            uniChar += sentence[i];
    }
    return uniChar;
}
alert(getUniChar("this is a test to get unique char"));

/**
 * count the number of occurrences of each char in string.
 *
 * below is a good example of imitating HashMap in Java
 */
function countCharOccurrence(sentence)
{
    //uniChar is an object
    var uniChar = {};

    /**
     * replace() take two args, (regexp | substr, newSubstr | function)
     *
     * regexp | substr: this is what to be replaced. for regexp, it should be in the following format: [/pattern/flags]
     * within which 'pattern' is the regular expression and 'flags' is any of [g,i,m,u,y](g:global match, i:ignore case),
     * 
     * newSubstr | function: this is used to replace the matched string, if the second arg is function, then result of function
     * is used to replace the matched string.
     */
    var replacedStr = sentence.replace(/\S/g, function(matchedString)
    {
       //uniChar is an object, by using 'uniChar[matchedString]', here we are accessing this object's property 'matchedString'
       uniChar[matchedString] = (isNaN(uniChar[matchedString]) ? 1 : uniChar[matchedString] + 1); 
    });

    //since the second arg does not explicitly return any value, undefined is returned and used to replace the matched string
    alert(replacedStr); //undefinedundefined...
    //replace() method won't change the original string, it generates a new one
    alert(sentence);
    return uniChar;
}
alert(countCharOccurrence("this is owen testing count char occurrences"));

/**
 * bubble sort algorithm
 */
function bubbleSort(array)
{
    for(var i = 0; i < array.length; i++)
    {
        for(var j = 0; j < array.length - i + 1; j++)
        {
            if(array[j] < array[j + 1])
            {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
alert(bubbleSort([3, 1, 5, 6, 2, 8, 4, 7]));