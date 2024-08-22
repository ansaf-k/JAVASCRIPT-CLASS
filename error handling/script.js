// //exmple for try catch
// try {
//     //let x = 10*10
//     console.log(x);
// } catch (error) {
//     alert(error.message)
// }


// //fetching
// fetch('https://jsonplaceholder.typicode.com/user')
//       .then(response => response.json())
//       .then(json => console.log(json[0].email))//accesing email in the users of json file
//       .catch(error => alert("error occured while fetching"))//catching error in the fetch request

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data[0].email)
}
getData()//calling the function to get the data from the json file