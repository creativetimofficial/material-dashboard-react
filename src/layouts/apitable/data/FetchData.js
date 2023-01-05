import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    setDataLoading(true);
    fetch("https://mockend.com/InformDGM/MockendDB/users")
      .then((response) => response.json())
      .then((res) => setData(res));
    setDataLoading(false);
  }, []);
  return (
    <div>
      {isDataLoading && <div>loading</div>}
      {!isDataLoading && (
        <table>
          <thead>
            <tr>
              <th>Age</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status Mesage</th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachdata) => (
              <tr key={eachdata.id}>
                <td>{eachdata.age}</td>
                <td>{eachdata.firstName}</td>
                <td>{eachdata.email}</td>
                <td>{eachdata.phone}</td>
                <td>{eachdata.statusMessage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FetchData;
