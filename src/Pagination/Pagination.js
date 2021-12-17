import React, { useState, useRef, useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { allData } from "./constants";

const tableHead = {
    name: "Campaign Name",
    parentId: "Campaign Id",
    campaignType: "Type",
    status: "Status",
    channel: "Channel",
    action: "Actions"
};

const TablePagination = () => {
    const countPerPage = 10;
    const [value, setValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [collection, setCollection] = useState(
        cloneDeep(allData.slice(0, countPerPage))
    );

    const searchData = useRef(
        throttle((val) => {
            const query = val.toLowerCase();
            setCurrentPage(1);
            const data = cloneDeep(
                allData
                    .filter((item) => item.name.toLowerCase().indexOf(query) > -1)
                    .slice(0, countPerPage)
            );
            setCollection(data);
        }, 400)
    );

    useEffect(() => {
        if (!value) {
            updatePage(1);
        } else {
            searchData.current(value);
        }
    }, [value]);

    const updatePage = (p) => {
        setCurrentPage(p);
        const to = countPerPage * p;
        const from = to - countPerPage;
        setCollection(cloneDeep(allData.slice(from, to)));
    };

    const tableRows = (rowData) => {
        const { key, index } = rowData;
        const tableCell = Object.keys(tableHead);
        const columnData = tableCell.map((keyD, i) => {
            return <td key={i}>{key[keyD]}</td>;
        });

        return <tr key={index}>{columnData}</tr>;
    };

    const tableData = () => {
        return collection.map((key, index) => tableRows({ key, index }));
    };

    const headRow = () => {
        return Object.values(tableHead).map((title, index) => (
            <td key={index}>{title}</td>
        ));
    };

    return (
        <>
            <div className="search">
                <input
                    placeholder="Search Campaign"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>{headRow()}</tr>
                </thead>
                <tbody className="trhover">{tableData()}</tbody>
            </table>
            <Pagination
                pageSize={countPerPage}
                onChange={updatePage}
                current={currentPage}
                total={allData.length}
            />
        </>
    );
};
export default TablePagination;
