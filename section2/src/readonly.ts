type MemberTypeR = {
    readonly name: string,
    age: number
}

const memberR: MemberType = {
    name: "中村",
    age: 22
}

// constだが、objectの中身は変更できてしまうためreadonlyを使用
// memberR.name = "流川";

console.log(memberR.name);