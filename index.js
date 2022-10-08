const fs = require('fs');
const agr  = process.argv;

if(agr[2] == "create"){
    fs.writeFileSync(`${agr[3]}`,"");
}

if(agr[2] == "rename"){
    fs.rename("./test.txt",`${agr[3]}`,()=>{});
}

if(agr[2] == "delete"){
    fs.unlink(`${agr[3]}`,()=>{});
}

if(agr[2] == "appendContent"){
    fs.writeFileSync(`${agr[3]}`, `${agr[4]}`);
}