// recursive function to flip the char in string.
function reverseString(str)
{
      // Base case: Return the string if it's empty or has one character
  if (str.length===0)
    {
        return str;
    }  
      // Recursive case: Add the last character to the reverse of the rest
    return str[str.length-1]+reverseString(str.slice(0,-1));
    // this will call the reversestring function to execute till the lenght on string.
}
console.log(reverseString("emit"));
console.log(reverseString("hello")); // Outputs: "olleh"
console.log(reverseString("recursion")); // Outputs: "noisrucer"
console.log(reverseString("a")); // Outputs: "a"
console.log(reverseString("")); // Ouuput blank