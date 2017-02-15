var person = {
    firstName: "John",
    lastName: "Smith",
    friends: ["alice", "bob"]
};

var {firstName: fn, lastName, friends} = person;

var {1: secondFriend} = friends;

console.log(secondFriend);
