// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from "react";
import { peopleData } from "./data";

export const PeopleTableBase = () => {
  //   const [filter, setFilter] = useState("");
  //   const [filteredData, setFilteredData] = useState(peopleData);

  const [sort, setSort] = useState<string | null>(null);
  const [sortProp, desc] = sort?.split(":") || [];
  const sortedPeople = [...peopleData].sort((a, b) => {
    return desc
      ? b[sortProp]?.toString()?.localeCompare(a[sortProp])
      : a[sortProp]?.toString()?.localeCompare(b[sortProp]);
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>

        <thead className="bg-gray-50">
          <tr>
            <SortableColumn
              currentSort={sort}
              prop="name"
              onClick={(prop) => setSort(prop)}
            >
              Name
            </SortableColumn>
            <SortableColumn
              currentSort={sort}
              prop="age"
              onClick={(prop) => setSort(prop)}
            >
              Age
            </SortableColumn>
            <SortableColumn
              currentSort={sort}
              prop="email"
              onClick={(prop) => setSort(prop)}
            >
              Email
            </SortableColumn>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function SortableColumn({ currentSort, prop, onClick, children }) {
  let [sortProp, desc] = currentSort?.split(":") || [];
  let newSort;

  if (prop !== sortProp) {
    newSort = prop;
  } else if (sortProp === prop && !desc) {
    newSort = `${prop}:desc`;
  } else {
    newSort = null;
  }

  return (
    <th
      scope="col"
      className="py-3.5 px-3 first:pl-4 last:pr-4 sm:last:pr-6 text-left text-sm text-gray-900 sm:first:pl-6"
    >
      <button
        onClick={() => onClick(newSort)}
        className="inline-flex font-semibold font group"
      >
        {children}
        <span
          className={`${
            sortProp === prop
              ? "text-gray-900 bg-gray-200 group-hover:bg-gray-300"
              : "text-gray-400 group-hover:visible invisible"
          } flex-none ml-2 rounded`}
        >
          ⬇
        </span>
      </button>
    </th>
  );
}
