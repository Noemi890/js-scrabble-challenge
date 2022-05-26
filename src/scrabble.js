class Scrabble {
  constructor(word) {
    this.word = word
    this.lettersPoints = [
      [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
      [['D', 'G'], 2],
      [['B', 'C', 'M', 'P'], 3],
      [['F', 'H', 'V', 'W', 'Y'], 4],
      [['K'], 5],
      [['J', 'X'], 8],
      [['Q', 'Z'], 10]
    ]
    this.multiplierByChar = {
      '{': 2,
      '}': 1,
      '[': 3,
      ']': 1,
    }
  }

  score() {
    let finalScore = 0

    if (this.word === null) {
      return finalScore
    }

    const caseInsensitiveWord = this.word.toUpperCase()

    let multiplier = 1

    for (let i = 0; i < caseInsensitiveWord.length; i++) {
      if (['\t', '\n', ' '].includes(caseInsensitiveWord[i])) {
        return finalScore
      }

      if (this.isMultiplierChar(caseInsensitiveWord[i])) {
        multiplier = this.getMultiplierByChar(caseInsensitiveWord[i])
        continue
      }

      finalScore += this.getPointByChar(caseInsensitiveWord[i]) * multiplier
    }

    console.log('word =>', caseInsensitiveWord, 'Score =>', finalScore)

    return finalScore
  }

  getPointByChar(char) {
    const [, point = 0] = this.lettersPoints.find(([chars]) => chars.includes(char)) || []
    return point
  }

  isMultiplierChar(char) {
    return typeof this.multiplierByChar[char] !== 'undefined'
  }

  getMultiplierByChar(char) {
    return typeof this.multiplierByChar[char] !== 'undefined'
      ? this.multiplierByChar[char]
      : 1
  }
}

module.exports = Scrabble
