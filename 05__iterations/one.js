// for


for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);

}


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value,${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop ${i}`);


    }

    let myArray = ["flash", "batman", "superman"]
    // console.log(myArray.length);

    for (let index = 0; index < myArray.length; index++) {
        // const element = myArray[index];
        // console.log(element);

    }

    // break and continue

    for (let i = 0; i <= 20; i++) {
        if (i == 5) {
            console.log("Detected 5");
            break

        }
        console.log(`i value is :${i}`);

    }

    for (let a = 0; a <= 20; a++) {
        if (a == 5) {
            console.log("Detected 5");
            continue

        }
        console.log(`i value is :${a}`);

    }







}