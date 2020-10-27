const [ButtonProps, ButtonOverrides] = [
    {
        MuiButton: {
            disableElevation: true,
            // disableRipple: true,
        },
    },
    {
        MuiButton: {
            root: {
                borderRadius: 100,
            },
        },
    },
];

export { ButtonProps, ButtonOverrides };
