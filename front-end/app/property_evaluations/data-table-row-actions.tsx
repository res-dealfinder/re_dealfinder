"use client";

import { PropertySchema } from "./propertySchema";
import Link from "next/link";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EditCell } from "./EditCell";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (value: TData) => void;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const property = PropertySchema.parse(row.original);
  console.log(property.id); // Note: use the id for any action (example: delete, view, edit)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">{"Open Menu"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Button
            variant={"ghost"}
            size={"sm"}
            className={"justify-start w-full"}
            asChild
          >
            <Link href={property.online_link}>
              <Eye className="w-4 h-4 text-blue-500" />
              {<span className="ml-2">{"View"}</span>}
            </Link>
          </Button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            variant={"ghost"}
            size={"sm"}
            className={"justify-start w-full"}
            asChild
          >
            <Pencil className="h-4 w-4 text-green-500" />
            {<span className="ml-2">{"Edit"}</span>}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
