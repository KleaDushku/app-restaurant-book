import { drizzle } from 'drizzle-orm';
import { users } from './schema'; // Adjust the path to your schema

async function insertUser() {
  try {
    await drizzle.insert(users).values({
      id: 1, // Omit id if it's auto-increment
      email: 'me@site.com',
      name: 'Me',
      username: 'username',
    });

    console.log("User inserted successfully");
  } catch (error) {
    console.error("Error inserting user:", error);
  }
}

insertUser(); // Call the function to insert data
