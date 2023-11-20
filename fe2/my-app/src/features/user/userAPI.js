// A mock function to mimic making an async request for data
export function createUser(user) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/api/user`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function getAllUser() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/api/user");
    const data = await response.json();
    resolve({ data });
  });
}

export function getUserById(_id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/api/user/${_id}`);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(_id, update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/api/user/${_id}`, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteUser(_id) {
  return new Promise(async (resolve) => {
    await fetch(`http://localhost:8080/api/user/${_id}`, {
      method: "DELETE",
    });
    resolve({ message: "deleted" });
  });
}
