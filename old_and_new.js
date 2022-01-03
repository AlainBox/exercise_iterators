// Old Style
const colors = ["yellow", "blue", "red", "orange"];
i = 0;

while (i < colors.length){
    console.log("This is the color: ", colors[i]);
    i++;
}

const colors = ["yellow", "blue", "red", "orange"];
for (let i = 0; i < colors.length; i++){
    console.log("This is the color: ", colors[i]);
}

// New Style
const colors = ["yellow", "blue", "red", "orange"];
colors.forEach(element => console.log("This is the color: ", element));

// 1) The while loop takes 7 lines to write. The for loop takes 4 lines.
// 2) The forEach method only takes 2 lines of code to write.
// 3) The forEach method is way easier to read, because you don't have to read through any loop condition(s).
// 4) You can use the 'for...in' statements for this.
