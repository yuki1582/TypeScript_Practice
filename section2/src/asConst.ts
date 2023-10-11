const memberAC = {
    name: "aaaa",
    age: 25,
} as const

// NG readonly適用
// memberAC.name = "bbb"

const arrayAC = ["aaaa", "bbbb"] as const;

// NG readonly適用 配列の要素を追加できない
// arrayAC.push("cccc");s