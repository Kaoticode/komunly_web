const Login = async function login( username, password) {
    const url = 'https://21qjx3x0-3004.uks1.devtunnels.ms/auth/login';
    const data = {
      username: username,
      password: password
    };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Login successful:', responseData);
    } else {
      console.error('Login failed:', response.statusText);
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
}

  export default Login