import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "Redux/Constants/action-types";

const EditProduct = () => {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.name);
  const id = useSelector((store) => store.id);
  const description = useSelector((store) => store.description);
  const quantity = useSelector((store) => store.quantity);
  const tags = useSelector((store) => store.tags);
  const price = useSelector((store) => store.price);
  const brand = useSelector((store) => brand);
  const sku = useSelector((store) => store.sku);

  return (
    <div>
      <div>
        <label>User Name:</label>
        <input
          onChange={(e) => {
            dispatch({
              type: actionType.USERNAME,
              payload: e.target.value,
            });
          }}
          value={userName}
        />
      </div>
      <div>
        <label>User userPassword:</label>
        <input
          onChange={(e) => {
            dispatch({
              type: actionType.USERPASSWORD,
              payload: e.target.value,
            });
          }}
          value={userPassword}
        />
      </div>
      <div>
        <label>User Email:</label>
        <input
          onChange={(e) => {
            dispatch({
              type: actionType.USEREMAIL,
              payload: e.target.value,
            });
          }}
          value={userEmail}
        />
      </div>
      <div>
        <label>User Gender:</label>
        <input
          type="radio"
          value="male"
          checked={userGender === "male"}
          onChange={(e) => {
            dispatch({
              type: actionType.USERGENDER,
              payload: e.target.value,
            });
          }}
        />{" "}
        Male
        <input
          type="radio"
          value="female"
          checked={userGender === "female"}
          onChange={(e) => {
            dispatch({
              type: actionType.USERGENDER,
              payload: e.target.value,
            });
          }}
        />{" "}
        Female
      </div>
      <div>
        <label>Favorite Color:</label>
        <Select
          value={favColor}
          placeholder="Select Fav Color"
          onChange={(e) => {
            dispatch({
              type: actionType.FAVCOLOR,
              payload: e.target.value,
            });
          }}
        >
          <MenuItem value="green">Green</MenuItem>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
        </Select>
      </div>
      <div>
        <label>Employment Status:</label>
        <input
          onChange={(e) => {
            dispatch({
              type: actionType.EMPLOYMENTSTATUS,
              payload: e.target.value,
            });
          }}
          value={employmentStatus}
        />
      </div>
      <div>
        <label>User Notes:</label>
        <input
          onChange={(e) => {
            dispatch({
              type: actionType.USERNOTES,
              payload: e.target.value,
            });
          }}
          value={userNotes}
        />
      </div>
      <NewformNav />
    </div>
  );
};
export default EditProduct;
