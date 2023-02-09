const health = prompt("How are you feeling?: ")
const n_cake = prompt("How many cakes can you make?: ")
const promise = new Promise((resolve,reject) => 
{

    if (health=="good")
    {
        resolve(" you're healthy and we will have " + n_cake + "cake for the party")
    }
    else if (health=="seek")
    {
        reject(" we will not have cake for the party")
    }

})


promise.then((message) =>
{
    console.log(message)
})
promise.catch((message) =>
{
    console.log(message)
}
)
promise.finally(() =>
{
    console.log("we will have party")
}
)

