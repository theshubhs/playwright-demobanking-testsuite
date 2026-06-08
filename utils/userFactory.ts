export function generateUser() {
  return {
    username: `user_${Date.now()}`,
    password: "admin"
  };
}