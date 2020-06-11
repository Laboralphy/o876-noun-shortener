#Noun-shortener

##Description
Do you want to shorten all words inside a noun-group or inside an organization name ?
```
Liquid Crystal Display -> Liq. Cryst. Displ.
Internet Service Provider -> Int. Serv. Prov.
```

This is what this library does.

##Usage
```
npm install @laboralphy/noun-shortener
```
Inside code :
```
const {shorten} = require('@laboralphy/noun-shortener');
console.log(shorten('Liquid Crystal Display'));
```
...will display "Liq. Cryst. Displ."
