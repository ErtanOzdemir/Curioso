import axios from "axios";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/users/me",
      withCredentials: true,
    }).then((response) => {
      setUserData(response);
    });
  }, []);

  return (
    <div>
      Profile Page
      <div>{JSON.stringify(userData)}</div>
    </div>
  );
}
