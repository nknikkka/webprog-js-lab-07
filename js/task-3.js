const sortByDescendingFriendCount = users => users.sort((a, b) => b.friends.length - a.friends.length);

const allUser_s = [
    { name: "Moore Hensley", friends: ["Sharron Pace"], gender: "male" },
    { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"], gender: "female" },
    { name: "Ross Vazquez", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], gender: "male" },
    { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"], gender: "female" },
    { name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"], gender: "male" },
    { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"], gender: "male" },
    { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"], gender: "female" }
];

// Сортуємо користувачів
const sortedUsers = sortByDescendingFriendCount(allUser_s);

// Формуємо текст для виводу через alert
const alertMessage = sortedUsers
    .map(user => `${user.name} (Друзі: ${user.friends.length})`)
    .join("\n");

// Виводимо дані через alert
alert(alertMessage);
