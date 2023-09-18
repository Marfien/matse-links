import * as process from "process";

console.log(JSON.stringify(process.env))
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/matse-links/" : "/",
};