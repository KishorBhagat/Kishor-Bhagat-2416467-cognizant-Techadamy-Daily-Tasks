function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

let input = "madam";
if (isPalindrome(input)) {
  console.log("Palindrome.");
} else {
  console.log("Palindrome.");
}
