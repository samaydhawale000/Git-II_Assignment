let name = "naman";
let bag = "";

for (let i = name.length - 1; i >= 0; i--) {
  bag += name[i];
}
if (bag == name) {
  console.log("Yes");
} else {
  console.log("No");
}
