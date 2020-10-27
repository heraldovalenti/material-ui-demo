import { ButtonProps, ButtonOverrides } from "./Button";
import { IconButtonProps, IconButtonOverrides } from "./IconButton";
import { MenuItemProps, MenuItemOverrides } from "./MenuItem";
import { ListItemProps, ListItemOverrides } from "./ListItem";
import { PaperProps, PaperOverrides } from "./Paper";
import { TableRowProps, TableRowOverrides } from "./TableRow";

export const componentProps = {
    ...ButtonProps,
    ...IconButtonProps,
    ...MenuItemProps,
    ...ListItemProps,
    ...PaperProps,
    ...TableRowProps,
};

export const componentOverrides = {
    ...ButtonOverrides,
    ...IconButtonOverrides,
    ...MenuItemOverrides,
    ...ListItemOverrides,
    ...PaperOverrides,
    ...TableRowOverrides,
};
