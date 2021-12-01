function shout(string) {
    return string.toUpperCase();
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function whisper(string) {
    return string.toLowerCase();
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    var cantHear = "I can\'t hear you!"
    var iCanHear = "YES INDEED!"
    var loveYouToo = "I love you, too."
    if (string.toLowerCase(string) === string) {
        return cantHear;
    }
    else if (string.toUpperCase(string) === string) {
        return iCanHear;
    }
    else if ("I love you, Grandma." === string) {
        return loveYouToo;
    }
}