type Member = { name: string }
const getMemberName = (string?: Member) => {
  // !でnull,undefinedではない
    console.log(string!.name);
};

getMemberName({ name: "田中" });

// 例２割り当ての強制
let memberName!: string;

const addName = (val: string) => {
  memberName = val;
}

addName("大野");

console.log(memberName);