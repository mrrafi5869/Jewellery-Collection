import React from 'react';

const Booking = () => {
    return (
        <form className="w-9/12 mx-auto border border-gray-300 p-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Product Name"
            className="input w-full input-bordered my-3"
            required
          />
          <input
            name="Color"
            type="text"
            placeholder="Product Color"
            className="input w-full input-bordered my-3"
            required
          />
          <input
            name="price"
            type="text"
            placeholder="Price"
            className="input w-full input-bordered my-3"
            required
          />
          <input
            name="desc"
            type="text"
            placeholder="Description"
            className="input w-full input-bordered my-3"
            required
          />
        </div>
        <div className="flex my-9">
          <input className="btn bg-ghost w-32" type="submit" value="Send" />
        </div>
      </form>
    );
};

export default Booking;