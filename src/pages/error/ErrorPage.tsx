
import NotFound from "../../components/error/NotFound"

export default function ErrorPage () {

    

    return (
        <>
        <section className="w-full h-screen flex justify-center items-center">
                <div className="bg-gray-100 p-5 shadow-lg flex flex-col gap-5 rounded-lg w-3xl">
                  <div className="w-full flex flex-col items-center justify-center">
                    <img src="/logo.png" alt="Broadway Logo" className="size-40" />
                    
                    <NotFound />
                  </div>
                </div>
              </section>
        </>
    )
}