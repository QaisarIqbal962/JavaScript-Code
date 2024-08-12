const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const more_heros = ["king", "don"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...more_heros]
// console.log(all_new_heros)


const another_array = [1,2,3,4,[5,4,2],7,8,[2,7,8,[0,8,2]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



