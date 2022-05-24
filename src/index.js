/* var database = [
    {
	username:"andy", 
	password: "secret"
},
{
	username: "jess",
	password: "123"
}
];

var newsFeed = [
	{
		username: "andrei",
		timeline: "Vacation"
	},
	{
		username: "fran",
		timeline:"wow"
	},
	{
		username:"cat",
		timeline:"lets play"
	}
];

function isUserValid (username,password){
    for (var i=0; i< database.length; i++){
        if (database[i].username === username &&
            database[i].password === password) {
                return true;
            }
    }
    return false;
}

function signIn (username,password){
    
        if (isUserValid(username,password)) {
                console.log(newsFeed);
            } else {
                alert("Sorrry, wrong username and password!");
            }
    }

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");



signIn (userNamePrompt, passwordPrompt); */




/* var age = prompt("How old are you?");
if (Number(age) < 18){
    alert ("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) === 18){
    alert ("Congratulations on your first year of driving. Enjoy the ride!");
} else if (Number(age) > 18) {
    alert ("Powering On. Enjoy the ride!");
}
 */
/* function checkDriverAge() {
    var age = prompt("How old are you?");
if (Number(age) < 18){
    alert ("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) === 18){
    alert ("Congratulations on your first year of driving. Enjoy the ride!");
} else if (Number(age) > 18) {
    alert ("Powering On. Enjoy the ride!");
}
} */


/* var checkDriverAge() = function {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
} */

/* const somePromise = new Promise (function(resolve, reject){
setTimeout (function(){
    resolve("I did what yiu asked for");
}, 2000);
})

somePromise.then(function(result){
    console.lof(result);
}).catch(function(reasonForRejection){
    console.warn(reasonForRejection);
});

const alwaysFulfilledPromise = new Promise (function (resolve, rej){
    resolve("I always do my");
})
const alwaysRejectedPromise = new Promise(function (resolve,reject){
    reject("I never bother with my promises");
})
const otherPromise = Promise.resolve ("Promise");

otherPromise.then (function(result){
    console.log(result);
})
alwaysFulfilledPromise.then (function (result){
    console.log(result);
})
.catch */ 

/* var todos = [
    "clean room",
    "brush teeth",
    "exersise",
    "study js",
    "eat healthy"
];

var todosLength = todos.length;
var counterOne = 0;
while (counterOne <10) {
    console.log(counterOne);
    counterOne++
}
 */

const answer = +prompt ("How old are you");
console.log (answer+5);
console.log (typeOf (answer));