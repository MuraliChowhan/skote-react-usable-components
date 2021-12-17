import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function MultiSelectDropdown() {
    const options = [
        { label: "Monthly", value: "grapes" },
        { label: "Yearly", value: "mango" },
        { label: "3 Days trial", value: "strawberry" },
        { label: "7 Days trial", value: "strawberry" }
    ];

    const [selected, setSelected] = useState([]);

    return (
        <div>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select"}
            />
        </div>
    );
}
