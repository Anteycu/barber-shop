import { useState } from "react";
import { Link } from "react-router-dom";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  const reset = () => {
    setFirstName("");
    setSecondName("");
    setService("");
  };

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    const clientInfo = {
      name: firstName,
      surname: secondName,
      email: email,
      order: service,
    };
    localStorage.setItem("clientInfo", JSON.stringify(clientInfo));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Your Surname
          <input
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Ordered services
          <input value={service} onChange={(e) => setService(e.target.value)} />
        </label>
        <button type="submit">Submit booking</button>
        <Link to="bookings">Go to your booking</Link>
      </form>
    </div>
  );
};
