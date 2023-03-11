export const ERROR_MESSAGE = {
  REQUIRE: '必須項目です。',
  EMAIL_FORMAT_ERROR: 'メールアドレスの形式で入力してください。',
  INVALID_CHARACTER: '全て半角英数字、半角記号で入力してください。',
  MINIMUM_LENGTH: '8文字以上入力してください。',
  ALPHABET_REQUIRED: '英字を1文字以上含めてください。',
  DIGIT_REQUIRED: '数字を1文字以上含めてください。',
  CASE_REQUIRED: '大文字小文字をそれぞれ1文字以上含めてください。',
  SYMBOL_REQUIRED: '記号を1文字以上含めてください。'
} as const;


export const Regex = {
  emailFormat: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  containsAlphanumeric: /^[a-zA-Z0-9!-/:-@¥[-`{-~]+$/,
  containsAlphabet: /[a-zA-Z]+/,
  containsNumber: /\d+/,
  containsLowerUpper: /(?=.*[a-z])(?=.*[A-Z])/,
  containsSymbol: /[-!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~]+/,
};

export const COOKIES = {
  MEMBER: 'member'
}