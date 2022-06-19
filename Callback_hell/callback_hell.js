const {
  readdir,
  readFile,
  writeFile
} = require("fs/promises");  // use "fs/promises"
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

// Read and reverse contents of text files in a directory
/* readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      });
    });
  });
}); */

const promise = async() => {
  try{
  
    let files = await readdir(inbox)  
    //console.log(files) files is an array of file

  for(let file of files) {    // Why files.forEach(file => {}) doesn't work???  SyntaxError: await is only valid in async functions and the top level bodies of modules
    let inboxFile = join(inbox, file)
    let outboxFile = join(outbox, file)

    let data = await readFile(inboxFile, "utf8")

    await writeFile(outboxFile, reverseText(data))

    console.log(`${file} was successfully saved in the outbox!`)
  }
  } catch (error) {
    console.log(error)
  }
}

promise()

// Here another solution with promise, only reguire("fs"), error message works but there is another little callback_hell
/* const promiseReadDir = (inbox) =>{
return new Promise((resolve, reject) => {
    readdir(inbox, (error, files) => {
      error
      ? reject(new Error ("Error: Folder inaccessible"))
      : resolve(files)
    });
  })
}


const promiseReadFile = (inbox, file) => {
  return new Promise((resolve, reject) => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      error
      ? reject(new Error ("Error: File error"))
      : resolve(data)
    });
  }) 
}

const promiseWriteFile = (outbox, file, data) => {
  return new Promise((resolve, reject) => {
    writeFile(join(outbox, file), reverseText(data), error => {
      error
      ? reject(new Error ("Error: File could not be saved!"))
      : resolve(console.log(`${file} was successfully saved in the outbox!`))
      });
    })
  }
  
promiseReadDir(inbox)
.then((files) => {
  files.forEach(file => {
    promiseReadFile(inbox, file)
    .then((data) => {
      promiseWriteFile(outbox, file, data)
    })
  })
}) */