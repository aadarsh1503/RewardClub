// import { useState } from 'react';
// import React from 'react';
// import { FaQ } from 'react-icons/fa6';
// import il from "./il.jpg";
// import Faqactive from '../Faq/Faqactive';
// import { useTranslation } from 'react-i18next';


// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const { t ,i18n} = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className='mb-32'>
//       <div className="inset-0 flex font-sans items-center justify-center mt-[160px] mb-10 bg-opacity-50 z-50">
//         <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//           <img src={il} alt={t('background')} className="absolute inset-0 w-full h-full object-cover rounded-lg z-0" />

//           <h2 className="relative text-3xl font-bold text-center mb-8 z-10">{t('login')}</h2>

//           <div className="space-y-6 relative z-10">
//             <input
//               type="text"
//               placeholder={t('enterUsername')}
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
//             />

//             <input
//               type="password"
//               placeholder={t('enterPassword')}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
//             />

//             <div className="text-sm text-gray-600 hover:underline cursor-pointer">
//               {t('forgotPassword')}
//             </div>

//             <button className="w-full p-3 hover:bg-white outline hover:outline-Green cursor-pointer bg-Green text-white font-semibold rounded-md">
//               {t('loginButton')}
//             </button>

//             <div className="flex items-center justify-center my-6">
//               <div className="border-t w-full"></div>
//               <div className="mx-4 text-gray-500">{t('or')}</div>
//               <div className="border-t w-full"></div>
//             </div>

//             <a href='/member-register'>
//               <button className="w-full p-3 bg-gray-800 cursor-pointer text-white hover:bg-white outline hover:outline-black font-semibold rounded-md hover:opacity-90">
//                 {t('registerNow')}
//               </button>
//             </a>
//           </div>

//           {/* Language Switcher */}
//           <div className="flex justify-center mt-6">
//             <button onClick={() => changeLanguage('en')} className="mx-2">English</button>
//             <button onClick={() => changeLanguage('ar')} className="mx-2">العربية</button>
//           </div>
//         </div>
//       </div>
//       <Faqactive />
//     </div>
//   );
// }
