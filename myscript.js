var data = [
{"english":"computer", "chinese":"LAISSE TOMBER 1", "pinyin":"dianao"},
{"english":"i", "chinese":"LAISSE TOMBER 2", "pinyin":"wo"},
{"english":"weather", "chinese":"LAISSE TOMBER 3", "pinyin":"tianqi"}
];

var i=0

function tryme() {
	i = Math.floor(Math.random() * data.length);
	document.getElementById("chinese").innerHTML=data[i]['chinese'];
	document.getElementById("english").innerHTML=data[i]['reveal'];
	document.getElementById("pinyin").innerHTML=data[i]['reveal'];
}

function reveal(mydiv) {
	document.getElementById(mydiv).innerHTML=data[i][mydiv];
}

