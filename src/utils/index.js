export function isNil(value) {
  return value === null || value === undefined;
}

export function getType(value) {
  return typeof value;
}

export function isEmpty(value) {
  const type = getType(value);
  if (type === "string") return value === "";
  if (type === "array") return value.length === 0;
  if (type === "object") return Object.keys(value).length === 0;
  return false;
}
