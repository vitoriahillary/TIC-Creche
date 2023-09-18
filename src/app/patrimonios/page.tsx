'use client'
import { Patrimonios } from "@/@arrays"
import * as Table from "@/components/Table"
import { Pencil, Trash2 } from "lucide-react"
import { useState } from "react"

export default function Home() {

    const [actualPage, setActualPage] = useState(1)
    const [itemsByPage, setItemsByPage] = useState(2)

    const changePage = (page: number) => {
        setActualPage(page)
    }

    const start = (actualPage - 1) * itemsByPage
    const end = start + itemsByPage
    const selectData = Patrimonios.slice(start, end)

    return (
        <>
            <div className="flex flex-col items-start bg-zinc-800 h-screen w-full">
                <div className="flex flex-row w-full justify-between pr-8 pt-5">
                    <h1 className="text-zinc-100 text-3xl font-medium pl-6">Patrimonios</h1>
                    <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-indigo-600 text-white hover:bg-indigo-700"
                        type="submit"
                        form="formUser"
                        onClick={() => window.open("/patrimonios/cadastrar", "_self")}
                    >
                        Cadastrar
                    </button>
                </div>
                <div>
                    <h1 className="text-lg text-zinc-50 font-medium pt-5 pl-6">Informações dos Patrimonios</h1>
                    <h3 className="text-sm text-zinc-30 pl-6">Analise os dados de patrimonios contidos na Creche</h3>
                </div>
                <div className="flex mx-1 items-center gap-2 rounded-lg border border-zinc-100 px-3 py-2 shadow-sm bg-zinc-700 w-1/3 mt-10 ml-5">
                    <input className="flex-1 border-0 bg-transparent p-0 text-zinc-50 placeholder-zinc-200 border-none outline-none" placeholder="Pesquisar patrimonio..." />
                    <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-indigo-600 text-white hover:bg-indigo-700"
                        type="submit"
                        form="formUser"
                    >
                        Pesquisar
                    </button>
                </div>
                <div className="flex flex-col w-3/4 justify-center mt-14 ml-32">
                    <Table.Tbl>
                        <Table.TableThead>
                            <Table.TableTr headers={['Nome', 'Data', 'Estado', 'Departamento', 'Categoria']} />
                        </Table.TableThead>
                        <Table.TBody>
                            {selectData.map((item, index) => (
                                <Table.Tr key={index}>
                                    <Table.Td> {item.name} </Table.Td>
                                    <Table.Td> {item.data_aquisicao} </Table.Td>
                                    <Table.Td> {item.estado} </Table.Td>
                                    <Table.Td> {item.depto} </Table.Td>
                                    <Table.Td> {item.categoria} </Table.Td>
                                    <Table.Td>
                                        <div className="flex flex-row gap-3 flex-1 justify-center">
                                            <button className="rounded p-1.5 hover:bg-zinc-600"><Pencil className="w-5 h-5 text-indigo-400" /></button>
                                            <button className="p-1.5 rounded hover:bg-zinc-600"><Trash2 className="w-5 h-5 text-red-500" /></button>
                                        </div>
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.TBody>
                    </Table.Tbl>
                    <div className="flex flex-1 justify-end">
                        <Table.PaginateIndicator
                            data={Patrimonios}
                            itemsByPage={itemsByPage}
                            showPage={changePage}
                            page={actualPage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}