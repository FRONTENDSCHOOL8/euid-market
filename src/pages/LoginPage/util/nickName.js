let nicknamePrefix = [
  '꽁이',
  '사랑이',
  '장군이',
  '별이',
  '밤비',
  '밀크',
  '또리',
  '범이',
  '쭈니',
];

function getNickname() {
  return (
    nicknamePrefix[~~(Math.random() * nicknamePrefix.length)] +
    ~~(Math.random() * 9999)
  );
}

export { getNickname };
