/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppPagination from "../../components/AppPagination";
import ContentDetails from "../../components/ContentDetails";
import ErrorDisplayMessage from "../../components/ErrorDisplayMessage";
import LoadingComponent from "../../components/Loading";
import { fetchAllIncomeAction } from "../../redux/slices/income/incomeSlices";


const IncomeList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  //get expenses from store
  const expenses = useSelector(state => state.income);
  const { loading, appErr, serverErr, incomeList } = expenses;

  //fetch expenses
  useEffect(() => {
    dispatch(fetchAllIncomeAction(+page));
  }, [dispatch, page, setPage]);
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : appErr || serverErr ? (
        <ErrorDisplayMessage>
          {serverErr} {appErr}
        </ErrorDisplayMessage>
      ) : (
        <section className="py-6">
          <div className="container-fluid">
            <div className="position-relative border rounded-2">

              <div className="pt-8 px-8 mb-8 custom_income_box">
                <div className="custom_income_text_box">
                  <h6 className="mb-0 fs-3 text-secondary">All users income transactions</h6>
                  <p className="mb-0">
                    Below are the histories of all users income transactions.
                  </p>
                </div>
                <Link
                  to="/expenses"
                  id="custom_income_btn"
                  className="btn btn-outline-secondary me-2 m-2"
                >
                  View Expense list
                </Link>
              </div>

              <table className="table">
                <thead>
                  <tr className="table-active main-global-table-box">
                    <th scope="col">
                      User
                    </th>
                    <th scope="col">
                      Title
                    </th>
                    <th scope="col">
                      Description
                    </th>
                    <th scope="col">
                      Amount
                    </th>
                    <th scope="col">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <h1>Loading...</h1>
                  ) : appErr || serverErr ? (
                    <div>err</div>
                  ) : incomeList?.docs?.length <= 0 ? (
                    <h1>No Expense Found</h1>
                  ) : (
                    incomeList?.docs?.map(exp => (
                      <>
                        <ContentDetails key={exp?._id} item={exp} />
                      </>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <AppPagination
              setPage={setPage}
              pageNumber={incomeList?.totalPages}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default IncomeList;
