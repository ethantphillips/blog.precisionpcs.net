export function getValidPins() {
  const allowed = [];
  for (let i = 1; i <= 10; i++) {
    const pin = import.meta.env[`PUBLIC_ADMIN_PIN_${i}`];
    if (pin) allowed.push(pin);
  }
  return allowed;
}
