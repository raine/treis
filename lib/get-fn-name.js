module.exports = () => {
  const CHAR = 'λ'
  const anonN = 0

  return (fn) => fn.name || CHAR + ++anonN
}
