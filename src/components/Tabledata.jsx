import React from 'react';
import { Pencil, Trash2, MoreHorizontal, ChevronsUpDown } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

const students = [
    { OrderNumber: "2002", CustomerName: "Sravya", OrderDate: "17 Dec 2025", status: "Pending", TotalAmount: "100", PaymentStatus: "unpaid", Actions: "edit" },
    { OrderNumber: "2003", CustomerName: "Rahul", OrderDate: "17 Dec 2025", status: "Completed", TotalAmount: "200", PaymentStatus: "paid", Actions: "edit" },
    { OrderNumber: "203", CustomerName: "Rahul", OrderDate: "17 Dec 2025", status: "Refunded", TotalAmount: "200", PaymentStatus: "paid", Actions: "edit" },
    { OrderNumber: "204", CustomerName: "Rahul", OrderDate: "17 Dec 2025", status: "Pending", TotalAmount: "200", PaymentStatus: "paid", Actions: "edit" },
    { OrderNumber: "205", CustomerName: "Rahul", OrderDate: "17 Dec 2025", status: "Completed", TotalAmount: "200", PaymentStatus: "paid", Actions: "edit" },
    { OrderNumber: "206", CustomerName: "Rahul", OrderDate: "17 Dec 2025", status: "Refunded", TotalAmount: "200", PaymentStatus: "paid", Actions: "edit" },
    { OrderNumber: "207", CustomerName: "Rahul", OrderDate: "15 Dec 2025", status: "Pending", TotalAmount: "200", PaymentStatus: "paid", Actions: "edit" },
    { OrderNumber: "208", CustomerName: "Rahul", OrderDate: "17 Dec 2025", status: "Completed", TotalAmount: "200", PaymentStatus: "paid", Actions: "edit" }
];

export default function StudentTable() {
    return (
        <div>
            {/* CHANGED: Added dark:text-slate-100 to make general table text light */}
            <Table className="w-[100%] table-fixed border-collapse text-slate-900 dark:text-slate-100 text-[13px]">

                {/* CHANGED: Added dark:bg-slate-800/50 to darken the header background */}
                <TableHeader className="bg-slate-50 dark:bg-slate-800/50">
                    <TableRow className="dark:border-slate-800">
                        <TableHead className="w-[40px]">
                            {/* CHANGED: Added dark:border-slate-400 */}
                            <Checkbox className="rounded-[4px] border-slate-900 dark:border-slate-400 font-bold" />
                        </TableHead>

                        {/* CHANGED: Added !dark:text-white to all TableHeads */}
                        <TableHead className="!text-slate-900 !dark:text-white font-bold uppercase text-[10px]">
                            Order Number
                        </TableHead>

                        <TableHead className="!text-slate-900 !dark:text-white font-bold uppercase text-[10px]">
                            <div className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600 transition-colors">
                                Customer
                            </div>
                        </TableHead>

                        <TableHead className="!text-slate-900 !dark:text-white font-bold uppercase text-[10px]">
                            Date
                        </TableHead>

                        <TableHead className="!text-slate-900 !dark:text-white font-bold uppercase text-[10px]">
                            Status
                        </TableHead>

                        <TableHead className="!text-slate-900 !dark:text-white font-bold uppercase text-[10px]">
                            Amount
                        </TableHead>

                        <TableHead className="!text-slate-900 !dark:text-white font-bold uppercase text-[10px]">
                            <div className="flex items-center gap-1.5">
                                Payment
                            </div>
                        </TableHead>

                        <TableHead className="text-center !text-slate-900 !dark:text-white font-bold uppercase text-[10px]">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>
                
                <TableBody>
                    {students.map((item) => (
                        /* CHANGED: Added dark:border-slate-800 to row lines */
                        <TableRow key={item.OrderNumber} className="dark:border-slate-800">
                            <TableCell className="text-center">
                                <Checkbox className="rounded-[4px] border-slate-900 dark:border-slate-700" />
                            </TableCell>
                            
                            {/* CHANGED: Added dark:text-slate-300 to data cells */}
                            <TableCell className="text-left px-2 text-xs dark:text-slate-300">{item.OrderNumber}</TableCell>
                            <TableCell className="text-left px-2 text-xs dark:text-slate-300">{item.CustomerName}</TableCell>
                            <TableCell className="text-left px-2 text-xs dark:text-slate-300">{item.OrderDate}</TableCell>

                            <TableCell className="text-left px-2 text-xs">
                                <span className={`px-3 rounded-full text-xs font-medium border bg-transparent ${item.status === "Completed" ? "border-green-500 text-green-500" :
                                    item.status === "Refunded" ? "border-red-500 text-red-500" :
                                        item.status === "Pending" ? "border-yellow-500 text-yellow-500" :
                                            "border-slate-300 text-slate-500 dark:text-slate-400"
                                    }`}>
                                    {item.status}
                                </span>
                            </TableCell>

                            <TableCell className="text-left px-2 text-xs dark:text-slate-300">{item.TotalAmount}</TableCell>
                            <TableCell className="text-left px-2 text-xs dark:text-slate-300">{item.PaymentStatus}</TableCell>

                            <TableCell className="text-left px-2">
                                <div className="flex items-center justify-center gap-3">
                                    {/* CHANGED: Added dark:text-slate-400 and hover colors */}
                                    <button className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                                        <Pencil size={15} />
                                    </button>
                                    <button className="text-slate-600 dark:text-slate-400 hover:text-red-500">
                                        <Trash2 size={15} />
                                    </button>
                                    <button className="text-slate-600 dark:text-slate-400">
                                        <MoreHorizontal size={15} />
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}