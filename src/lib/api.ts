export const fetcher = async ({url, method, body, json=true}) => {
    const res = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

    if (!res.ok) {
        throw new Error('API error')
    }

    if (json) {
        const data = await res.json();
        return data.data
    }
}

export const register = async (user) => {
    return fetcher({
      url: "/api/register",
      method: "POST",
      body: user,
      json: false,
    });
  };

  export const signin = async (user) => {
    return fetcher({
      url: "/api/signin",
      method: "POST",
      body: user,
      json: false,
    });
  };


