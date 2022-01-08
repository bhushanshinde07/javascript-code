var ch,c,count=0,len,i;
ch=prompt("enter a string")
for(i=0;i<=ch.length;i++)
{
    c=ch.charAt(i)
if(c=='a'||c=='A'||c=='e'||c=='E'||c=='i'||c=='I'||c=='o'||c=='O'||c=='u'||c=='U'){
    count++;
}
}
document.write("string is "+ch+"<br>")
document.write("no of vowel in the string are" +count)
