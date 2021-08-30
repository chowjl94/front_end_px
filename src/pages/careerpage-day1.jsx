
import * as React from "react";
import { CareerItem } from "../components/career-item";
import { useState, useEffect } from "react";

const getJobs = () =>
  fetch(`https://ecomm-service.herokuapp.com/job`, {}).then((res) =>
    res.json()
  );

const createJobListing = (data) =>
  fetch("https://ecomm-service.herokuapp.com/job", {
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

export const Career = () => {
  const [joblistings, setJoblistings] = useState(undefined);
  const [value, setValue] = useState(1);
  const [headcount, setHeadCount] = useState(1);

  // const [page, setPage] = useState(1);
  const [jobtitle, setJobTitle] = usePersistedState("jobtitle", "");
  const [department, setDepartment] = usePersistedState("deparment", "");
  const [level, setLevel] = usePersistedState("level", "internship");

  const [description, setDescription] = usePersistedState("description", "");
  // const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const loadJobs = () => getJobs().then((data) => setJoblistings(data));

  useEffect(() => {
    getJobs().then((jobs) => setJoblistings(jobs));
  }, []);

  const processSubmit = (ev) => {
    ev.preventDefault();
    createJobListing({
      title: jobtitle,
      department,
      level,
      headcount: Number(headcount),
      summary: description
    }).then(() => {
      loadJobs();
      setJobTitle("");
      setDepartment("");
      setLevel("Internship");
      setDescription("");
      setHeadCount(1);
    });
  };
  const processDelete = (index) => {
    // gives back array that is one short of the  joblisting shown before

    const updatedlisitngs = [
      ...joblistings.slice(0, index),
      ...joblistings.slice(index + 1)
    ];
    setJoblistings(updatedlisitngs);
  };
  // const processEdit = () => {
  //   setEditing(joblistings._id);
  // };

  return (
    <main className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
        <div className="mb-8">
          <div>
            <h1 className="text-6xl mb-4 font-extrabold">Careers</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="md:w-1/2">
            <form onSubmit={processSubmit}>
              <div
                className="
                bg-white
                overflow-hidden
                shadow
                rounded-lg
                divide-y divide-gray-200
              "
              >
                <div className="px-4 py-5 sm:px-6 text-lg">ADD JOB POSTING</div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="space-y-5">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label
                        htmlFor="job-title"
                        className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        sm:mt-px sm:pt-2
                      "
                      >
                        Job Title
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          id="job-title"
                          value={jobtitle}
                          onChange={(ev) => setJobTitle(ev.target.value)}
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
                        />
                      </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label
                        htmlFor="job-level"
                        className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        sm:mt-px sm:pt-2
                      "
                      >
                        Level
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <select
                          id="job-level"
                          onChange={(ev) => setLevel(ev.target.value)}
                          value={level}
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
                        >
                          <option value="internship">Internship</option>
                          <option value="entry">Entry</option>
                          <option value="experienced">Experienced</option>
                          <option value="manager">Manager</option>
                        </select>
                      </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label
                        htmlFor="job-department"
                        className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        sm:mt-px sm:pt-2
                      "
                      >
                        Department
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input
                          type="text"
                          name="department"
                          id="job-department"
                          value={department}
                          onChange={(ev) => setDepartment(ev.target.value)}
                          placeholder="e.g. Engineering"
                          className="
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          focus:ring-pink-500 focus:border-pink-500
                          border-gray-300
                          rounded-md
                        "
                        />
                      </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label
                        htmlFor="job-summary"
                        className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        sm:mt-px sm:pt-2
                      "
                      >
                        Summary
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                          id="job-summary"
                          name="summary"
                          rows="4"
                          value={description}
                          onChange={(ev) => setDescription(ev.target.value)}
                          className="
                  
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          focus:ring-pink-500 focus:border-pink-500
                          border border-gray-300
                          rounded-md
                        "
                        />
                      </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label
                        htmlFor="headcount"
                        className="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        sm:mt-px sm:pt-2
                      "
                      >
                        Headcount
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="relative w-32">
                          <button
                            type="button"
                            // value={value}
                            // onChange={(ev) => setHeadCount(ev.target.value)}
                            className="
                            absolute
                            left-0
                            inset-y-0
                            px-1.5
                            text-gray-400
                          "
                            id="headcount-minus-btn"
                            onClick={() => {
                              if (value > 1) {
                                setValue(value - 1);
                              }
                            }}
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M20 12H4"
                              ></path>
                            </svg>
                          </button>
                          <input
                            type="text"
                            name="headcount"
                            id="headcount"
                            className="
                            block
                            w-full
                            px-9
                            text-center
                            shadow-sm
                            sm:text-sm
                            focus:ring-pink-500 focus:border-pink-500
                            border-gray-300
                            rounded-md
                          "
                            readOnly=""
                          />
                          <button
                            type="button"
                            className="
                            absolute
                            right-0
                            inset-y-0
                            px-1.5
                            text-gray-400
                          "
                            id="headcount-plus-btn"
                            name="headcount"
                            // value={value}
                            // onChange={(ev) => setHeadCount(ev.target.value)}
                            onClick={() => {
                              setValue(value + 1);
                            }}
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div
                          id="headcount-error"
                          className="text-red-500 text-xs pt-1 hidden"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4 space-x-4 sm:px-6 text-right">
                  <button
                    className="
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
                </div>
              </div>
            </form>
          </div>

          <div className="max-w-xl mx-auto p-6 space-y-5">
            {joblistings &&
              joblistings.map((job, index) => (
                <CareerItem
                  index={index}
                  title={job.title}
                  department={job.department}
                  level={job.level}
                  // onEdit={processEdit}
                  onDelete={processDelete}
                  key={job._id}
                />
              ))}
            <input
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
              value={editingText}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
