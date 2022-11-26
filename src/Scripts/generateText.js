function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let generateText = async (text, setText) => {
    const randomString = "&#*+%?£@§$&#*+%?£@§$&#*+%?£@§$"
    const name = text
    let res = "**************************".substring(0, name.length)
    let current = ""
    for (let i = 0; i < name.length; i++) {
        for (let j = 0; j < 10; j++) {
            res = randomString[Math.floor(Math.random() * randomString.length)] + res.substring(0, res.length - 1)
            setText(current + res)
            await sleep(100 / name.length)
        }
        res = res.substring(0, res.length - 1)
        current += name[i]
        setText(current)
    }
}

export default generateText;