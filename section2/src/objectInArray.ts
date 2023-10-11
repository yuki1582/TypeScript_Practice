type objectInArray1 = {
  id: number,
  name: string,
  hobby: string
}[]

type objectInArray2 = {
    [key: string] : string | number
}[]

const members : objectInArray1 = [
    {
      id: 1,
      name: "浅野",
      hobby: "サッカー"
    },
    {
      id: 2,
      name: "伊藤",
      hobby: "バスケットボール"
    }
]

for(const member of members) {
    console.log(`id: ${member.id}, name: ${member.name}`);
}