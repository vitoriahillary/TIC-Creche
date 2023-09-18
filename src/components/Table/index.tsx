'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ComponentProps, useState } from "react"

type TablePrimitiveProps = ComponentProps<'table'>

export function Tbl(props: TablePrimitiveProps) {
    return (
        <table className="min-w-full table-auto border-collapse bg-zinc-700 text-zinc-200 rounded" {...props} />
    )
}

type TableTheadProps = ComponentProps<'thead'>

export function TableThead(props: TableTheadProps) {
    return (
        <>
            <thead className="border-b border-zinc-100 border-opacity-50" {...props} />
        </>
    )
}

interface TableTrProps {
    headers: string[]
}

export function TableTr({ headers }: TableTrProps) {
    return (
        <Tr>
            {
                headers.map((head, index) => (
                    <Th key={`header${index}`}> {head}</Th>
                ))
            }
            <Th> Ações</Th>
        </Tr>
    )
}

type TBodyProps = ComponentProps<'tbody'>

export function TBody(props: TBodyProps) {
    return (
        <tbody className="items-center" {...props} />

    )
}

type ThProps = ComponentProps<'th'>

export function Th(props: ThProps) {
    return (
        <th className="px-4 py-4 text-center font-semibold" {...props} />
    )
}

type TdProps = ComponentProps<'td'>

export function Td(props: TdProps) {
    return (
        <td className="p-2" {...props} />
    )
}

type TrProps = ComponentProps<'tr'>

export function Tr(props: TrProps) {
    return (
        <tr className="text-center px-4 py-2 " {...props} />
    )
}

interface PageNumbersProps {
    data: any[]
    itemsByPage: number,
    showPage: (page: number) => void,
    page: number
}


export function PaginateIndicator({
    data,
    itemsByPage,
    showPage,
    page,
}: PageNumbersProps) {
    const totalTables = Math.ceil(data.length / itemsByPage);

    const [selPage, setSelPage] = useState(page);

    let pp: number[] = [];

    if (page === 1) {
        pp = [selPage, selPage + 1];
    } else if (page > 1 && page < totalTables) {
        pp = [selPage - 1, selPage, selPage + 1];
    } else if (selPage === totalTables) {
        pp = [selPage - 1, selPage];
    }

    return (
        <div className="flex self-end gap-2 items-center mt-8">
            <button onClick={() => showPage(page - 1)} disabled={page == 1}>
                <ChevronLeft
                    className={` ${page == 1 ? "text-zinc-700" : "text-zinc-100"
                        } w-5 h-5`}
                />
            </button>

            {totalTables > 5 ? (
                <>
                    {page >= 3 ? (
                        <div>
                            <button
                                className={`px-3 py-1 rounded-lg shadow-sm border ${1 == page
                                        ? "text-zinc-100 border-zinc-500"
                                        : "text-zinc-100 bg-zinc-700"
                                    } `}
                                key={1}
                                disabled={page == 1}
                                onClick={() => {
                                    showPage(1);
                                    setSelPage(1);
                                }}>
                                {1}
                            </button>
                            {" "}
                            <span className="strong text-2xl text-zinc-100">
                                . . .
                            </span>
                            {" "}
                        </div>
                    ) : null}
                    {pp.map((item, index) => (
                        <button
                            className={`px-3 py-1 rounded-lg shadow-sm border ${item === page
                                    ? "text-zinc-100 border-zinc-500"
                                    : "text-zinc-100 bg-zinc-700"
                                } `}
                            key={index}
                            disabled={item === page}
                            onClick={() => {
                                if (item < selPage) {
                                    showPage(page - 1);
                                    setSelPage(page - 1);
                                }
                                if (item > selPage) {
                                    showPage(page + 1);
                                    setSelPage(page + 1);
                                }
                                if (item === totalTables) {
                                    showPage(totalTables);
                                    setSelPage(totalTables);
                                }
                            }}>
                            {item}
                        </button>
                    ))}
                    {page === totalTables - 1 || page === totalTables ? null : (
                        <div>
                            {" "}
                            <span className="strong text-2xl text-zinc-100">
                                . . .
                            </span>
                            {" "}
                            <button
                                className={`px-3 py-1 rounded-lg shadow-sm border ${totalTables == page
                                        ? "text-zinc-100 border-zinc-500"
                                        : "text-zinc-100 bg-zinc-700"
                                    } `}
                                key={totalTables}
                                disabled={page == totalTables}
                                onClick={() => {
                                    showPage(totalTables);
                                    setSelPage(totalTables);
                                }}>
                                {totalTables}
                            </button>
                        </div>
                    )}
                </>
            ) : (
                Array.from({ length: totalTables }).map((_, index) => (
                    <button
                        className={`px-3 py-1 rounded-lg shadow-sm border ${index + 1 == page
                                ? "text-zinc-100 border-zinc-500"
                                : "text-zinc-100 bg-zinc-700"
                            } `}
                        key={index}
                        disabled={page == index + 1}
                        onClick={() => {
                            showPage(index + 1);
                        }}>
                        {index + 1}
                    </button>
                ))
            )}
            <button
                onClick={() => showPage(page + 1)}
                disabled={page == totalTables}>
                <ChevronRight
                    className={` ${page == totalTables ? "text-zinc-700" : "text-zinc-100"
                        } w-5 h-5`}
                />
            </button>
        </div>
    );
}