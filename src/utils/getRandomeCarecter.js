const getRansdomeCarecter = () => {
  const alphabet = "abcdefghigkalmonqrstuvwxyz";
  console.log(alphabet.length);
  return alphabet[Math.floor(Math.random()) * alphabet.length];
};
export default getRandomeCarecter;
