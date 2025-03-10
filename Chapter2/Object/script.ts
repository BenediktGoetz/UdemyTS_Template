const user1 = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};

const user2 = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
};

console.log(user1);
console.log(user2);

function printUser(user: { name: string; age: number; courses: string[] }) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
}

printUser(user1);

function printUserVerbose(user: {
    name: string;
    age: number;
    courses: string[];
}) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
}

printUser(user1);
