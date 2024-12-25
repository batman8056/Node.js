//it parse the URL string

import url from 'url';

var addr = 'http//localhost:8080/default.htm?year=2024&month=december';

var q = url.parse(addr, true); // url.parse() will parse the address and rsturn the URL Object as property

// console.log(q.host);

console.log(q.pathname);

console.log(q.search);