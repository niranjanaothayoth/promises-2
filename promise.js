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

// Initial call to getCookies()
getCookies();

// Progression 2: Create a function to create cookies and create an object of Promise
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

// Progression 3: Call function using `.then`
createCookie(newCookie)
  .then((message) => {
    console.log(message);
    getCookies(); // Call getCookies() again to display updated list
  })
  .catch((error) => {
    console.error('Promise rejected:', error.message);
  });
