module.exports = () => {
  const CHAR = 'λ'
  let anonN = 0

  return (fn) => fn.name || CHAR + ++anonN
}
