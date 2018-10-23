//1.3

const URLify = (str) => {
    return str.trim().replace(/[\s]/g, "%20");
}

export default URLify;