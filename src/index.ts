/**
 *
 * @param phoneNumber
 */
export function formatPhoneNumber(phoneNumber: string) {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const [, ...match] = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/) || [];

  return match?.join("-").substring(0, 12) || null;
}

/**
 * Reverses a give string
 *
 * @param str
 */
export function reverseString(str: string) {
  return str.split("").reverse().join("");
}

/**
 * Calculates the factorial of a number.
 * A factorial is a mathematical function that multiplies a
 * given number by all of the numbers below it.
 *
 * @param x
 */
export function factorial(x: number): number {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

/**
 * Checks a string to see if it's a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 *
 * @param str
 */
export function isPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}

/**
 * Finds the longest word in a string.
 *
 * @param str
 */
export function findLongestWord(str: string) {
  let longestWord = "";

  str.split(" ").forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

// EXTRA CREDIT!

/**
 * Fuzzy Search
 *
 * The basic implementation of a fuzzy search algorithm would involve creating
 * a search function that would take in a query string and a list of items to
 * earch through. The search function would then loop through each item in the
 * list and compare the item to the query string. If the item matched the
 * query string, it would be added to a list of results. The search function
 * would then return the list of results.
 *
 * @param query
 * @param items
 */
export function fuzzySearch(query: string, items: string[]) {
  //TODO: Given a list of strings, search and return all words that somewhat match the given query.
}
