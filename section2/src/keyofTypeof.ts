const SIZE = {
  SMALL: "小",
  MEDIUM: "中",
  LARGE: "大"
} as const

type SizeType = keyof typeof SIZE

const sizeCheck = (size: SizeType) => {
  console.log(size);
}

// key以外の型だとエラー
// sizeCheck("XL");

// valueの方
type Valueof = typeof SIZE[keyof typeof SIZE];
