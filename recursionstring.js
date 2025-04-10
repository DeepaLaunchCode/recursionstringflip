// recursive function to flip the char in string.
function reverseString(str)
{
  if (str.length===0)
    {
        return str;
    }  
    return str[str.length-1]+reverseString(str.slice(0,-1));
    // this will call the reversestring function to execute till the lenght on string.
}
console.log(reverseString("emit"));
console.log(reverseString("Hello"));
