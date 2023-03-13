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

// console.log(222222222, "req module export");
// only 1 time export and keep it inside cache
