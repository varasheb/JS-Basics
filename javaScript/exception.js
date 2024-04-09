//! Example
function divide(a, b) {
    try {
      return a / b;
    } catch (error) {
      console.error('An error occurred:', error.message);
    } finally {
      console.log('Division operation complete.');
    }
  }



// function divide(a, b) {
//     try {
//       if (b === 0) {
//         throw new Error('Division by zero is not allowed.');
//       }
//       return a / b;
//     } catch (error) {
//       console.error('An error occurred:', error.message);
//     } finally {
//       console.log('Division operation complete.');
//     }
//   }
  
//   console.log(divide(10, 2)); 
  console.log(divide(10, 0)); 
  
  //! working with json parsing errors
//   const invalidJsonString = '{"name": "John", "age": }';
//     try {
//         const parsedObject = JSON.parse(invalidJsonString);
//         console.log(parsedObject);
//     } catch (error) {
//         console.error('Error parsing JSON:', error.message);
//     }
    
//!Accessing properties of potentially undefined objects
// const user = {};

// try {
//   console.log(user.address.city); 
// } catch (error) {
//   console.error('Error accessing property:', error.message);
// }

  
//! custom exception
// function validateInput(input) {
//     if (input === null || input === undefined || input === '') {
//       throw new Error('Input cannot be empty');
//     }
//   }
  
//   try {
//     validateInput('');
//   } catch (error) {
//     console.error('Validation error:', error.message);
//   }