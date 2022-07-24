import React from "react";

const UserPost = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {}

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
    </form>
  );
};

export default UserPost;
