interface Client {
  name: string;
  surname: string;
  email: string;
  service: string;
}

const getUserInfo = () => {
  const userInfo: string | null = localStorage.getItem("clientInfo");
  if (userInfo) {
    const parsedUserInfo: Client = JSON.parse(userInfo);
    return parsedUserInfo;
  }
};

export const BookingItem = () => {
  console.log(getUserInfo());
  const userInfo = getUserInfo();
  if (userInfo) {
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
  }
  return <p>Error! There is no such order</p>;
};
