'use client'

import { api } from "@/services/api";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function CadastrarPatrimonio() {
    const [name, setName] = useState('');
    const [estado, setEstado] = useState(0);
    const [data, setData] = useState(Date)
    const [depto, setDepto] = useState('');
    const [categoria, setCategoria] = useState('');

    const patrimonio = {
        name,
        estado,
        data,
        depto,
        categoria
    }

    const handleEdit = (event: FormEvent) => {
       event.preventDefault()

       api.put(`/api/patrimonio`, patrimonio)
           .then(() => toast.success("Account created successfully!"))
           .catch(() => toast.error("Unable to create account, please try again!"))
    };

    return (
        <>
            <div className="flex flex-col items-start bg-zinc-800 h-screen w-full">
                <div className="flex flex-row w-full justify-between pr-8 pt-5">
                    <h1 className="text-zinc-100 text-3xl font-medium pl-6">Editar Patrimonio</h1>
                    <button className="rounded-lg px-4 py-2 
                        text-sm font-semibold shadow-sm 
                        bg-indigo-600 text-white hover:bg-indigo-700"
                        onClick={() => window.open("/patrimonios", "_self")}
                    >
                        Voltar
                    </button>
                </div>
                <div className="mt-6 ml-6 flex flex-col">
                    <div className="flex justify-between items-center w-full border-b border-zinc-50 pb-5">
                        <div>
                            <h1 className="text-lg text-zinc-50 font-medium">Atualizar ou editar um Patrimonio</h1>
                            <h3 className="text-sm text-zinc-300">Edite um patrimonio da creche aqui</h3>
                        </div>
                    </div>
                </div>
                <form id="formUser" className="flex flex-col ml-32 mt-10 gap-5 divide-y divide-zinc-50">
                    <div className="grid grid-cols-form gap-3">
                        <label htmlFor="name" className="text-zinc-50 font-sm font-medium">Name:</label>
                        <div className="flex gap-3">
                            <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-100 px-3 py-2 shadow-sm bg-zinc-700" >
                                <input className="flex-1 border-0 bg-transparent p-0 text-zinc-50 placeholder-zinc-200 border-none outline-none" id="name" onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="name" className="text-zinc-50 font-sm font-medium">Data:</label>
                        <div className="flex gap-3">
                            <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-100 px-3 py-2 shadow-sm bg-zinc-700" >
                                <input className="flex-1 border-0 bg-transparent p-0 text-zinc-50 placeholder-zinc-200 border-none outline-none" id="data" onChange={(e) => setData(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="name" className="text-zinc-50 font-sm font-medium">Estado:</label>
                        <div className="flex gap-3">
                            <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-100 px-3 py-2 shadow-sm bg-zinc-700" >
                                <input className="flex-1 border-0 bg-transparent p-0 text-zinc-50 placeholder-zinc-200 border-none outline-none" id="estado" onChange={(e) => setEstado(parseInt(e.target.value))}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="name" className="text-zinc-50 font-sm font-medium">Departamento:</label>
                        <div className="flex gap-3">
                            <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-100 px-3 py-2 shadow-sm bg-zinc-700" >
                                <input className="flex-1 border-0 bg-transparent p-0 text-zinc-50 placeholder-zinc-200 border-none outline-none" id="estado" onChange={(e) => setDepto(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-form gap-3 pt-5">
                        <label htmlFor="name" className="text-zinc-50 font-sm font-medium">Categoria:</label>
                        <div className="flex gap-3">
                            <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-100 px-3 py-2 shadow-sm bg-zinc-700" >
                                <input className="flex-1 border-0 bg-transparent p-0 text-zinc-50 placeholder-zinc-200 border-none outline-none" id="estado" onChange={(e) => setCategoria(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-2 pt-5">
                        <button
                            className="rounded-lg px-4 py-2 
                          text-sm font-semibold shadow-sm 
                          border border-zinc-300 hover:bg-zinc-700
                          text-white"
                            type="button">
                            Cancelar
                        </button>
                        <button className="rounded-lg px-4 py-2 
                                text-sm font-semibold shadow-sm 
                                bg-indigo-600 text-white hover:bg-indigo-700"
                            type="submit"
                            form="formUser"
                            onClick={handleEdit}
                        >
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}