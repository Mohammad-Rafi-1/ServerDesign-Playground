
// install require libraries 
const fs = require("fs");


// read file  sync and write file syn
function ReadsyncWriteSync(){

    console.log("Reading File Synchronously");
    const data=fs.readFileSync("source.txt",{encoding:'utf8',flag:"r"})
    console.log("writing file synchronously")
    fs.writeFileSync("destination.txt",data,{encoding:"utf8",flag:"w"})
    console.groupCollapsed("Operation Completed")

}


// read  file sync and write file async

function ReadSyncWriteAsync(){
    console.log("Reading File sync")
    const data= fs.readFileSync("source.txt",{encode:"utf8",flag:"r"})
    console.log("Writing file Async")
    fs.writeFile("destination.txt",data,{encoding:"utf8",flag:"w"},(err, data)=>{
        if(err){
            console.log("Error occured while writing the file Asynchronously")
        }
        else{
            console.log("write Asycn operation done - successful")
        }
    })

    console.log("I am last instruction of the code")

}



// read file Asycn and write file sync

function ReadAsyncWriteSync(){
    
    console.log("Reading File Asynchronously")
    fs.readFile("source.txt",{encoding:'utf8',flag:'r'},(err,data)=>{

        if (err){
            console.log("error in reading file Asynchronously")
        }
        else{

            fs.writeFileSync("destination.txt",data,{encoding:'utf8',flag:"w"})
            console.log("Write file sync completed")
        }
    })
    console.log("I am last instruction of the code")

    
}


// read file async and write file async

function ReadAsyncWriteAsync(){

    console.log("Reading File Asynchronously")
    fs.readFile("source.txt",{encoding:'utf8',flag:'r'},(err,data)=>{

        if (err){
            console.log("error in reading file Asynchronously")
        }
        else{

            fs.writeFile("destination.txt",data,{encoding:'utf8',flag:"w"},(err2,data2)=>{
                if (err2){
                    console.log("error while writing file Asynchronously")
                }
                else{
                    console.log("Writing file Asynchronous successful")
                }
            })

            console.log("write Asycn is in process I am last instruction of that call back function")
           
        }
    })
    console.log("I am last instruction of the code")


}


ReadsyncWriteSync()
ReadSyncWriteAsync()
ReadAsyncWriteSync()
ReadAsyncWriteAsync()
