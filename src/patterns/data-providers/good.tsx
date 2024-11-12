import { createContext, useContext } from "react";

// Step 1: Create a context for user data
const UserContext = createContext<
  { name: string; email: string; address: string } | undefined
>(undefined);

// Child component to display the user's name
const UserName = () => {
  const user = useContext(UserContext); // Step 2: Consume the context
  if (!user) {
    return <div>No user data</div>;
  }
  return (
    <div>
      <strong>Name:</strong> {user.name}
    </div>
  );
};

// Child component to display the user's email
const UserEmail = () => {
  const user = useContext(UserContext); // Step 2: Consume the context
  if (!user) {
    return <div>No user data</div>;
  }
  return (
    <div>
      <strong>Email:</strong> {user.email}
    </div>
  );
};

// Child component to display the user's address
const UserAddress = () => {
  const user = useContext(UserContext); // Step 2: Consume the context
  if (!user) {
    return <div>No user data</div>;
  }
  return (
    <div>
      <strong>Address:</strong> {user.address}
    </div>
  );
};

// Main component that combines the user details
const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <UserName />
      <UserEmail />
      <UserAddress />
    </div>
  );
};

export const DataProvidersGood = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, USA",
  };

  return (
    // Step 3: Provide the user data through context
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
};
