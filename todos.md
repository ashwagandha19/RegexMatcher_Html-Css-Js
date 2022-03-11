// regular expression homework

//TODO 1.1
// The "g" flag matches all occurrences of the searched string, without it we will match only the first occurrence

//TODO 1.2
// We can perform case insensitive search using "i" flag

//TODO 1.3
// "." matches any character except line breaks
// "*" matches 0 or more of the preceding token

//TODO 1.4
// the "+" sign matches one or more of the preceding token
// the "?" sign optionally matches the preceding character, but maximum 1 time
// the "*" sign is a combination of  "?" and "+", it matches all occurrences of the preceding character, but optionally
// ((?:abc(.*))|(?:qqq)){2,4}
// abc.*qqq

//TODO 1.5
// pattern to check abc followed by mno 2 to 4 times => ((?:abc(.*))|(?:mno)){2,4}
//* test: xxxabczzzmnoabceeeeeemnoqqq

//TODO 1.6
// the "^" sign matches any string that starts with the specified characters => syntax: ^abc

//TODO 1.7
// pattern to check strings ending in abc => abc$

//TODO 1.8
// pattern to check exact string abc => ^abc$

//TODO 1.9
// pattern for 6 digits => [0-9]{6}

//TODO 1.10
// pattern for exact 2 chars, 1 space, 4 digits => [A-Za-z]{2}[\s][0-9]{4}
//* ab 1234

//TODO 1.11
//(?:[?/](.*))?
//* test: /abc/e3ed/esd

//TODO 1.12
// pattern for query params => \?(.*)
//* test: https://abc.com/?a1=qwer&a2=asdf

//TODO 1.13
// Check if string contains small caps, digits and uppercase
// pattern (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*
//* test:  dsa12AS.

//TODO 1.14
//* check if string is hex => ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$

//TODO 1.15
//* check if string is hex => ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$

//TODO 1.16
// check if string is a date in format yyyy-mm-dd => ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$
//* test: 2000-01-19

//TODO 1.17
// check if string is email => (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])
//* test: test@test.com

//TODO 1.18 
// check if string is IP address => ^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$ or ^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$
//* test: 192.168.1.0

//TODO 1.19
//regex: \b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b

//TODO 1.20
// check if a string is a signed number or not => ^-?([0]{1}\.{1}[0-9]+|[1-9]{1}[0-9]*\.{1}[0-9]+|[0-9]+|0)$

//TODO 1.21
// \b\d+\b
// ^\s*(\w+)\s*\(\s*(\d+)\D+(\d+)\D+\)\s*$
// test: asd 123 

//TODO 1.22
// check if string is URL => https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url

//TODO 1.23
// extract the domain from an url => ^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)
// test: https://regexr.com/6frfu

//TODO 1.24
// check if string is formatted as an html tag => <(“[^”]*”|'[^’]*’|[^'”>])*>
//* test: <html>

//TODO 1.25
// extract content of all h1 tags => (?<=\>)(?!\<)(.*)(?=\<)(?<!\>) or /(?<=(?!h1|h2|h3|h4|h5|h6)\>)(?!\<)(.+?)(?=\<\/.+?(?=h1|h2|h3|h4|h5|h6))/g
// test: <h1>ABC</h1>

//TODO 1.26
// minimum 8 chars, at least 1uc and 1 lc, and 1 number => ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
//test: Asbasdxz1!

//TODO 1.27
// \?(.*)