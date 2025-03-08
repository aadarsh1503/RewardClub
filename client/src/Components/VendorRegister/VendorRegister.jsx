// import { useState } from "react";
// import React from "react";
// import il from "./il.jpg";

// const VendorRegister = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [properties, setProperties] = useState([]);
//   const [attachment, setAttachment] = useState(null);

//     const [pointValue, setPointValue] = useState("");
//     const [pointValue1, setPointValue1] = useState("");
  
//     const handleInputChange = (e) => {
//         let value = e.target.value;
    
//         // Allow only numbers and one decimal point
//         value = value.replace(/[^0-9.]/g, "");
    
//         // Prevent multiple decimal points
//         const parts = value.split(".");
//         if (parts.length > 2) {
//           value = parts[0] + "." + parts[1];
//         }
    
//         // Limit to 2 digits before and 2 digits after decimal point
//         if (parts[0].length > 2) {
//           parts[0] = parts[0].slice(0, 2);
//         }
//         if (parts[1]?.length > 2) {
//           parts[1] = parts[1].slice(0, 2);
//         }
    
//         value = parts.join(".");
    
//         setPointValue(value);
//       };
//       const handleInputChange1 = (e) => {
//         let value = e.target.value;
    
//         // Allow only numbers and one decimal point
//         value = value.replace(/[^0-9.]/g, "");
    
//         // Prevent multiple decimal points
//         const parts = value.split(".");
//         if (parts.length > 2) {
//           value = parts[0] + "." + parts[1];
//         }
    
//         // Limit to 2 digits before and 2 digits after decimal point
//         if (parts[0].length > 2) {
//           parts[0] = parts[0].slice(0, 2);
//         }
//         if (parts[1]?.length > 2) {
//           parts[1] = parts[1].slice(0, 2);
//         }
    
//         value = parts.join(".");
    
//         setPointValue1(value);
//       };
    

//   // Handle File Input Trigger
//   const handleAttachmentClick = () => {
//     document.getElementById("fileInput").click();
//   };

//   // Handle File Selection (Only One File Allowed)
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setAttachment(file);
//   };

//   // Remove Selected File
//   const removeAttachment = () => {
//     setAttachment(null);
//   };

//   // Add New Property Section
//   const addProperty = () => {
//     setProperties([...properties, { id: Date.now() }]);
//   };

//   // Remove Property Section
//   const removeProperty = (id) => {
//     setProperties(properties.filter((property) => property.id !== id));
//   };
  

//   return (
//     <div className="min-h-screen flex mt-32 items-center font-sans justify-center bg-white relative">
//       <div className="w-full max-w-4xl p-8 shadow-lg rounded-lg relative">
//         <img
//           src={il}
//           alt="Decorative"
//           className="absolute top-4 right-1  w-full h-full z-0 opacity-80"
//         />

//         <h2 className="text-3xl font-bold text-center mb-6 relative z-10">
//           VENDOR REGISTER
//         </h2>

//         <div className="bg-yellow-300 text-center  py-2 font-semibold mb-8 relative z-10">
//           RETAIL00-8848
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative z-10">
//           <input type="text" placeholder="Vendor Name" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Vendor Phone" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Company Name" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Company Reg Number" className="p-3 border rounded-md" />
//           <input type="email" placeholder="Vendor Email" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Select Country" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Select State" className="p-3 border rounded-md" />
//           <input type="text" placeholder="Select City" className="p-3 border rounded-md" />
//         </div>

//         <textarea placeholder="Address" className="p-3 border rounded-md w-full mb-4 relative z-10"></textarea>

//         <div className="flex items-center space-x-4 mb-6 relative z-10">
//           {/* Hidden File Input */}
//           <input
//             type="file"
//             id="fileInput"
//             className="hidden"
//             onChange={handleFileChange}
//           />
//           <button
//             onClick={handleAttachmentClick}
//             className="bg-blue-600 text-white px-4 py-2  rounded-md"
//           >
//             + Add Attachment
//           </button>

//           <button
//             onClick={addProperty}
//             className="bg-blue-600 text-white px-4 py-2 rounded-md"
//           >
//             + Add Property
//           </button>
//         </div>

//         {/* Show Selected Attachment with Remove Option */}
//         {attachment && (
//           <div className="flex items-center relative z-10 bg-gray-100 p-3 rounded-md mb-4">
//             <p className="text-sm text-gray-600 flex-grow">{attachment.name}</p>
//             <button
//               onClick={removeAttachment}
//               className="text-red-500 font-bold ml-4"
//             >
//               ✕
//             </button>
//           </div>
//         )}

//         {/* Property Fields */}
//         {properties.map((property) => (
//           <div key={property.id} className="grid grid-cols-2 gap-4 mb-4 relative">
//             <input type="text" placeholder="Select Category" className="p-3 border rounded-md" />
//             <input type="text" placeholder="Property Name" className="p-3 border rounded-md" />
//             <input type="text" placeholder="Property Amount" className="p-3 border rounded-md" />
//             <input
//         type="text"
//         value={pointValue1}
//         onChange={handleInputChange1}
//         placeholder="00.00%"
//         className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
           
// <input
//         type="text"
//         value={pointValue}
//         onChange={handleInputChange}
//         placeholder="00.00%"
//         className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//        <select class="p-3 border rounded-md">
//   <option value="" disabled selected>Select Status</option>
//   <option value="active">Active</option>
//   <option value="disable">Disable</option>
// </select>
//             <button
//               onClick={() => removeProperty(property.id)}
//               className="text-red-500 italic absolute right-0 top-0"
//             >
//               REMOVE
//             </button>
//           </div>
//         ))}

//         {/* Terms and Conditions */}
//         <div className="flex items-start relative z-10 mb-6">
//           <input
//             type="checkbox"
//             id="terms"
//             className="mt-1 mr-2"
//             onChange={() => setIsChecked(!isChecked)}
//           />
//           <label htmlFor="terms" className="text-sm">
//             Terms and Conditions May Apply is a documentary that addresses how corporations and the government utilize the information that users provide when agreeing to browse a website, install an application.
//           </label>
//         </div>

//         {/* Register Button */}
//         <button
//           className={`px-6 py-3 rounded-md relative z-10 w-full font-semibold transition-colors ${isChecked ? "bg-yellow-600 hover:bg-yellow-700 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
//           disabled={!isChecked}
//         >
//           REGISTER
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VendorRegister;