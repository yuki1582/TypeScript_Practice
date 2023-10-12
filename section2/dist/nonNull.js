"use strict";
const getMemberName = (string) => {
    // !でnull,undefinedではない
    console.log(string.name);
};
getMemberName({ name: "田中" });
// 例２
let memberName;
const addName = (val) => {
    memberName = val;
};
addName("大野");
console.log(memberName);
//# sourceMappingURL=nonNull.js.map