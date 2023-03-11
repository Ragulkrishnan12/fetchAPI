import React, { useEffect, useState } from "react";
import axios from "axios";
import "./fetch.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FetchData = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState([]);
  const [second, setsecond] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
    },
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);

  const showdata = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setsecond(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="flex">
        <label>Welcome!!!!!!!!!</label>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Search Name here"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>UserName</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          {product
            .filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((data, i) => (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.username}</td>
                <td>
                  <button
                    class="btn btn-warning"
                    onClick={(e) => showdata(data.id)}
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                  >
                    Get more details
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>UserName</th>
              <th>street</th>
              <th>city</th>
              <th>zipcode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{second.id}</td>
              <td>{second.name}</td>
              <td>{second.email}</td>
              <td>{second.username}</td>
              <td>{second.address.street}</td>
              <td>{second.address.city}</td>
              <td>{second.address.zipcode}</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      {/* ---------------------- */}
      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel"></h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div>
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>UserName</th>
                    <th>street</th>
                    <th>city</th>
                    <th>zipcode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{second.id}</td>
                    <td>{second.name}</td>
                    <td>{second.email}</td>
                    <td>{second.username}</td>
                    <td>{second.address.street}</td>
                    <td>{second.address.city}</td>
                    <td>{second.address.zipcode}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FetchData;
