type genObject<T, U> = {
  name: string,
  age: number,
  memo: T,
  value: U
}

const soccerMember: genObject<string, number> = {
  name: "田中",
  age: 22,
  memo: "ありがとう",
  value: 453
}


const basketMember: genObject<number, string> = {
    name: "桜木",
    age: 22,
    memo: 123,
    value: "映画"
}