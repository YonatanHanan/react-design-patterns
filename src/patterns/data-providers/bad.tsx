// Child component to display the user's name
const UserName = ({ name }: { name: string }) => {
  return (
    <div>
      <strong>Name:</strong> {name}
    </div>
  );
};

// Child component to display the user's email
const UserEmail = ({ email }: { email: string }) => {
  return (
    <div>
      <strong>Email:</strong> {email}
    </div>
  );
};

// Child component to display the user's address
const UserAddress = ({ address }: { address: string }) => {
  return (
    <div>
      <strong>Address:</strong> {address}
    </div>
  );
};

// Main component that combines the user details
const UserProfile = ({
  user,
}: {
  user: { name: string; email: string; address: string };
}) => {
  return (
    <div>
      <h2>User Profile</h2>
      <UserName name={user.name} />
      <UserEmail email={user.email} />
      <UserAddress address={user.address} />
    </div>
  );
};

export const DataProvidersBad = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, USA",
  };

  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};
