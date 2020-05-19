var propSet = new Set()

propSet.add(1)
propSet.add(2).add(3).add(4).add(3)
propSet.add("test")
console.log(propSet)
var aa = {a: 1, b: 2}
propSet.add(aa)
console.log(propSet.size);
propSet.delete(3)
console.log(propSet.has(3))
console.log(propSet);
propSet.add({a:1, b: 2})
console.log(propSet)



