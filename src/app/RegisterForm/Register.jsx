const Register = async(useremail, password, username) => {
  const url = 'https://21qjx3x0-3004.uks1.devtunnels.ms/auth/register';
  const data = {
    useremail: useremail,
    password: password,
    username: username,  
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

    console.log('Response:', response);
    
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    
  } catch (error) {
      console.error('Error:', error);
  }

}

  export default Register