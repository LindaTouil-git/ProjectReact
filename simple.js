//var name="World";
//avoid
const appName="MyApp";
let counter = 0;
console.log(appName);
console.log(counter);
counter = 1 ;


//appName="AnotherApp"; // this will cause an error
// console.log(appName);


//Function
function sum01d (a,b) {
    return a + b ;

}
const sum =(a,b) => a+b ;
const welcome =() => {return "welcome!";}

const user = {
id: 1,
name: "Linda",
role: "Admin",
profile: {
    age:30,
    country:"USA"
}
}

//destructring
const {name, role} = user;
console.log(name);
const array = [1,2,3,4,5]
const [first, second]= array;

console.log(first,second);

const updatedUser = {
    ...user,
    age:10
}
console.log(updatedUser);

//map
const double = array.map(n => n * 2);
console.log(double);
//filter
const even =array.filter(n => n % 2 === 0);
console.log(even);
const nestedArray = [
    [1,2,3],
    [4,5],
    [6]

]
const flatArray = nestedArray.flat();
console.log(flatArray);
const numbers =[10, 20 , 30]
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);


const fetchData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");}
        , 1000);
    });
} 
const getData = async () => {
    const data = await fetchData();
    console.log(data);
}
getData();

const userA = {profile:{email:"test@example.com"}};
const noUser = null;
console.log(userA.profile.email);
console.log(noUser?.profile?.email); //undefined
const score = 0;
console.log(score || "No score"); // "No score"
console.log(score ?? "No score"); // 0

//1. DATA: Simulating an API response (some data is missing)
const rawData = [
    {id: 1, name: "Alice", details: {age: 25, active:true}},
    {id: 1, name: "Bob", details: null}, //Missing details
    {id: 1, name: "Marine", details: {age: 30, active:false}} // Age is 0

];
const processUsers = async () => {
    console.log("---- Fetching Data ---");
    //simulate network delay (Async/Await)
await new Promise(resolve => setTimeout (resolve, 1000));
//process the list
const cleanList = rawData.map(user => {
    //destructuring
const { name, details} = user;
// optionnal chaining safely access 'actve even if 'details ' is null
const isActive = details?.active;
// nullish caalescing :valid age is 0
const age = details?.age ?? "unknown";
return 'User: ${name} | Age : ${age}| Status: ${isActive ? "Active" : "Inactive" }';
});
const finalReport = [... cleanList, "--- End of report ---"]
console.log(finalReport.join("\n"));
};

processUsers();