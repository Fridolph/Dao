const chineseDigits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

function toChineseNumber(value) {
  if (value <= 10) {
    return value === 10 ? '十' : chineseDigits[value]
  }

  if (value < 20) {
    return `十${chineseDigits[value % 10]}`
  }

  if (value < 100) {
    const tens = Math.floor(value / 10)
    const ones = value % 10
    return `${chineseDigits[tens]}十${ones === 0 ? '' : chineseDigits[ones]}`
  }

  return String(value)
}

export const daoDeJingChapters = Array.from({ length: 81 }, (_, index) => {
  const number = index + 1
  const numberLabel = toChineseNumber(number)
  const slug = `chapter-${String(number).padStart(2, '0')}`

  return {
    number,
    numberLabel,
    slug,
    title: `道德经第${numberLabel}章`,
    path: `/daoism/texts/dao-de-jing/${slug}`,
    aliases: [`老子第${numberLabel}章`, `dao de jing chapter ${number}`],
    status: number === 1 ? 'drafted' : 'placeholder'
  }
})
