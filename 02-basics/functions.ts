function addTwo(num: number){
    return num + 2
}


function getUpper(str: string){
    return str.toUpperCase()
}


function signUp(name: string, email: string, password: string, isPaid: boolean){

}


let login = (name: string, email: string, isPaid: boolean = false) => {

}

const heros = ["spiderman", "batman", "superman"]
// const heros = [1, 2, 3]
  
heros.map((itm): string => {
    return `Hero is ${itm}`
})

// no return type
function logError(errormsg: string): void{
    console.log(errormsg);
}


// terminate but no return type
function handleError(errormsg: string): never{
    throw new Error(errormsg)
}

addTwo(5)

getUpper("hello, man")

signUp("frimps", "frimps", "test", true)
 
login("frims", "frims")

export {}
