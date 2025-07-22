import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./App.css";
import Headers from "./header";

const SHEETDB_API = import.meta.env.VITE_SEARCH_REQUESTDB_REAL_TIME_DATA;

const Apps = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const searchUser = async (data) => {
    setLoading(true);
    setLoadingMessage("Loading...");
    try {
      const response = await fetch(
        `${SHEETDB_API}/search?FirstName=*${data.name}*`
      );
      const result = await response.json();
      if (result.length > 0) {
        setUserData(result);
        setSelectedUser(null);
      } else {
        setUserData([]);
        setSelectedUser(null);
        Swal.fire({
          icon: "error",
          title: "Not Found",
          text: "No data found for the given name!",
        });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
      setLoadingMessage("");
    }
  };

  const updateUserStatus = async (status) => {
    if (!selectedUser) {
      Swal.fire({
        icon: "warning",
        title: "Select User",
        text: "Please select a user before updating the status!",
      });
      return;
    }
    setLoading(true);
    setLoadingMessage("Updating data...");

    try {
      const response = await fetch(`${SHEETDB_API}/ID/${selectedUser.ID}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{ Present: status }],
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Data updated successfully!",
        });

        const updatedUser = {
          ...selectedUser,
          Present: status,
        };
        setSelectedUser(updatedUser);
        setUserData((prevData) =>
          prevData.map((user) =>
            user.ID === selectedUser.ID ? updatedUser : user
          )
        );
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update data!",
        });
      }
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setLoading(false);
      setLoadingMessage("");
    }
  };

  return (
    <div className="odm">
      <div className="container ">
        <div style={{ padding: "20px" }} className="search__data">
          {/* <h4 className="montaga-regulars dataHead ">
            Empowering Healthcare through Diagnostic Excellence
          </h4>
          <p className="montaga-regulars dataHead">
            8th & 9th February 2025, Eros Hotel, New Delhi
          </p> */}
          <div className="fetching__data">
            <div>
              <h2 className="montaga-regulars searchNam">Search Name</h2>
              <form onSubmit={handleSubmit(searchUser)}>
                <input
                  {...register("name")}
                  placeholder="Enter name"
                  required
                  className="input__name"
                />
                <button
                  type="submit"
                  className="search__button montaga-regulars"
                  disabled={loading}>
                  {loading && loadingMessage === "Loading..."
                    ? "Loading..."
                    : "Search"}
                </button>
              </form>

              {loading && <p className="loading_message">{loadingMessage}</p>}

              {!selectedUser && userData.length > 0 && (
                <div>
                  <h3 className="montaga-regulars text-center">Select Name</h3>
                  {userData.map((user, index) => (
                    <div key={index} className="user-card fetching__data">
                      <div className="imn ">
                        <p className="montaga-regulars">
                          <strong>Name:</strong> {user.FirstName}
                        </p>
                        <p className="montaga-regulars">
                          <strong>Email:</strong> {user.Email}
                        </p>
                        <p className="montaga-regulars">
                          <strong>Phone:</strong> {user.Phone}
                        </p>
                        <p className="montaga-regulars">
                          <strong>Organization:</strong> {user.Institute}
                        </p>
                        <p className="montaga-regulars">
                          <strong>Present:</strong>{" "}
                          {user.Present || "Not updated"}
                        </p>
                        <div className="btn_Select">
                          <button
                            className="select__button montaga-regulars"
                            onClick={() => setSelectedUser(user)}>
                            Select
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedUser && (
                <>
                  <div className="montaga-regulars imn mt-5">
                    <h3 className="text-center update_text">Update User</h3>
                    <p>
                      <strong>Name:</strong> {selectedUser.FirstName}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedUser.Email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {selectedUser.Phone}
                    </p>
                    <p>
                      <strong>Organization:</strong> {selectedUser.Institute}
                    </p>
                    <p>
                      <strong>Present:</strong>{" "}
                      {selectedUser.Present || "Not updated"}
                    </p>
                    <div className="btn_Select">
                      <button
                        className="button__mark"
                        onClick={() => updateUserStatus("Yes")}
                        disabled={loading}>
                        {loading && loadingMessage === "Updating data..."
                          ? "Updating..."
                          : "Mark Yes"}
                      </button>
                      <button
                        className="button__mark hi"
                        onClick={() => updateUserStatus("No")}
                        disabled={loading}>
                        {loading && loadingMessage === "Updating data..."
                          ? "Updating..."
                          : "Mark No"}
                      </button>
                    </div>
                  </div>
                  <div className="btn_Select">
                    <button
                      className="select__button mt-3"
                      onClick={() => setSelectedUser(null)}>
                      Back
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
