'use client'

// import { useSelector } from 'react-redux'
// import { RootState } from '@/app/store/store'
// import Sidebar from '@/app/components/dashboard/Sidebar'
// import AdminView from '@/app/components/dashboard/AdminView'
// import UserView from '@/app/components/dashboard/UserView'
// import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'

export default function DashboardController() {
  // const { user, isAuthenticated } = useSelector(
  //   (state: RootState) => state.auth,
  // )
  // const router = useRouter()

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push('/signin')
  //   }
  // }, [isAuthenticated, router])

  // if (!isAuthenticated || !user) return null

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* <Sidebar role={user.role} />

      <main className="flex-1 overflow-y-auto bg-background p-8 md:p-12">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-poppins text-foreground">
              {user.role === 'admin' ? 'Administrative Hub' : 'User Dashboard'}
            </h1>
            <p className="text-foreground/60">Welcome back, {user.name}</p>
          </div>
          <div className="px-4 py-2 bg-[#32CD32]/10 text-[#32CD32] rounded-full text-xs font-bold uppercase tracking-wider">
            {user.role} Access
          </div>
        </header>

        {user.role === 'admin' ? <AdminView /> : <UserView />}
      </main> */}
    </div>
  )
}
