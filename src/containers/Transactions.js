import React from "react";
import LeftMenu from "../components/LeftMenu";
import TransactionsTable from "../components/transactions/TransactionsTable";
import classes from "./Transactions.module.css";

const Transactions = (props) => {
  return (
    <div className="profile-container row contentContainer">
      <div className="col" style={{ flex: 1 }}>
        <LeftMenu />
      </div>
      <div className="col" style={{ flex: 3 }}>
        <div className="mt-5 pr-4 pl-4 pb-4 contentBack pt-3">
          <h3 className="noMarginBottom mainCoverHeading">Transactions</h3>
          <label className="noMarginBottom mainCoverSubHeading">
            Dashboard/ Transactions
          </label>
          <div className="mt-4">
            <TransactionsTable />
          </div>
          <div className="d-flex mt-5 justify-content-center">
            <div className="d-flex flex-column">
              <label
                className={[
                  `noMarginBottom`,
                  classes.menteesListFooterLabel,
                ].join(" ")}
              >
                Showing 1 of 10 out of no Entries
              </label>
              <div className="d-flex justify-content-center align-items-center">
                <i
                  className={[
                    `fas`,
                    `fa-chevron-left`,
                    classes.listPaginationController,
                  ].join(" ")}
                ></i>
                <label
                  className={[
                    `ml-3`,
                    `mr-3`,
                    `noMarginBottom`,
                    classes.pageNoLabel,
                  ].join(" ")}
                >
                  1
                </label>
                <i
                  className={[
                    `fas`,
                    `fa-chevron-right`,
                    classes.listPaginationController,
                  ].join(" ")}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
