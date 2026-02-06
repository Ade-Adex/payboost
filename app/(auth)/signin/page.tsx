// 'use client'

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { authStart, authSuccess, authFailure } from '@/app/store/slices/authSlice';
// import { RootState } from '@/app/store/store';

// export default function SignInPage() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { loading, error } = useSelector((state: RootState) => state.auth);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(authStart());

//     try {
//       // Replace with your actual API endpoint
//       const res = await fetch('/api/auth/login', {
//         method: 'POST',
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         dispatch(authSuccess({ user: data.user, token: data.token }));
//         router.push('/dashboard'); // Direct entry point
//       } else {
//         dispatch(authFailure(data.message));
//       }
//     } catch (err) {
//       dispatch(authFailure("Connection error"));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center p-6">
//       <form onSubmit={handleLogin} className="w-full max-w-md space-y-6 bg-[#0f172a] p-10 rounded-[40px] border border-white/5 shadow-2xl">
//         <h2 className="text-3xl font-bold font-poppins text-white">Sign In</h2>
//         {error && <p className="text-red-500 text-sm">{error}</p>}
//         <input 
//           type="email" 
//           placeholder="Email" 
//           className="w-full p-4 bg-white/5 rounded-xl text-white outline-none border border-white/10 focus:border-[#32CD32]"
//           onChange={(e) => setFormData({...formData, email: e.target.value})}
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           className="w-full p-4 bg-white/5 rounded-xl text-white outline-none border border-white/10 focus:border-[#32CD32]"
//           onChange={(e) => setFormData({...formData, password: e.target.value})}
//         />
//         <button disabled={loading} className="w-full py-4 bg-[#32CD32] text-white font-bold rounded-xl hover:opacity-90">
//           {loading ? 'Authenticating...' : 'Sign In'}
//         </button>
//       </form>
//     </div>
//   );
// }