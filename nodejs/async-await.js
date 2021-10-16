const shopForBeans = () => {
    return new Promise((resolve, reject) => {
        const beanTypes = ["pinto", "garbanzo", "fava", "coffee"];
        setTimeout(() => {
            if (beanTypes.length === 0) {
                reject("Could not find any beans")
            } else {
                let randomIndex = Math.floor(Math.random() * 4);
                let beanType = beanTypes[randomIndex];
                console.log(`2. I bought ${beanType} beans because they were on sale.`);
                resolve(beanType);
            }
        }, 1000);
    });
}

async function getBeans() {
    try {
        console.log(`1. Heading to the store to buy beans...`);
        let value = await shopForBeans();
        console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
    } catch (error) {
        console.log(error);
    }

}

getBeans();
console.log("This statement executes after statement 1 because shopForBeans() due to the await tag.");
console.log("If we remove the await tag, 3. will also get executed before 2 and before these statements.")