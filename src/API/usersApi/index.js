export const getAllUsers = (setUsers, setIsLoading) => {
  fetch("https://6363b35237f2167d6f80918f.mockapi.io/users")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data);
    })
    .catch(() => {
      console.log("error");
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export const getUserById = (setUser, setIsLoading, id) => {
  fetch(`https://6363b35237f2167d6f80918f.mockapi.io/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
    })
    .catch(() => {
      console.log("error");
    })
    .finally(() => {
      setIsLoading(false);
    });
};
