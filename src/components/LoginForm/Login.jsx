const Login = async function login(username, password, setResponse, setAccess_token, setRefresh_token) {
  const url = "https://21qjx3x0-3004.uks1.devtunnels.ms/auth/login";
  const data = {
    username: username,
    password: password,
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

    if (response.ok) {
      const responseData = await response.json();
      console.log("Login successful:", responseData);
      setResponse(response.status);
      setAccess_token(responseData.access_token);
      setRefresh_token(responseData.refresh_token);
      console.log("response Status:", response.status);
    } else {
      console.error("Login failed:", response.statusText);
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export default Login;
