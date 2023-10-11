type MemberType = {
    name: string,
    age: number
}

const memberT: MemberType = {
    name: "中村",
    age: 22
}

type MemberHobby = {
    hobby: string
}

type MemberProfile = MemberType & MemberHobby;

const memberInfo: MemberProfile = {
    name: "青木",
    age: 25,
    hobby: "soccker"
};

console.log(memberInfo.hobby);