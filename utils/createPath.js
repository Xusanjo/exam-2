import path from "path";

const __dirname=import.meta.dirname;

const createViewpath=(page)=>{
    const filePath=path.resolve(__dirname, `${page}.ejs`);
    return filePath;
};

export default createViewpath;