const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getCookies() {
  setTimeout(() => {
    let output = '';
    cookies.forEach((cookie) => {
      output += `<div>${cookie.name}</div>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Progression 2: Using setTimeout - use 1000 units for time parameter

// Progression 3: Create a function to create cookies and create an object of Promise.
function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newCookie.name) {
        cookies.push(newCookie);
        resolve('Cookie created successfully!');
      } else {
        reject(new Error('Cookie name is required!'));
      }
    }, 2000);
  });
}

// Progression 7: Create a new async function
async function init() {
  try {
    await createCookie(newCookie);
    getCookies();
  } catch (error) {
    console.error('Promise rejected:', error.message);
  }
}

// Call the async function to initialize
init();
