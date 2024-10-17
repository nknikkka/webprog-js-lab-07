const allUsers = [
    { name: "Moore Hensley", friends: ["Sharron Pace"] },
    { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] },
    { name: "Ross Vazquez", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"] },
    { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
    { name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] },
    { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"] },
    { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] },
];
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};

const outputDiv1 = document.getElementById("outputDiv1");
const result1 = getUsersWithFriend(allUsers, "Briana Decker");
const result2 = getUsersWithFriend(allUsers, "Goldie Gentry");
const result3 = getUsersWithFriend(allUsers, "Adrian Cross");

outputDiv1.innerHTML = `
    <p>Користувачі з другом "Briana Decker": ${JSON.stringify(result1)}</p>
    <p>Користувачі з другом "Goldie Gentry": ${JSON.stringify(result2)}</p>
    <p>Користувачі з другом "Adrian Cross": ${JSON.stringify(result3)}</p>
`;
