"use client";

import React, { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      // street: false,
      // city: false,
      // zip_code: false,
      // online_link: false,
      year_built: false,
      // asking_price: false,
      // offer_price: false,
      info: false,
      down_payment_percentage: false,
      renovations: false,
      closing_cost: false,
      interest_rate: false,
      years: false,
      property_tax_rate: false,
      property_sqft: false,
      lot_sqft: false,
      section8: false,
      lease: false,
      disclosure_or_inspections: false,
      down_payment: false,
      loan_amount: false,
      total_cost: false,
      monthly_mortgage: false,
      monthly_property_taxes: false,
      monthly_insurance: false,
      monthly_utilities: false,
      monthly_fees: false,
      total_monthly_cost: false,
      actual_monthly_rental_income: false,
      actual_net: false,
      actual_annual_net: false,
      // actual_roi: false,
      actual_dcsr: false,
      actual_income_over_debt: false,
      actual_cap_rate: false,
      projected_monthly_rental_income: false,
      project_net: false,
      projected_annual_net: false,
      projected_roi: false,
      projected_dcsr: false,
      projected_income_over_debt: false,
      projected_cap_rate: false,
      years_until_maxed_rents: false,
    });
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [stateData, setStateData] = useState(data);
  const [editedRows, setEditedRows] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      columnFilters,
    },
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    meta: {
      editedRows,
      setEditedRows,
      revertData: (rowIndex: number, revert: boolean) => {
        if (revert) {
          setStateData((old) =>
            old.map((row, index) =>
              index === rowIndex ? stateData[rowIndex] : row
            )
          );
        } else {
          setStateData((old) =>
            old.map((row, index) =>
              index === rowIndex ? stateData[rowIndex] : row
            )
          );
        }
      },
      updateData: (rowIndex: number, columnId: string, value: string) => {
        setStateData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {"No data results"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
