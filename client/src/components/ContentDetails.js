import React from "react";
import currencyFormatter from "../utils/cuurencyFormatter";
import dateFormatter from "../utils/dateFormatter";


const ContentDetails = ({ item }) => {

  return (
    <>
      <tr className="align-middle text-dark main-global-table-box">
        <th className="p-6" scope="row">
          {item?.user?.firstname} {item?.user?.lastname}
        </th>
        <td className="">{item?.title}</td>
        <td className="p-6">{item?.description}</td>
        <td className="p-6">{currencyFormatter("USD", item?.amount)}</td>
        <td className="p-6">
          {item?.createdAt && dateFormatter(item?.createdAt)}
        </td>
        {/* <td className="p-6">
          <button
            className="badge bg-warning-light border text-info"
            style={{cursor: "default"}}
          >
            <i class="fa fa-check"></i>
          </button>
        </td> */}
      </tr>
    </>
  );
};


export default ContentDetails;
