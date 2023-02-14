function generate(){
    let quotes = {
        "― Jules Renard":'“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
        "― Patrick McGoohan":'“I am not a number; I am a free man.',
        "― Johann von Goethe":'“The best slave is the one who thinks he is free.”',
        "― John O'Callaghan":'“I am more than what they say I am.”',
        "― Ogwo David Emenike":'“Education is for freedom - freedom from mental slavery.”',
        "-Maya Angelo":'"The truth is, no one of us can be free until everybody is free."'
    };

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}