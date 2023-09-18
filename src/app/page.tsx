
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-indigo-600 to-zinc-950">
      <div className="bg-indigo-50 mx-auto max-w-md py-8 px-10 shadow rounded-lg">
        <div className="text-center mb-4">
          <p className="text-gray-700 font-semibold text-xl">Centro de Convivência Infantil Nossa Senhora da Conceição</p>
        </div>
        <div className="mb-4">
          <img src="children.svg" alt=""/>
        </div>
        <form action=''>
          <div className="mb-4">
            <input type="text" placeholder="email" className="appearance-none block w-full px-4 py-3 text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"/>
          </div>
          <div className="mb-4">
            <input type="password" placeholder="senha" className="appearance-none block w-full px-4 py-3 text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"/>
          </div>
          <div className="mb-4">
            <button className="inline-block w-full px-8 py-4 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
