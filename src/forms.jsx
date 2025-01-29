import React, { useState } from "react";
import "./index.css";

function Form() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showdata, setshowdata] = useState([]);
  const [editindex, seteditindex] = useState(null);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editindex !== null) {
      const updatedata = [...showdata];
      updatedata[editindex] = formdata;
      setshowdata(updatedata);
      seteditindex(null);
    } else {
      setshowdata((prev) => [...prev, formdata]);
    }

    setformdata({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const deletedata = (index) => {
    setshowdata((prevdata) => prevdata.filter((_, i) => i !== index));
  };

  const editdatas = (index) => {
    setformdata(showdata[index]);
    seteditindex(index);
  };

  return (
    <div className="p-4">
      <form
        id="form"
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md"
      >
        <div className="form-group mb-4">
          <label className="block text-gray-700 mb-2"> Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formdata.name}
            onChange={handlechange}
            placeholder="Enter name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 mb-2"> Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formdata.email}
            onChange={handlechange}
            placeholder="Enter email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 mb-2"> Phone: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formdata.phone}
            onChange={handlechange}
            placeholder="Enter phone"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 mb-2"> Message: </label>
          <textarea
            id="message"
            name="message"
            onChange={handlechange}
            placeholder="Enter message"
            value={formdata.message}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            id="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {editindex !== null ? "Save" : "Sign up"}
          </button>
        </div>
      </form>

      {showdata.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Submitted Data</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Message</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {showdata.map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.phone}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.message}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => deletedata(index)}
                      className="p-2 bg-red-900 text-white border-0 "
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => editdatas(index)}
                      className="p-2 bg-green-900 text-white border-0 ml-5"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Form;
