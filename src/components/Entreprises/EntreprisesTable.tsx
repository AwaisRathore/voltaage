import {
  ColumnDef,
  SortingState,
  getSortedRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmployeesList, { EmployeesListType } from "@/utils/EmployeesListData";
import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import dots  from '@/assets/dots.svg';


export default function EntreprisesTable() {
  return (
    <>
      <DataTable columns={columns} data={EmployeesList} />
    </>
  );
}

const columns: ColumnDef<EmployeesListType>[] = [
  {
    id: "id",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "client",
    header: ({ column }) => {
      return (
        <Button
          className="px-0 hover:bg-slate-50"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "totalEmployees",
    header: ({ column }) => {
      return (
        <Button
          className="px-0 hover:bg-slate-50"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Questionnaires employees
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value: number = row.getValue("totalEmployees");
      return <div className="flex justify-between number items-center"><span>{value}</span> <img src={dots} /></div>;
    },
  },
];

interface DataTableProps {
  columns: ColumnDef<EmployeesListType, keyof EmployeesListType>[];
  data: EmployeesListType[];
}

function DataTable({ columns, data }: DataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      rowSelection
    },
    getCoreRowModel: getCoreRowModel(),
  });

//   function addChargingPoints() {
//     // Each charging point should have an ID we can simply get all the IDs from here and add the corresponding points to each station
//     // If the user again wants to add some other charging point we can only show him the remaining charging points
//     // we can add a button to the selected points that are visible in the charging station that will delete the charging point from the station

//     console.log(table.getFilteredSelectedRowModel().rows);
//   }

  return (
    <div>
      <div className="rounded-md border-0 ">
        <Table className="border-separate	border-spacing-y-4	">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="hover:bg-slate-50" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="px-6" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="rounded-[40px]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    className="bg-white shadow hover:bg-white"
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        className="text-small has-[.number]:w-3/5 [&:has([role=checkbox])]:w-10 mb-2 bg-transparent p-6 font-medium text-black"
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
