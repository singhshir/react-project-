import { Outlet } from "react-router";

function Sidebar() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-950 text-white">
        <div className="flex h-16 items-center gap-3 border-b border-slate-800 px-6">
          <img src="/logo.png" alt="Logo" className="size-10" />

          <h1 className="text-xl font-bold">MyApp</h1>
        </div>

        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/cms"
                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-indigo-600 hover:text-white"
              >
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="/cms/users"
                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-indigo-600 hover:text-white"
              >
                Users List
              </a>
            </li>

            <li>
              <a
                href="/cms/users/create"
                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-indigo-600 hover:text-white"
              >
                Create User
              </a>
            </li>

            <li>
              <a
                href="/cms/user/:edit"
                className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-indigo-600 hover:text-white"
              >
                Edit User
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

function CmsHeader() {
  return (
    <>
      <header className="fixed left-64 right-0 top-0 z-50 h-16 border-b border-slate-200 bg-blue-500">
        <div className="flex h-full items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-lg p-2 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              🔔
            </button>

            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-indigo-100 font-medium text-indigo-600">
                SK
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-800">
                  shishir k singh
                </p>

                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default function CmsLayout() {
  return (
    <>
      <div className="min-h-screen bg-teal-100">
        <Sidebar />

        <div className="ml-64">
          <CmsHeader />

          <main className="min-h-screen pt-16">
            <section className="p-6">
              <Outlet />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
