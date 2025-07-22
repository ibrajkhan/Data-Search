//  ldkk     latest update

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import "./App.css";

// const SHEETDB_API = "https://sheetdb.io/api/v1/dkq3xxjo76o75"; // Replace with your SheetDB API URL

// const App = () => {
//   const { register, handleSubmit } = useForm();
//   const [loading, setloading] = useState("");
//   const [search, setSearch] = useState("");
//   const [userData, setUserData] = useState(null);
//   const [updateStatus, setUpdateStatus] = useState(null);

//   const searchUser = async (data) => {
//     setSearch(true);
//     try {
//       const response = await fetch(`${SHEETDB_API}/search?name=${data.name}`);
//       const result = await response.json();
//       if (result.length > 0) {
//         setUserData(result[0]);
//       } else {
//         setUserData(null);
//         Swal.fire({
//           icon: "error",
//           title: "Not Found",
//           text: "No data found for the given name!",
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//     setSearch(false);
//   };

//   const updateUserStatus = async (status) => {
//     setloading(true);
//     if (!userData) return;
//     try {
//       const response = await fetch(`${SHEETDB_API}/name/${userData.name}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ data: [{ Present: status }] }),
//       });
//       if (response.ok) {
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Data updated successfully!",
//         });
//         // Fetch updated data instantly
//         searchUser({ name: userData.name });
//       } else {
//         setUpdateStatus("Failed to update");
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Failed to update data!",
//         });
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//     setloading(false);
//   };

//   return (
//     <div className="container">
//       <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
//         <h2>Search User</h2>
//         <form onSubmit={handleSubmit(searchUser)}>
//           <input
//             {...register("name")}
//             placeholder="Enter name"
//             required
//             className="input__name"
//           />
//           <button type="submit" className="search__button">
//             {search ? "Searching..." : "Get Data"}
//           </button>
//         </form>

//         {userData && (
//           <div>
//             <h3>User Details</h3>
//             <p>
//               <strong>Name:</strong> {userData.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {userData.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {userData.phone}
//             </p>
//             <p>
//               <strong>Organization:</strong> {userData.organization}
//             </p>
//             <p>
//               <strong>Present:</strong> {userData.Present || "Not updated"}
//             </p>
//             <button
//               className="button__mark"
//               onClick={() => updateUserStatus("Yes")}>
//               {loading ? "Processing..." : "Mark Yes"}
//             </button>
//             <button
//               className="button__mark hi"
//               onClick={() => updateUserStatus("No")}>
//               {loading ? "Processing..." : "Mark No"}
//             </button>
//             {updateStatus && <p>{updateStatus}</p>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// latest 2,00

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import "./App.css";

// const SHEETDB_API = "https://sheetdb.io/api/v1/dkq3xxjo76o75"; // Replace with your SheetDB API URL

// const App = () => {
//   const { register, handleSubmit } = useForm();
//   const [userData, setUserData] = useState(null);
//   const [updateStatus, setUpdateStatus] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const searchUser = async (data) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${SHEETDB_API}/search?name=${data.name}`);
//       const result = await response.json();
//       if (result.length > 0) {
//         setUserData(result[0]);
//       } else {
//         setUserData(null);
//         Swal.fire({
//           icon: "error",
//           title: "Not Found",
//           text: "No data found for the given name!",
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateUserStatus = async (status) => {
//     if (!userData) return;
//     setLoading(true);
//     try {
//       const response = await fetch(`${SHEETDB_API}/name/${userData.name}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ data: [{ Present: status }] }),
//       });
//       if (response.ok) {
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Data updated successfully!",
//         });
//         // Fetch updated data instantly
//         searchUser({ name: userData.name });
//       } else {
//         setUpdateStatus("Failed to update");
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Failed to update data!",
//         });
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
//         <h2>Search User</h2>
//         <form onSubmit={handleSubmit(searchUser)}>
//           <input
//             {...register("name")}
//             placeholder="Enter name"
//             required
//             className="input__name"
//           />
//           <button type="submit" className="search__button" disabled={loading}>
//             {loading ? "Loading..." : "Search"}
//           </button>
//         </form>

//         {loading && <p>Loading...</p>}

//         {userData && !loading && (
//           <div>
//             <h3>User Details</h3>
//             <p>
//               <strong>Name:</strong> {userData.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {userData.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {userData.phone}
//             </p>
//             <p>
//               <strong>Organization:</strong> {userData.organization}
//             </p>
//             <p>
//               <strong>Present:</strong> {userData.Present || "Not updated"}
//             </p>
//             <button
//               className="button__mark"
//               onClick={() => updateUserStatus("Yes")}
//               disabled={loading}>
//               {loading ? "Updating..." : "Mark Yes"}
//             </button>
//             <button
//               className="button__mark hi"
//               onClick={() => updateUserStatus("No")}
//               disabled={loading}>
//               {loading ? "Updating..." : "Mark No"}
//             </button>
//             {updateStatus && <p>{updateStatus}</p>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// current one

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import "./App.css";

// const SHEETDB_API = "https://sheetdb.io/api/v1/dkq3xxjo76o75"; // Replace with your SheetDB API URL

// const App = () => {
//   const { register, handleSubmit } = useForm();
//   const [userData, setUserData] = useState(null);
//   const [updateStatus, setUpdateStatus] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [loadingMessage, setLoadingMessage] = useState("");

//   const searchUser = async (data) => {
//     setLoading(true);
//     setLoadingMessage("Loading...");
//     try {
//       const response = await fetch(`${SHEETDB_API}/search?name=${data.name}`);
//       const result = await response.json();
//       if (result.length > 0) {
//         setUserData(result[0]);
//       } else {
//         setUserData(null);
//         Swal.fire({
//           icon: "error",
//           title: "Not Found",
//           text: "No data found for the given name!",
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     } finally {
//       setLoading(false);
//       setLoadingMessage("");
//     }
//   };

//   const updateUserStatus = async (status) => {
//     if (!userData) return;
//     setLoading(true);
//     setLoadingMessage("Updating data...");
//     try {
//       const response = await fetch(`${SHEETDB_API}/name/${userData.name}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ data: [{ Present: status }] }),
//       });
//       if (response.ok) {
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Data updated successfully!",
//         });
//         // Fetch updated data instantly
//         searchUser({ name: userData.name });
//       } else {
//         setUpdateStatus("Failed to update");
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Failed to update data!",
//         });
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//     } finally {
//       setLoading(false);
//       setLoadingMessage("");
//     }
//   };

//   return (
//     <div className="container">
//       <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
//         <h2>Search User</h2>
//         <form onSubmit={handleSubmit(searchUser)}>
//           <input
//             {...register("name")}
//             placeholder="Enter name"
//             required
//             className="input__name"
//           />
//           <button type="submit" className="search__button" disabled={loading}>
//             {loading && loadingMessage === "Loading..."
//               ? "Loading..."
//               : "Search"}
//           </button>
//         </form>

//         {loading && <p>{loadingMessage}</p>}

//         {userData && !loading && (
//           <div>
//             <h3>User Details</h3>
//             <p>
//               <strong>Name:</strong> {userData.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {userData.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {userData.phone}
//             </p>
//             <p>
//               <strong>Organization:</strong> {userData.organization}
//             </p>
//             <p>
//               <strong>Present:</strong> {userData.Present || "Not updated"}
//             </p>
//             <button
//               className="button__mark"
//               onClick={() => updateUserStatus("Yes")}
//               disabled={loading}>
//               {loading && loadingMessage === "Updating data..."
//                 ? "Updating..."
//                 : "Mark Yes"}
//             </button>
//             <button
//               className="button__mark hi"
//               onClick={() => updateUserStatus("No")}
//               disabled={loading}>
//               {loading && loadingMessage === "Updating data..."
//                 ? "Updating..."
//                 : "Mark No"}
//             </button>
//             {updateStatus && <p>{updateStatus}</p>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// Previous Code before validator

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import "./App.css";
// import Headers from "./header";

// const SHEETDB_API = "https://sheetdb.io/api/v1/4i6sodd2uu0dj";
// const App = () => {
//   const { register, handleSubmit } = useForm();
//   const [userData, setUserData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [loadingMessage, setLoadingMessage] = useState("");

//   const searchUser = async (data) => {
//     setLoading(true);
//     setLoadingMessage("Loading...");
//     try {
//       const response = await fetch(`${SHEETDB_API}/search?name=${data.name}`);
//       const result = await response.json();
//       if (result.length > 0) {
//         setUserData(result); // Store all matching results
//         setSelectedUser(null); // Reset selected user
//       } else {
//         setUserData([]);
//         setSelectedUser(null);
//         Swal.fire({
//           icon: "error",
//           title: "Not Found",
//           text: "No data found for the given name!",
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     } finally {
//       setLoading(false);
//       setLoadingMessage("");
//     }
//   };

//   const updateUserStatus = async (status) => {
//     if (!selectedUser) return;
//     setLoading(true);
//     setLoadingMessage("Updating data...");

//     try {
//       const response = await fetch(`${SHEETDB_API}/id/${selectedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ data: [{ Present: status }] }),
//       });

//       if (response.ok) {
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Data updated successfully!",
//         });

//         // Update selectedUser locally
//         const updatedUser = { ...selectedUser, Present: status };
//         setSelectedUser(updatedUser);

//         // Update userData list with new updated info
//         setUserData((prevData) =>
//           prevData.map((user) =>
//             user.id === selectedUser.id ? updatedUser : user
//           )
//         );
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Failed to update data!",
//         });
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//     } finally {
//       setLoading(false);
//       setLoadingMessage("");
//     }
//   };

//   return (
//     <div className="odm">
//       <Headers />

//       <div className="container ">
//         <div style={{ padding: "20px" }} className="search__data">
//           <h4 className="montaga-regulars dataHead ">
//             Empowering Healthcare through Diagnostic Excellence
//           </h4>
//           <p className="montaga-regulars dataHead">
//             8th & 9th February 2025, Eros Hotel, New Delhi
//           </p>
//           <div className="fetching__data">
//             <div>
//               <h2 className="montaga-regulars searchNam ">Search Name</h2>

//               <form onSubmit={handleSubmit(searchUser)}>
//                 <input
//                   {...register("name")}
//                   placeholder="Enter name"
//                   required
//                   className="input__name "
//                 />
//                 <button
//                   type="submit"
//                   className="search__button montaga-regulars"
//                   disabled={loading}>
//                   {loading && loadingMessage === "Loading..."
//                     ? "Loading..."
//                     : "Search"}
//                 </button>
//               </form>

//               {loading && <p className="loading_message">{loadingMessage}</p>}

//               {/* Show multiple search results */}
//               {!selectedUser && userData.length > 0 && (
//                 <div>
//                   <h3 className="montaga-regulars text-center">Select Name</h3>
//                   {userData.map((user, index) => (
//                     <div key={index} className="user-card fetching__data">
//                       <div>
//                         <p className="montaga-regulars">
//                           <strong>Name:</strong> {user.name}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Email:</strong> {user.email}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Phone:</strong> {user.phone}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Organization:</strong> {user.organization}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Present:</strong>{" "}
//                           {user.Present || "Not updated"}
//                         </p>
//                         <button
//                           className="select__button montaga-regulars"
//                           onClick={() => setSelectedUser(user)}>
//                           Select
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Show selected user details for updating */}
//               {selectedUser && (
//                 <div className="montaga-regulars">
//                   <h3>Update User</h3>
//                   <p>
//                     <strong>Name:</strong> {selectedUser.name}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {selectedUser.email}
//                   </p>
//                   <p>
//                     <strong>Phone:</strong> {selectedUser.phone}
//                   </p>
//                   <p>
//                     <strong>Organization:</strong> {selectedUser.organization}
//                   </p>
//                   <p>
//                     <strong>Present:</strong>{" "}
//                     {selectedUser.Present || "Not updated"}
//                   </p>
//                   <button
//                     className="button__mark"
//                     onClick={() => updateUserStatus("Yes")}
//                     disabled={loading}>
//                     {loading && loadingMessage === "Updating data..."
//                       ? "Updating..."
//                       : "Mark Yes"}
//                   </button>
//                   <button
//                     className="button__mark hi"
//                     onClick={() => updateUserStatus("No")}
//                     disabled={loading}>
//                     {loading && loadingMessage === "Updating data..."
//                       ? "Updating..."
//                       : "Mark No"}
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import "./App.css";
// import Headers from "./header";

// const SHEETDB_API = import.meta.env.VITE_SEARCH_REQUESTDB;
// const App = () => {
//   const { register, handleSubmit } = useForm();
//   const [userData, setUserData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedUpdater, setSelectedUpdater] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [loadingMessage, setLoadingMessage] = useState("");

//   const updaters = ["Raj", "Kane", "Smith", "Gayle"];

//   const searchUser = async (data) => {
//     setLoading(true);
//     setLoadingMessage("Loading...");
//     try {
//       const response = await fetch(`${SHEETDB_API}/search?name=${data.name}`);
//       const result = await response.json();
//       if (result.length > 0) {
//         setUserData(result);
//         setSelectedUser(null);
//       } else {
//         setUserData([]);
//         setSelectedUser(null);
//         Swal.fire({
//           icon: "error",
//           title: "Not Found",
//           text: "No data found for the given name!",
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     } finally {
//       setLoading(false);
//       setLoadingMessage("");
//     }
//   };

//   const updateUserStatus = async (status) => {
//     if (!selectedUser || !selectedUpdater) {
//       Swal.fire({
//         icon: "warning",
//         title: "Select Updater",
//         text: "Please select the person updating the data before proceeding!",
//       });
//       return;
//     }
//     setLoading(true);
//     setLoadingMessage("Updating data...");

//     try {
//       const response = await fetch(`${SHEETDB_API}/id/${selectedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           data: [{ Present: status, "Updation Person": selectedUpdater }],
//         }),
//       });

//       if (response.ok) {
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Data updated successfully!",
//         });

//         const updatedUser = {
//           ...selectedUser,
//           Present: status,
//           "Updation Person": selectedUpdater,
//         };
//         setSelectedUser(updatedUser);
//         setUserData((prevData) =>
//           prevData.map((user) =>
//             user.id === selectedUser.id ? updatedUser : user
//           )
//         );

//         // Reset the select box after updating
//         setSelectedUpdater("");
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Failed to update data!",
//         });
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//     } finally {
//       setLoading(false);
//       setLoadingMessage("");
//     }
//   };

//   return (
//     <div className="odm">
//       <Headers />
//       <div className="container ">
//         <div style={{ padding: "20px" }} className="search__data">
//           <h4 className="montaga-regulars dataHead ">
//             Empowering Healthcare through Diagnostic Excellence
//           </h4>
//           <p className="montaga-regulars dataHead">
//             8th & 9th February 2025, Eros Hotel, New Delhi
//           </p>
//           <div className="fetching__data">
//             <div>
//               <h2 className="montaga-regulars searchNam ">Search Name</h2>
//               <form onSubmit={handleSubmit(searchUser)}>
//                 <input
//                   {...register("name")}
//                   placeholder="Enter name"
//                   required
//                   className="input__name"
//                 />
//                 <button
//                   type="submit"
//                   className="search__button montaga-regulars"
//                   disabled={loading}>
//                   {loading && loadingMessage === "Loading..."
//                     ? "Loading..."
//                     : "Search"}
//                 </button>
//               </form>

//               {loading && <p className="loading_message">{loadingMessage}</p>}

//               {!selectedUser && userData.length > 0 && (
//                 <div>
//                   <h3 className="montaga-regulars text-center">Select Name</h3>
//                   {userData.map((user, index) => (
//                     <div key={index} className="user-card fetching__data">
//                       <div className="imn ">
//                         <p className="montaga-regulars">
//                           <strong>Name:</strong> {user.name}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Email:</strong> {user.email}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Phone:</strong> {user.phone}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Organization:</strong> {user.organization}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Present:</strong>{" "}
//                           {user.Present || "Not updated"}
//                         </p>
//                         <div className="btn_Select">
//                           <button
//                             className="select__button montaga-regulars"
//                             onClick={() => setSelectedUser(user)}>
//                             Select
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {selectedUser && (
//                 <div className="montaga-regulars imn mt-5">
//                   <h3 className="text-center update_text">Update User</h3>
//                   <p>
//                     <strong>Name:</strong> {selectedUser.name}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {selectedUser.email}
//                   </p>
//                   <p>
//                     <strong>Phone:</strong> {selectedUser.phone}
//                   </p>
//                   <p>
//                     <strong>Organization:</strong> {selectedUser.organization}
//                   </p>
//                   <p>
//                     <strong>Present:</strong>{" "}
//                     {selectedUser.Present || "Not updated"}
//                   </p>
//                   <strong>Select Updater:</strong>
//                   <select
//                     className="input__name select__box"
//                     value={selectedUpdater}
//                     onChange={(e) => setSelectedUpdater(e.target.value)}>
//                     <option value="">-Select-</option>
//                     {updaters.map((name, index) => (
//                       <option key={index} value={name}>
//                         {name}
//                       </option>
//                     ))}
//                   </select>
//                   <br></br>
//                   <div className="btn_Select">
//                     <button
//                       className="button__mark"
//                       onClick={() => updateUserStatus("Yes")}
//                       disabled={loading}>
//                       {loading && loadingMessage === "Updating data..."
//                         ? "Updating..."
//                         : "Mark Yes"}
//                     </button>
//                     <button
//                       className="button__mark hi"
//                       onClick={() => updateUserStatus("No")}
//                       disabled={loading}>
//                       {loading && loadingMessage === "Updating data..."
//                         ? "Updating..."
//                         : "Mark No"}
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// (Partial Name Matching) code for example and Updater add the person who si updating code

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import "./App.css";
// import Headers from "./header";

// const SHEETDB_API = import.meta.env.VITE_SEARCH_REQUESTDB;

// const App = () => {
//   const { register, handleSubmit } = useForm();
//   const [userData, setUserData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedUpdater, setSelectedUpdater] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [loadingMessage, setLoadingMessage] = useState("");

//   const updaters = [
//     "Rajendar",
//     "Rajesh J",
//     "Naresh",
//     "Ibraz",
//     "Sharthak",
//     "Ganesh",
//   ];

//   const searchUser = async (data) => {
//     setLoading(true);
//     setLoadingMessage("Loading...");
//     try {
//       // Modified API call to allow searching for partial names
//       const response = await fetch(`${SHEETDB_API}/search?name=*${data.name}*`);
//       const result = await response.json();
//       if (result.length > 0) {
//         setUserData(result);
//         setSelectedUser(null);
//       } else {
//         setUserData([]);
//         setSelectedUser(null);
//         Swal.fire({
//           icon: "error",
//           title: "Not Found",
//           text: "No data found for the given name!",
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     } finally {
//       setLoading(false);
//       setLoadingMessage("");
//     }
//   };

//   const updateUserStatus = async (status) => {
//     if (!selectedUser || !selectedUpdater) {
//       Swal.fire({
//         icon: "warning",
//         title: "Select Updater",
//         text: "Please select the person updating the data before proceeding!",
//       });
//       return;
//     }
//     setLoading(true);
//     setLoadingMessage("Updating data...");

//     try {
//       const response = await fetch(`${SHEETDB_API}/id/${selectedUser.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           data: [{ Present: status, "Updation Person": selectedUpdater }],
//         }),
//       });

//       if (response.ok) {
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Data updated successfully!",
//         });

//         const updatedUser = {
//           ...selectedUser,
//           Present: status,
//           "Updation Person": selectedUpdater,
//         };
//         setSelectedUser(updatedUser);
//         setUserData((prevData) =>
//           prevData.map((user) =>
//             user.id === selectedUser.id ? updatedUser : user
//           )
//         );

//         // Reset the select box after updating
//         setSelectedUpdater("");
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Failed to update data!",
//         });
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//     } finally {
//       setLoading(false);
//       setLoadingMessage("");
//     }
//   };

//   return (
//     <div className="odm">
//       <Headers />
//       <div className="container ">
//         <div style={{ padding: "20px" }} className="search__data">
//           <h4 className="montaga-regulars dataHead ">
//             Empowering Healthcare through Diagnostic Excellence
//           </h4>
//           <p className="montaga-regulars dataHead">
//             8th & 9th February 2025, Eros Hotel, New Delhi
//           </p>
//           <div className="fetching__data">
//             <div>
//               <h2 className="montaga-regulars searchNam ">Search Name</h2>
//               <form onSubmit={handleSubmit(searchUser)}>
//                 <input
//                   {...register("name")}
//                   placeholder="Enter name"
//                   required
//                   className="input__name"
//                 />
//                 <button
//                   type="submit"
//                   className="search__button montaga-regulars"
//                   disabled={loading}>
//                   {loading && loadingMessage === "Loading..."
//                     ? "Loading..."
//                     : "Search"}
//                 </button>
//               </form>

//               {loading && <p className="loading_message">{loadingMessage}</p>}

//               {!selectedUser && userData.length > 0 && (
//                 <div>
//                   <h3 className="montaga-regulars text-center">Select Name</h3>
//                   {userData.map((user, index) => (
//                     <div key={index} className="user-card fetching__data">
//                       <div className="imn ">
//                         <p className="montaga-regulars">
//                           <strong>Name:</strong> {user.name}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Email:</strong> {user.email}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Phone:</strong> {user.phone}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Organization:</strong> {user.organization}
//                         </p>
//                         <p className="montaga-regulars">
//                           <strong>Present:</strong>{" "}
//                           {user.Present || "Not updated"}
//                         </p>
//                         <div className="btn_Select">
//                           <button
//                             className="select__button montaga-regulars"
//                             onClick={() => setSelectedUser(user)}>
//                             Select
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {selectedUser && (
//                 <>
//                   <div className="montaga-regulars imn mt-5">
//                     <h3 className="text-center update_text">Update User</h3>
//                     <p>
//                       <strong>Name:</strong> {selectedUser.name}
//                     </p>
//                     <p>
//                       <strong>Email:</strong> {selectedUser.email}
//                     </p>
//                     <p>
//                       <strong>Phone:</strong> {selectedUser.phone}
//                     </p>
//                     <p>
//                       <strong>Organization:</strong> {selectedUser.organization}
//                     </p>
//                     <p>
//                       <strong>Present:</strong>{" "}
//                       {selectedUser.Present || "Not updated"}
//                     </p>
//                     <strong>Select Updater:</strong>
//                     <select
//                       className="input__name select__box"
//                       value={selectedUpdater}
//                       onChange={(e) => setSelectedUpdater(e.target.value)}>
//                       <option value="">-Select-</option>
//                       {updaters.map((name, index) => (
//                         <option key={index} value={name}>
//                           {name}
//                         </option>
//                       ))}
//                     </select>
//                     <br />
//                     <div className="btn_Select">
//                       <button
//                         className="button__mark"
//                         onClick={() => updateUserStatus("Yes")}
//                         disabled={loading}>
//                         {loading && loadingMessage === "Updating data..."
//                           ? "Updating..."
//                           : "Mark Yes"}
//                       </button>
//                       <button
//                         className="button__mark hi"
//                         onClick={() => updateUserStatus("No")}
//                         disabled={loading}>
//                         {loading && loadingMessage === "Updating data..."
//                           ? "Updating..."
//                           : "Mark No"}
//                       </button>
//                     </div>
//                   </div>
//                   <div className="btn_Select">
//                     <button
//                       className="select__button mt-3"
//                       onClick={() => setSelectedUser(null)}>
//                       Back
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
