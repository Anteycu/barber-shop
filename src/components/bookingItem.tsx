import { getUserInfo } from "../domains/clients/services";

export const BookingItem = () => {
  const userInfo = getUserInfo();

  if (!userInfo) {
    return <p>Error! There is no such order</p>;
  }

  return (
    <div>
      <h2>{userInfo.name}</h2>
      <p>{userInfo.surname}</p>
      <p>{userInfo.email}</p>
      <p>{userInfo.service}</p>
      <button
        type="button"
        onClick={() => localStorage.removeItem("clientInfo")}
      >
        Clear
      </button>
    </div>
  );
};
