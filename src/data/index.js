export const SERVICES_LIST = [
    { id: 0, severity: 1, name: "insertLoanNormalComposite" },
    { id: 1, severity: 2, name: "insertLoanNormal" },
    { id: 2, severity: 0, name: "readGeneral_TableBy_Nemotecnic" },
    { id: 3, severity: 3, name: "insertLoanNormal_CMM" },
];

export const SERVICE_PARAMETERS_COLUMNS = [
    {
        Header: "Type",
        accessor: "type",
    },
    {
        Header: "Name",
        accessor: "name",
    },
];

export const SERVICE_PARAMETERS_DATA = [
    { id: 0, type: "Loan", name: "in:loan" },
    { id: 1, type: "Customer", name: "in:customer" },
    { id: 2, type: "Loan", name: "in:loan" },
];

export const INSTRUCTION_PARAMETERS_COLUMNS = [
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Value",
        accessor: "value",
    },
];

export const INSTRUCTION_PARAMETERS_DATA = [
    { id: 0, name: "in:loan: Loan", value: "in:loan" },
    { id: 1, name: "in:customer: Customer", value: "in:customer" },
    { id: 2, name: "Out:loan: Loan", value: "out:loan" },
];

export const SERVICE_INSTRUCTIONS_COLUMNS = [
    {
        Header: "#",
        accessor: (row, i) => i,
        width: 50,
    },
    {
        Header: "",
        accessor: "isActive",
        width: 50,
    },
    {
        Header: "Verb",
        accessor: "verb",
    },
    {
        Header: "Entity",
        accessor: "entity",
    },
    {
        Header: "Rest of the Name",
        accessor: "restOfTheName",
    },
    {
        Header: "Project",
        accessor: "project",
    },
];

export const SERVICE_INSTRUCTIONS_DATA = [
    { id: 0, isActive: true, verb: "verify", entity: "Context", restOfTheName: "Pre", project: "Tech" },
    { id: 1, isActive: true, verb: "insert", entity: "Loan", restOfTheName: "NormalComposite", project: "Tech" },
    { id: 2, isActive: true, verb: "set", entity: "Context", restOfTheName: "Post", project: "Tech" },
];
