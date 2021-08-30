import * as React from "react";
import { ListingItem } from "../components/listing-item";
import { useState, useRef, useEffect } from "react";

const getListings = (page, signal) =>
  fetch(`https://ecomm-service.herokuapp.com/marketplace?page=${page}`, {
    signal
  }).then((res) => res.json());

const createListing = (data) =>
  fetch("https://ecomm-service.herokuapp.com/marketplace", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json());

const usePersistedState = (storageKey, defaultValue) => {
  const [value, setValue] = useState(
    () => sessionStorage.getItem(storageKey) || defaultValue
  );

  return [value, setValue];
};

export const Marketplace = () => {
  const [listings, setListings] = useState(undefined);

  const [page, setPage] = useState(1);
  const [title, setTitle] = usePersistedState("title", "");

  const [price, setPrice] = usePersistedState("price", "");
  const [description, setDescription] = usePersistedState("description", "");
  const [condition, setCondition] = usePersistedState("condition", "new");
  const [availability, setAvailability] = usePersistedState(
    "availability",
    "in-stock"
  );
  const [numOfStock, setNumOfStock] = usePersistedState("numOfStock", "");

  const titleInputRef = useRef();
  const loadListing = (pageNum, signal) =>
    getListings(pageNum, signal).then((data) => setListings(data));

  useEffect(() => {
    const ab = new AbortController();
    loadListing(page, ab.signal);
    return () => {
      ab.abort();
    };
  }, [page]);

  // create then load then set the states back to original
  const processSubmit = (ev) => {
    ev.preventDefault();
    createListing({
      title,
      price: Number(price),
      description,
      condition,
      availability,
      numOfStock: Number(numOfStock)
    }).then(() => {
      loadListing();
      setTitle("");
      setPrice("");
      setDescription("");
      setCondition("new");
      setAvailability("in-stock");
      setNumOfStock("");

      if (titleInputRef.current) {
        titleInputRef.current.focus();
      }
    });
  };
  const processDelete = (index) => {
    // gives back array that is one short of the  joblisting shown before

    const updatedlisitngs = [
      ...listings.slice(0, index),
      ...listings.slice(index + 1)
    ];
    setListings(updatedlisitngs);
  };
  return (
    <main className="bg-gray-50 lg:flex">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
              Marketplace
            </h1>
          </div>
          <div className="flex justify-between">
            <button
              className="
              bg-transparent 
              hover:bg-pink-600 
              text-pink-700 
              font-semibold 
              hover:text-white 
              py-2 px-10 
              border 
              border-pink-600 
              hover:border-transparent 
              rounded-2xl
              focus:ring-pink-900
              m-2
            "
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>
            <button
              className="bg-transparent 
              hover:bg-pink-600 
              text-pink-700 
              font-semibold 
              hover:text-white 
              py-2 px-10 
              border 
              border-pink-600 
              hover:border-transparent 
              rounded-2xl
              focus:ring-pink-900
              m-2
            "
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
          <div
            className="
            grid
            md:grid-cols-2
            gap-x-4 gap-y-8
            xl:grid-cols-3 xl:gap-x-6
          "
          >
            {listings &&
              listings.map((item,index) => (
                <ListingItem
                  index ={index}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  availableStock={item.numOfStock}
                  onDelete= {processDelete}
                  onlyOne={item.availability === "single-item"}
                  key={item._id}
                />
              ))}
          </div>
        </div>
      </div>

      {/* <!-- =============== form start ============ --> */}
      <div
        className="
    flex-initial
    bg-white
    w-full
    lg:max-w-md
    border-b border-gray-100
  "
      >
        <form onSubmit={processSubmit}>
          <div className="py-6 px-4 bg-pink-700 sm:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-white">New Listing</h2>
            </div>
            <div className="mt-1">
              <p className="text-sm text-pink-300">
                Get started by filling in the information below to create your
                new listing.
              </p>
            </div>
          </div>
          <div className="px-4 sm:px-6 pb-12">
            <div className="space-y-6 pt-6 pb-5">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-900"
                >
                  Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          focus:ring-pink-500 focus:border-pink-500
                          border-gray-300
                          rounded-md
                        "
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                    ref={titleInputRef}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-900"
                >
                  Price
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="
                            block
                            w-full
                            shadow-sm
                            sm:text-sm
                            focus:ring-pink-500 focus:border-pink-500
                            border-gray-300
                            rounded-md
                          "
                    value={price}
                    onChange={(ev) => setPrice(ev.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    required
                    className="
                            block
                            w-full
                            shadow-sm
                            sm:text-sm
                            focus:ring-pink-500 focus:border-pink-500
                            border border-gray-300
                            rounded-md
                          "
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                  ></textarea>
                </div>
              </div>
              <div>
                <label
                  htmlFor="condition"
                  className="block text-sm font-medium text-gray-900"
                >
                  Condition
                </label>

                <div className="mt-1">
                  <select
                    id="condition"
                    name="condition"
                    required
                    className="
                          block
                          w-full
                          pl-3
                          pr-10
                          py-2
                          text-base
                          border-gray-300
                          focus:outline-none
                          focus:ring-pink-500
                          focus:border-pink-500
                          sm:text-sm
                          rounded-md
                        "
                    value={condition}
                    onChange={(ev) => setCondition(ev.target.value)}
                  >
                    <option value="new">New</option>
                    <option value="used_like-new">Used (like new)</option>
                    <option value="used_good">Used (good)</option>
                    <option value="used_fair">Used (fair)</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium text-gray-900"
                >
                  Availability
                </label>
                <div className="mt-1">
                  <select
                    id="availability"
                    name="availability"
                    required
                    className="
                            block
                            w-full
                            pl-3
                            pr-10
                            py-2
                            text-base
                            border-gray-300
                            focus:outline-none
                            focus:ring-pink-500
                            focus:border-pink-500
                            sm:text-sm
                            rounded-md
                          "
                    value={availability}
                    onChange={(ev) => setAvailability(ev.target.value)}
                  >
                    <option value="in-stock">In Stock</option>
                    <option value="single-item">Single Item</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="numOfStock"
                  className="block text-sm font-medium text-gray-900"
                >
                  Number of Available Stock
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="numOfStock"
                    id="numOfStock"
                    required
                    className="
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          focus:ring-pink-500 focus:border-pink-500
                          border-gray-300
                          rounded-md
                        "
                    value={numOfStock}
                    onChange={(ev) => setNumOfStock(ev.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="
                ml-4
                inline-flex
                justify-center
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-pink-600
                hover:bg-pink-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-pink-500
              "
            id="submit-btn"
          >
            ADD
          </button>
        </form>
      </div>
    </main>
  );
};
