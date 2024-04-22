//! async and await
async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve("27 Deg")
          }, 2000)
  })

  let bangaloreWeather = new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve("21 Deg")
          }, 5000)
  })

  delhiWeather.then(alert)
  bangaloreWeather.then(alert)
  console.log("Fetching Delhi Weather Please wait ...")
  let delhiW = await delhiWeather
  console.log("Fetched Delhi Weather: " + delhiW)
  console.log("Fetching Bangalore Weather Please wait ...")
  let bangaloreW = await bangaloreWeather
  console.log("Fetched Bangalore Weather: " + bangaloreW)
  return [delhiW, bangaloreW]
}

const cherry = async () => {
  console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
  console.log("Welcome to weather control room")
  let a = await harry()
  let b = await cherry()

}
main1()
  
//   //!1
// async function fetchData() {
//   return 'Data fetched successfully';
// }
// async function processData() {
//   const result = await fetchData();
//   console.log(result);
// }
// processData();

//2
async function fetchUserData(userId) {
  if (userId <= 0) {
    throw new Error('Invalid user ID');
  }
  return { id: userId};
} 
async function processUser(userId) {
  try {
    const userData = await fetchUserData(userId);
    console.log('User data:', userData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
processUser(1);
processUser(-1);

// //3
// function first(a,b){
//   return new Promise((resolve, reject)=>{
//       let sum = a+b;
//       if(sum==10){
//           resolve('sum is equal to 10');
//       }else{
//           reject(new Error('sum is not equal to 10'));
//       }
//   });
// }
// async function caller(){
//   try{
//       let res1 = await first(5,5);
//       console.log(res1);
//       let res2 = await first(6,4);
//       console.log(res2);
//       let res3 = await first(7,5);
//       console.log(res3);
//   }catch(e){
//       console.log(e.message); //console.log(e);
//   }
// }
// caller();

//4
async function fetchResource1() {
  return new Promise(resolve => setTimeout(() => resolve('Resource 1 data'), 1000));
} 
async function fetchResource2() {
  return new Promise(resolve => setTimeout(() => resolve('Resource 2 data'), 3000));
} 
async function fetchDataParallel() {
  const data1 = await fetchResource1();
  const data2 = await fetchResource2();
  
  console.log('Data 1:', data1);
  console.log('Data 2:', data2);
}
fetchDataParallel();

