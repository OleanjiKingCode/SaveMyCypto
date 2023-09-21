export const generateRandom5DigitCode = () => {
  let randomNumber = Math.floor(Math.random() * 100000);
  let code = String(randomNumber).padStart(5, "0");
  return code;
};

