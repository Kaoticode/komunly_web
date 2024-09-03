const Register = async (username, password, useremail, setResponse) => {
  const url = "https://21qjx3x0-3004.uks1.devtunnels.ms/auth/register";
  const data = {
    email: useremail,
    password: password,
    username: username,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setResponse(response.status);

    console.log("Response:", response);

    if (!response.ok) {
      console.log("Error:", response.message);
      throw new Error(`Network response was not ok: ${response.status}`);
      
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default Register;
