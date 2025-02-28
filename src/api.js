import { addUserToLS } from "./utils";

const url =
  "https://api.sheety.co/9c9131b74e93a891e24c213fc26b7da4/qittWaitlist/sheet1";

// Function to get user location (IP, City, Region)
async function getUserLocation() {
  try {
    console.log("Fetching user location...");
    let response = await fetch("https://ipapi.co/json/");
    let data = await response.json();
    console.log("User location fetched:", data);
    return {
      ip: data.ip,
      city: data.city,
      region: data.region,
    };
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
}

// Function to get the waitlist
async function getWaitlist() {
  try {
    console.log("Fetching waitlist...");
    let response = await fetch(url);
    let data = await response.json();
    console.log("Waitlist fetched:", data.sheet1);
    return data.sheet1 || [];
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return [];
  }
}

// Function to check if a user with the same phone or IP exists
async function userExists(phone, ip) {
  console.log(`Checking if user exists: phone=${phone}, ip=${ip}`);
  let waitlist = await getWaitlist();
  let exists = waitlist.some((user) => user.phone === phone || user.ipAddress === ip);
  console.log("User exists:", exists);
  return exists;
}

// Function to add a user
export async function addUser(schoolName, phone) {
  console.log(`Adding user: school=${schoolName}, phone=${phone}`);
  let location = await getUserLocation();
  if (!location) {
    console.log("Could not fetch user location.");
    return { success: false, message: "Could not fetch user location." };
  }

  if (await userExists(phone, location.ip)) {
    console.log("User already exists with this phone or IP.");
    return {
      success: false,
      message: "User already exists with this phone or IP.",
    };
  }

  let body = {
    sheet1: {
      schoolName: schoolName,
      phone: phone,
      ipAddress: location.ip,
      city: location.city,
      region: location.region,
    },
  };

  try {
    console.log("Sending request to add user:", body);
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    let data = await response.json();
    console.log("User added successfully:", data.sheet1);
    addUserToLS(body.sheet1)
    return {
      success: true,
      message: "User added successfully.",
      data: data.sheet1,
    };
  } catch (error) {
    console.error("Error adding user:", error);
    return { success: false, message: "Error adding user." };
  }
}

// Example usage
// addUser("UniPort", "08123456789");
