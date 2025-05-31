exports.handler = async () => {
  const pins = [];

  for (let i = 1; i <= 10; i++) {
    const pin = process.env[`PUBLIC_ADMIN_PIN_${i}`];
    if (pin) pins.push(pin);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(pins)
  };
};
