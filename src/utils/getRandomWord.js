export default function getRandomWord(wordArr) {
  let randomIdx = Math.floor(Math.random() * wordArr.length)
  return wordArr[randomIdx]
}