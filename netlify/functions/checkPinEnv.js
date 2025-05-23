
exports.handler = async () => {
  const env = process.env;
  const validPins = Object.keys(env)
    .filter(key => key.startsWith("ADMIN_PIN_"))
    .map(key => env[key]);

  return {
    statusCode: 200,
    body: JSON.stringify({ validPins })
  };
};
