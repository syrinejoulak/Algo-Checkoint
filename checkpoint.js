function sentenceAnalyser(str) {
    var result = [];
    var myStr = str;
    if (str.length -1 != ".") {
    myStr += "."
    }
    var character = myStr.length;
    var words = myStr.split(" ").length
    var vowels = myStr.match(/[aeiou]/gi).length;
    
    result.push(`Number of characters: ${character}` , `Number of words: ${words}`, `Number of vowels: ${vowels}`)
    return result;
    }
