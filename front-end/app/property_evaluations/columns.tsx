"use client";
import { Property } from "./type";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

import { ColumnDef } from "@tanstack/react-table";
import { TableCell } from "./TableCell";
import { EditCell } from "./EditCell";
export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "street",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Street"} />
    ),
  },
  {
    accessorKey: "city",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"City"} />
    ),
  },
  {
    accessorKey: "zip_code",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Zip Code"} />
    ),
  },
  {
    accessorKey: "online_link",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Online Link"} />
    ),
  },
  {
    accessorKey: "property_sqft",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Property Sq Ft"} />
    ),
  },
  {
    accessorKey: "lot_sqft",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Lot Sq Ft"} />
    ),
  },
  {
    accessorKey: "section8",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Section 8"} />
    ),
  },
  {
    accessorKey: "lease",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Leases"} />
    ),
  },
  {
    accessorKey: "disclosure_or_inspections",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"Disclosures/Inspections"}
      />
    ),
  },
  {
    accessorKey: "year_built",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Year Built"} />
    ),
  },
  {
    accessorKey: "info",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Info"} />
    ),
  },
  {
    accessorKey: "asking_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Asking Price"} />
    ),
    cell: TableCell,
    meta: {
      type: "number",
    },
  },
  {
    accessorKey: "offer_price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Offer Price"} />
    ),
    cell: TableCell,
    meta: {
      type: "number",
    },
  },
  {
    accessorKey: "down_payment_percentage",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Down Payment %"} />
    ),
  },
  {
    accessorKey: "renovations",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Renovations"} />
    ),
  },
  {
    accessorKey: "closing_cost",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Closing Cost"} />
    ),
  },
  {
    accessorKey: "down_payment",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Down Payment"} />
    ),
  },
  {
    accessorKey: "total_cost",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Total Cost"} />
    ),
  },
  {
    accessorKey: "loan_amount",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Loan Amount"} />
    ),
  },
  {
    accessorKey: "interest_rate",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Interest Rate"} />
    ),
  },
  {
    accessorKey: "years",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Years"} />
    ),
  },
  {
    accessorKey: "property_tax_rate",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Property Tax Rate"} />
    ),
  },
  {
    accessorKey: "monthly_mortgage",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Monthly Mortgage"} />
    ),
  },
  {
    accessorKey: "monthly_property_taxes",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Monthly Property Taxes"} />
    ),
  },
  {
    accessorKey: "monthly_insurance",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Monthly Insurance"} />
    ),
  },
  {
    accessorKey: "monthly_utilities",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Monthly Utilities"} />
    ),
  },
  {
    accessorKey: "monthly_fees",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Monthly Fees"} />
    ),
  },
  {
    accessorKey: "total_monthly_cost",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Total Monthly Cost"} />
    ),
  },
  {
    accessorKey: "actual_monthly_rental_income",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"Actual Monthly Rental Income"}
      />
    ),
  },
  {
    accessorKey: "actual_net",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Actual Net"} />
    ),
  },
  {
    accessorKey: "actual_annual_net",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Actual Annual Net"} />
    ),
  },
  {
    accessorKey: "actual_roi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Actual ROI"} />
    ),
  },
  {
    accessorKey: "actual_dcsr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Actual DCSR"} />
    ),
  },
  {
    accessorKey: "actual_income_over_debt",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"Actual Income Over Debt"}
      />
    ),
  },
  {
    accessorKey: "actual_cap_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Actual Cap Rate"} />
    ),
  },
  {
    accessorKey: "projected_monthly_rental_income",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"Projected Monthly Rental Income"}
      />
    ),
  },
  {
    accessorKey: "project_net",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Project Net"} />
    ),
  },
  {
    accessorKey: "projected_annual_net",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Projected Annual Net"} />
    ),
  },
  {
    accessorKey: "projected_roi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Projected ROI"} />
    ),
  },
  {
    accessorKey: "projected_dcsr",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Projected DCSR"} />
    ),
  },
  {
    accessorKey: "projected_income_over_debt",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"Projected Income Over Debt"}
      />
    ),
  },
  {
    accessorKey: "projected_cap_rate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Projected Cap Rate"} />
    ),
  },
  {
    accessorKey: "years_until_maxed_rents",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title={"Years Until Maxed Rents"}
      />
    ),
  },

  {
    id: "actions",
    cell: EditCell,
  },
];
