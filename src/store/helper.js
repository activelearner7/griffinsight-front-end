export const FIELDS = [
    { name: "General", path: "/articles" },
    { name: "Academics", path: "/academics" },
    { name: "Insti Life", path: "/instilife" },
    { name: "Spotlight", path: "/spotlight" },
    { name: "Opinion", path: "/opinion" },
    { name: "Sci-Tech", path: "/scitech" },
    { name: "About-us", path: "/about"},
];

export function getPath(path) {
    const myArray = path.split("/");
    let i = 1;
    while (myArray[myArray.length - i].length === 0) {
        i++;
    }
    return myArray[myArray.length - i];
}

export function containsAnyDigit(str) {
    return String(str.match(/\d+/));
}
