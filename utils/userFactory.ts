export function generateUser() {
  const timestamp = Date.now();

  return {
    firstName: "Shubh",
    lastName: "Automation",
    address: "Melbourne",
    city: "Melbourne",
    state: "VIC",
    zipCode: "3000",
    phone: "0400000000",
    ssn: "123456",

    username: `admin_${timestamp}`,
    password: "Admin123!"
  };
}