import User from "./moduleExportD";
import { UserType, BlogType } from "./moduleExport";

const user :UserType = {
  id: 1,
  name: "田中"
}

console.log(user.name);

const user2 : BlogType = {
  id: 2,
  name: "テスト"
}

console.log(user2.name);