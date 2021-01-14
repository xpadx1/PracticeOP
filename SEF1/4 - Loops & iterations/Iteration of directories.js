const people = {
    Lenin: {born: 1870, died: 1924},
    Hitler: {born: 1889, died: 1945},
    Stalin: {born: 1878, died: 1953},
};

for (let key in people){
    let ages = people[key].died - people[key].born;
    people[key].age = ages
}

console.table(people)





