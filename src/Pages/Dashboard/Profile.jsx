import { useState } from "react";
import Wrapper from "../../Styled-components/DashboardFormPage-style";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "./../../components/FormRow/FormRow";
import { updateUser } from "../../Feature/User/userSlice";

function Profile() {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });
  const { name, email, lastName, location } = userData;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(updateUser(userData))
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText='last Name'
            value={lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={location}
            handleChange={handleChange}
          />
          <button 
          type="submit" 
          className="btn btn-block">
            {isLoading ? 'Please Wait...' : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Profile;
