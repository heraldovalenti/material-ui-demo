import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export default function Tags({ data }) {
    const SEPARATOR = "/";
    const ID_KEY = "_id";
    const options = [];
    const generateId = ({ item, parent }) => {
        const itemId = parent ? `${parent[ID_KEY]}${SEPARATOR}${item.name}` : item.name;
        item[ID_KEY] = itemId;
        options.push(item[ID_KEY]);
        if (item.childrens) {
            item.childrens.forEach((child) => generateId({ parent: item, item: child }));
        }
    };
    data.forEach((item) => generateId({ item }));
    return (
        <Autocomplete
            multiple
            id="tags-outlined"
            options={options}
            defaultValue={[data[3].name]}
            disableCloseOnSelect
            limitTags={2}
            fullWidth
            renderOption={(option, { selected }) => <>{option}</>}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label="filterSelectedOptions" placeholder="Favorites" />
            )}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip label={option} {...getTagProps({ index })} />)
            }
        />
    );
}
