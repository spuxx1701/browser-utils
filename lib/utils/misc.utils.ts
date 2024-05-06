/**
 * Returns a promise that resolves after the given amount of milliseconds.
 * @param ms The amount of milliseconds.
 *
 * @example
 * await sleep(1000);
 */
export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Checks whether the given value is null, undefined or a string that contains only whitespace characters.
 * @param value The value to check.
 *
 * @example
 * isEmptyOrWhitespace(''); // true
 * isEmptyOrWhitespace(' '); // true
 * isEmptyOrWhitespace(undefined); // true
 * isEmptyOrWhitespace(null); // true
 * isEmptyOrWhitespace('foo'); // false
 * isEmptyOrWhitespace(0); // false
 * isEmptyOrWhitespace({}); // false
 * isEmptyOrWhitespace([]); // false
 * isEmptyOrWhitespace(false); // false
 */
export function isEmptyOrWhitespace(value: unknown) {
  if (typeof value === 'string') {
    return value.trim() === '';
  } else if (value === undefined || value === null) {
    return true;
  } else {
    return false;
  }
}
