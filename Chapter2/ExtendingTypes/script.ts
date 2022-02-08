interface User {
    name: string;
    age: number;
    courses: string[];
}

interface UserExtended extends User {
    permissionLevel?: string;
}

const user1: UserExtended = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permissionLevel: 'Instructor',
};

const user2: UserExtended = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
};

console.log(user1);
console.log(user2);

function printUser(user: User) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
}

printUser(user1);

function printUserVerbose(user: User) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
}

printUser(user1);
