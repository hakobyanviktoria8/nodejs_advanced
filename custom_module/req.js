const encrypt = (data) => {
  return "encrypted data";
};

const send = (url, data) => {
  const encryptedData = encrypt(data);
  console.log(
    "Sending daata _ ",
    encryptedData,
    "URL _ ",
    url,
    "DATA _ ",
    data
  );
};

module.exports = { send };
