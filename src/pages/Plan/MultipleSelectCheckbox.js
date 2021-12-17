import React, { useState } from "react";

const MultipleSelectCheckbox = () => {
    const [holidays, setHolidays] = useState({
        federal: [
            { name: "Projects", selected: false },
            { name: "Tasks", selected: false },
            { name: "Gantt", selected: false },
            { name: "Timesheet", selected: false },
            { name: "Team Members", selected: false },
            { name: "Client", selected: false },
            { name: "Invoices", selected: false },
            { name: "Payments", selected: false },
            { name: "Expenses", selected: false },
            { name: "Calenders", selected: false },
            { name: "Leavs", selected: false },
            { name: "Todo", selected: false },
            { name: "Notes", selected: false },
            { name: "Chat", selected: false },
            { name: "Leads", selected: false },
            { name: "Payment Gateway", selected: false },
            { name: "Taxes", selected: false },
            { name: "Custom Currency", selected: false },
            { name: "User Permission", selected: false },
            { name: "Notification", selected: false },
            { name: "Languages", selected: false },
            { name: "Video Meetings", selected: false },
            { name: "Estimates", selected: false },
            { name: "Reports", selected: false }
        ],
        other: [
            { name: "Black Friday", selected: false },
            { name: "Christmas Eve", selected: false },
            { name: "New Year's Eve", selected: false }
        ]
    });

    const handleOnChange = (e, type) => {
        const { name, checked } = e.target;
        const newHoliday = [...holidays[type]];
        const index = newHoliday.findIndex(h => h.name === name);
        if (index > -1) {
            newHoliday[index] = { name, selected: checked };
        }
        setHolidays(h => ({ ...h, [type]: newHoliday }));
    };

    const handleOnSelectAll = (e, type) => {
        const { checked } = e.target;
        let newHoliday = [...holidays[type]];
        if (!checked) {
            newHoliday = newHoliday.map(opt => ({ ...opt, selected: false }));
        } else {
            newHoliday = newHoliday.map(opt => ({ ...opt, selected: true }));
        }
        setHolidays(h => ({ ...h, [type]: newHoliday }));
    };

    const renderCheckboxList = (options, type) =>
        options.map(opt => (
            <div key={type}>
                <label>
                    <input
                        type="checkbox"
                        name={opt.name}
                        onChange={e => handleOnChange(e, type)}
                        checked={opt.selected}
                    />
                    <span style={{ marginRight: "8px" }}> {opt.name} </span>
                </label>
            </div>
        ));

    const renderSelectAllCheckbox = type => (
        <div>
            <label>
                <input
                    type="checkbox"
                    onChange={e => handleOnSelectAll(e, type)}
                    checked={holidays[type].every(opt => opt.selected)}
                />
                <span style={{ marginRight: "8px" }}>{`Select All`}</span>
            </label>
        </div>
    );

    return (
        <div className="row">
            <div className="col-sm-12 col-md-12">
                {renderSelectAllCheckbox("federal")}
                {renderCheckboxList(holidays.federal, "federal")}
            </div>
        </div>
    );
};

export default MultipleSelectCheckbox;
