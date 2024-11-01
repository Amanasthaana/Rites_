// import React from 'react';

// const MyComponent = () =>{
//     return(
//         <div className="overflow-x-hidden">
       
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>RITES || THE INFRASTRUCTURE PEOPLE</title>
//         <link rel="stylesheet" href="styles.css" />
//         <link rel="shortcut icon" href="./Images/RITES.NS-da4e321b.webp" type="image/x-icon" />
//         <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
//         <style dangerouslySetInnerHTML={{__html: "\n    .hidden {\n      display: none;\n    }\n    " }} />
//         <div className="w-full sticky top-0 z-[1000] bg-blue-900">
//           <div className="flex flex-row w-full justify-between items-center h-[92px] px-7 mx-auto ">
//             {/* logo image */}
//             <a href="https://www.rites.com/" target="_blank"> 
//               <img src="./Images/RITES.NS_BIG-6304eec7.webp" alt="rites" className="h-[80px] absolute left-3 top-1 border-none" /></a>
//             {/* Mega dropdown menu */}
//             <nav>
//               <ul className="flex items-center justify-center font-semibold text-white">
//                 <li className="relative group px-3 py-2 hover:text-yellow-500 cursor-pointer">
//                   <button className="hover:text-yellow-500 flex flex-row items-center">
//                     CPC Documents
//                     <svg className="w-2.5 h-2.5 ms-1 mt-1 font-semibold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
//                     </svg>
//                   </button>
//                   <div className="mega-menu-container absolute top-0 -left-[260px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-1000 w-screen transform">
//                     <div className="relative top-[46px] p-6 bg-white rounded-xl shadow-xl w-full">
//                       <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-[146px] z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//                       </div>
//                       <div className="relative z-10">
//                         <div className="grid grid-cols-2 gap-6">
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Folders</p>
//                             <ul className="mt-3 text-[15px] max-h-64 overflow-y-auto">
//                               <li>
//                                 <div className="folder" data-target="folder1">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">*******^**** Role and responsibilities of Contract Policy Cell (CPC) ************</span>
//                                 </div>
//                                 <div id="folder1" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="folder2">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">************** Office Memorandum **************</span>
//                                 </div>
//                                 <div id="folder2" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="folder3">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">************* CPC Circulars *************</span>
//                                 </div>
//                                 <div id="folder3" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="folder4">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">************* Standard Tender Documents for Works along with GCC and correction slips*************</span>
//                                 </div>
//                                 <div id="folder4" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="folder5">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">************ Standard Tender Document for Procurement of Goods including correction slips************</span>
//                                 </div>
//                                 <div id="folder5" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="folder6">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">*********** Standard Tender Documents for Services including correction slips ***********</span>
//                                 </div>
//                                 <div id="folder6" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="folder7">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">***** Guidelines on Construction Project Management including correction slips *****</span>
//                                 </div>
//                                 <div id="folder7" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="folder8">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">**** Guidelines on Procurement of Works, Goods and Services including correction slips****</span>
//                                 </div>
//                                 <div id="folder8" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Documents</p>
//                             <ul className="mt-3 text-[15px]">
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">** List of authorised software **</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Request form for Issue of DSC</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Document3</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Document4</span>
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="relative group px-3 py-2 hover:text-yellow-500 cursor-pointer">
//                   <button className="hover:text-yellow-500 flex flex-row items-center">
//                     IT Documents
//                     <svg className="w-2.5 h-2.5 ms-1 mt-1  font-semibold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
//                     </svg> 
//                   </button>
//                   <div className="absolute top-0 -left-[420px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-screen transform">
//                     <div className="relative top-[46px] p-6 bg-white rounded-xl shadow-xl w-full">
//                       <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-[18rem] z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//                       </div>
//                       <div className="relative z-10">
//                         <div className="grid grid-cols-2 gap-6">
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Folders</p>
//                             <ul className="mt-3 text-[15px] max-h-[64] overflow-y-auto">
//                               <li>
//                                 <div className="folder" data-target="itfolder1">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">***** ISMS 27001 ******</span>
//                                 </div>
//                                 <div id="itfolder1" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="itfolder2">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">* Agreements of Software *</span>
//                                 </div>
//                                 <div id="itfolder2" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="itfolder3">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">IT Folder 3</span>
//                                 </div>
//                                 <div id="itfolder3" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="itfolder4">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">IT Folder 1</span>
//                                 </div>
//                                 <div id="itfolder4" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Documents</p>
//                             <ul className="mt-3 text-[15px] max-h-[64] overflow-y-auto">
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">** List of authorised software **</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Request form for Issue of DSC</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Document3</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Document4</span>
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="relative group px-3 py-2 hover:text-yellow-500 cursor-pointer">
//                   <button className="hover:text-yellow-500 flex flex-row items-center">
//                     Rajbhasha
//                     <svg className="w-2.5 h-2.5 ms-1 mt-1  font-semibold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
//                     </svg>
//                   </button>
//                   <div className="absolute top-0 -left-[550px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-screen transform">
//                     <div className="relative top-[46px] p-6 bg-white rounded-xl shadow-xl w-full">
//                       <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-96 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//                       </div>
//                       <div className="relative z-10">
//                         <div className="grid grid-cols-2 gap-6">
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Folders</p>
//                             <ul className="mt-3 text-[15px] max-h-[64] overflow-y-auto">
//                               <li>
//                                 <div className="folder" data-target="rajbhashafolder1">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">rajbhasha Folder 1</span>
//                                 </div>
//                                 <div id="rajbhashafolder1" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="rajbhashafolder2">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">rajbhasha folder 2</span>
//                                 </div>
//                                 <div id="rajbhashafolder2" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="bhashafolder3">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">rajbhasha folder 3</span>
//                                 </div>
//                                 <div id="bhashafolder3" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="bhashafolder4">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">rajbhasha folder4</span>
//                                 </div>
//                                 <div id="bhashafolder4" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Documents</p>
//                             <ul className="mt-3 text-[15px] max-h-[64] overflow-y-auto">
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="./Images/e-pathrika.gif" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">**** ई-पत्रिका ****</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="./Images/e-pathrika.gif" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">*** राजभाषा-भारती ***</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">वार्षिक कार्यक्रम - 2024-25</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">वार्षिक कार्यक्रम - 2023-24</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">सरल प्रशासनिक शब्दावली</span>
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="relative group px-3 py-2 hover:text-yellow-500 cursor-pointer">
//                   <button className="hover:text-yellow-500 flex flex-row items-center">
//                     Abhikalp
//                     <svg className="w-2.5 h-2.5 ms-1 mt-1  font-semibold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
//                     </svg>
//                   </button>
//                   <div className="absolute top-0 -left-[660px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-screen transform">
//                     <div className="relative top-[46px] p-6 bg-white  shadow-xl w-full">
//                       <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 left-[31rem] translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//                       </div>
//                       <div className="relative z-10">
//                         <div className="grid grid-cols-2 gap-6">
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Folders</p>
//                             <ul className="mt-3 text-[15px] max-h-[64] overflow-y-auto">
//                               <li>
//                                 <div className="folder" data-target="abhikalpfolder1">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">abhikalp Folder 1</span>
//                                 </div>
//                                 <div id="abhikalpfolder1" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="abhikalpfolder2">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">abhikalp Folder 2</span>
//                                 </div>
//                                 <div id="abhikalpfolder2" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="abhikalpfolder3">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">abhikalp folder 3</span>
//                                 </div>
//                                 <div id="abhikalpfolder3" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="abhikalpfolder4">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">Abhikalp Folder 4</span>
//                                 </div>
//                                 <div id="abhikalpfolder4" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Documents</p>
//                             <ul className="mt-3 text-[15px] max-h-[64] overflow-y-auto">
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Abhikalp : Issue 1 : Jan 2024</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Abhikalp : Issue 2 : April 2024</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Abhikalp : Issue 1 : May 2024</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Abhikalp : Issue 1 : July 2024</span>
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="relative group px-3 py-2 hover:text-yellow-500  cursor-pointer">
//                   <button className="hover:text-yellow-500  flex flex-row items-center">
//                     Hr Manuals
//                     <svg className="w-2.5 h-2.5 ms-1 mt-1 font-semibold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
//                     </svg>
//                   </button>
//                   <div className="absolute top-0 -left-[765px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-screen transform">
//                     <div className="relative top-[46px] p-6 bg-white   w-full">
//                       <div className="w-10 h-10 left-[39rem] bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//                       </div>
//                       <div className="relative z-10">
//                         <div className="grid grid-cols-2 gap-6">
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Folders</p>
//                             <ul className="mt-3 text-[15px] max-h-[64] overflow-y-auto">
//                               <li> 
//                                 <div className="folder" data-target="hrfolder1">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">hr manual folder 1</span>
//                                 </div>
//                                 <div id="hrfolder1" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="hrfolder2">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">hr manual folder 2</span>
//                                 </div>
//                                 <div id="hrfolder2" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="hrfolder3">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">hr manual folder 3</span>
//                                 </div>
//                                 <div id="hrfolder3" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="folder" data-target="hrfolder4">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 capitalize">hr manual folder 4</span>
//                                 </div>
//                                 <div id="hrfolder4" className="documents-list" style={{display: 'none'}}>
//                                   <ul>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 1</a>
//                                     </li>
//                                     <li>
//                                       <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                       <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">Document 2</a>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </li>
//                             </ul>
//                           </div>
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Documents</p>
//                             <ul className="mt-3 text-[15px] max-h-[64] overflow-y-auto">
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">1. RITES HR MANUAL 2019</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">2. Amendments to HR Manual (Apr 2019): Appendix I</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">3. Amendments to HR Manual (Apr 2019): Appendix II</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">4. Amendments to HR Manual (Apr 2019): Appendix III</span>
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="relative group px-3 py-2 hover:text-yellow-500 cursor-pointer">
//                   <button className="hover:text-yellow-500 flex flex-row items-center">
//                     Important Files
//                     <svg className="w-2.5 h-2.5 ms-1 mt-1 font-semibold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
//                     </svg>
//                   </button>
//                   <div id="dropdownMenu" className="absolute top-0 -left-[885px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform">
//                     <div className="relative top-[46px] p-6 bg-white shadow-xl w-screen">
//                       <div className="w-10 h-10 left-[48rem] bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
//                       </div>
//                       <div className="relative z-10">
//                         <div className="grid grid-cols-3 gap-6">
//                           <div id="hide" className="flex flex-col space-y-2 px-3 py-3 text-gray-800 max-h-[17rem] overflow-y-auto">
//                             <h2 className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Circulars</h2>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('screening'); hideDropdown()">***** Screening test question papers from previous years' promotion process *****</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('green-tools'); hideDropdown()">**** Green Tools ****</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('hr-manuals');  hideDropdown()">**** HR MANUAL 2019 ****</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('mygate'); hideDropdown()">**** Mygate ****</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('construction'); hideDropdown()">**** RITES Guidelines on Construction Project Management, April 2019 **** NEW GUIDELINES******</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('sop-feb'); hideDropdown()">**** SOP February 2024 ****</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('sop-august'); hideDropdown()">**** SOP August 2023 ****</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('sop-june'); hideDropdown()">**** SOP June 2023 ****</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('sop-dec'); hideDropdown()">*** SOP December 2021 ***</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('sop-april'); hideDropdown()">** SOP - Updated As On April, 2019 **</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('E-tendering'); hideDropdown()">* Tender and Contract Document For E-Tendering and GCC For Works - July 2019	</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('isms-doc'); hideDropdown()">ISMS_Documents</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('mediclaims'); hideDropdown()">MediClaim</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('cpc-doc'); hideDropdown()">old_CPC_Documents</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('old-isms-doc'); hideDropdown()">Old_ISMS_Documents</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('pension'); hideDropdown()">Pension RelatedFiles</a>
//                             <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('construction-project-management'); hideDropdown()">RITES Guideline on Construction Project Management-2015</a>
//                           </div>
//                           <div>
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Documents</p>
//                             <ul className="mt-3 text-[15px] max-h-64 overflow-y-auto">
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">****** IT Declaration - User Manual ******</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Tour-Travel Claim and Circulars</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Dependent Details in SAP as on 01-07-2021</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Employee data given to Axis Bank for Salary Related benefits</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">**** Guidelines for hiring of accommodation for Office Purpose &amp; Procedure ****</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">OM dated 30.01.2023- CPC Documents tab in RITES ESS Portal</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Note dt 16.09.2020 issued by CVO regarding Vigilance Awareness Week,2020</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#">
//                                   <img width={20} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">DECLARATION_FORMAT.pdf</span>
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                           <div id="hide">
//                             <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Folders</p>
//                             <ul className="mt-3 text-[15px] max-h-64 overflow-y-auto">
//                               <li>
//                                 <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('proforma-folder1'); hideDropdown()">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">
//                                     Proforma for seeking prior permission by RITES employees for private visits to abroad</span>
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="#" className="cursor-pointer text-[14px] font-semibold" onclick="toggleVisibility('proforma-folder2'); hideDropdown()">
//                                   <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                                   <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Proforma- NOC for Issue of Passport</span>
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               </ul>      
//             </nav>        
//             <form className="flex items-center max-w-sm justify-center">   
//               <label htmlFor="simple-search" className="sr-only">Search</label>
//               <div className="relative w-full">
//                 <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none right-3">
//                 </div>
//                 <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="Search " required />
//               </div>
//               <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                 <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                 </svg>
//                 <span className="sr-only">Search</span>
//               </button>
//             </form>
//           </div> 
//         </div>
//         <div className="h-screen bg-gray-200 w-full px-8">
//           <div id="screening" className="circulars hidden">
//             <div className="screening flex flex-col space-y-3">
//               <p className="screening pt-4 underline font-semibold text-[12px] mx-auto">***** Screening test question papers from previous years' promotion process *****</p>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Circular dated 30/11/2023</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Screening question papers 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Screening question papers 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Screening question papers 2019</span>
//               </a>
//             </div>
//           </div>
//           <div id="green-tools" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">**** Green Tools ****</p>
//             <div className="green tools flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">E-mail Signature Footer</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Green Tools for PPTs/Word Docs (PPT version)</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">RITES' Brochure</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">RITES' Logo in English &amp; Hindi</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">RITES@50 footer (JPG version)</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">RITES@50 footer (PDF version)</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">RITES@50 logo (PDF version)</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">RITES@50 logo (PNG version)</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">RITES Advertorial 1</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">RITES Advertorial 2</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Supplementary Green Tools (Doc word)</span>
//               </a>
//             </div>
//           </div>
//           <div id="hr-manuals" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">HR Manuals</p>
//             <div className="hr-manuals flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">1. RITES HR MANUAL 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">2. Amendments to HR Manual (Apr 2019): Appendix I</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">3. Amendments to HR Manual (Apr 2019): Appendix II</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">4. Amendments to HR Manual (Apr 2019): Appendix III</span>
//               </a>
//             </div>
//           </div>
//           <div id="mygate" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">Mygate</p>
//             <div className="mygate flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Admin Panel User Guide</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Employee App Registration</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">How to enable automatic app updates on iOS</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">How to update Android apps automatically</span>
//               </a>
//             </div>
//           </div>
//           <div id="construction" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">**** RITES Guidelines on Construction Project Management, April 2019 **** NEW GUIDELINES******	</p>
//             <div className="construction flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">.RITES Guidelines on Construction Project   <br />Management  April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 01</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 02</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 03</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip0 4 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 05 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 06 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 07 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 08 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 09 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 10 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 11 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 12 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 13 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 14 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 15 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 16 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 17 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 18 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 19 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 20 to CPM Guidelines-April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip 21 to CPM Guidelines-April 2019</span>
//               </a>
//             </div>
//           </div>
//           <div id="sop-feb" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">**** SOP February 2024 ****	</p>
//             <div className="sop-feb flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">* SOP February 2024 *</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment 1 to SOP February 2024 </span>
//               </a>
//             </div>
//           </div>
//           <div id="sop-june" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">**** SOP June 2023 ****	</p>
//             <div className="sop-june flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">v**** SOP June 2023 ****</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">1. Amendment No. 1 to SOP</span>
//               </a>
//             </div>
//           </div>
//           <div id="sop-august" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">*** SOP August 2022 ***	</p>
//             <div className="sop-august flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">**** SOP August 2022 ****</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.1 to SOP</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.2 to SOP</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.3 to SOP</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.4 to SOP</span>
//               </a>
//             </div>
//           </div>
//           <div id="sop-dec" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">**** SOP December 2021 ****</p>
//             <div className="sop-dec flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">**** SOP December 2021 ****</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.1 to SOP</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.2 to SOP</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.3 to SOP</span>
//               </a>
//             </div>
//           </div>
//           <div id="sop-april" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">** SOP - Updated As On April, 2019 **	</p>
//             <div className="sop-april flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">**** SOP - Updated As On April, 2019 ****</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No 1 to SOP</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.2 to SOP</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.3 to SOP</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.4 to SOP</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.5 to SOP</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Amendment No.6 to SOP</span>
//               </a>
//             </div>
//           </div>
//           <div id="E-tendering" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">* Tender and Contract Document For E-Tendering and GCC For Works - July 2019	</p>
//             <div className="E-tendering flex flex-col space-y-3 flex-wrap max-h-96 pt-3 overflow-x-auto">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 ">01. E-Tendering Document For Works - July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">02. GCC - July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">03. Office Memorandum Dated 25-07-2019- Tender and Contract Document For E-Tendering <br /> and GCC For Works - July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">04. Office Memorandum Dated 30-07-2019 - Tender and Contract Document For E-Tendering <br /> and GCC For Works - July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">05. Correction Slip No. 1 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">06. Correction Slip No. 2 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">07. Correction Slip No. 3 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">08. Correction Slip No. 4 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">09. Correction Slip No. 5 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">10. Correction Slip No. 6 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">11. Correction Slip No. 7 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">12. Correction Slip No. 8 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">13. Correction Slip No. 9 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">14. Correction Slip No. 10 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">15. Correction Slip No. 11 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">16. Correction Slip No. 12 - E-Tendering - Tender and Contract Document for Works July 2019</span>
//               </a>
//             </div>
//           </div>
//           <div id="isms-doc" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">ISMS_Documents</p>
//             <div className="isms-doc flex flex-col space-y-3 flex-wrap max-h-96 pt-3 overflow-x-auto">
//               <div className="folder" data-target="isms-folder1">
//                 <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">***** ISMS 27001 ******</span>
//               </div>
//               <div id="isms-folder1" className="documents-list" style={{display: 'none'}}>
//                 <ul>
//                   <li>
//                     <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                     <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">MANUAL - INFORMATION SECURITY MANAGEMENT SYSTEMS - ISO 27001:2013 - V02</a>
//                   </li>
//                   <li>
//                     <img width={10} loading="lazy" className="pt-2" src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                     <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">PROCEDURES - INFORMATION SECURITY MANAGEMENT SYSTEMS - ISO 27001:2013 - V01</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="folder" data-target="isms-folder2">
//                 <img src="https://cdn-icons-png.freepik.com/256/3767/3767084.png?semt=ais_hybrid" alt="Folder Icon" className="w-8 h-8" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">* Agreements of Software *</span>
//               </div>
//               <div id="isms-folder2" className="documents-list" style={{display: 'none'}}>
//                 <ul>
//                   <li>
//                     <img width={10} loading="lazy" className="pt-2" src="./Images/License agreement of Autodesk software.gif" />
//                     <a href="documents/folder1/document1.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">License agreement of Autodesk software</a>
//                   </li>
//                   <li>
//                     <img width={10} loading="lazy" className="pt-2" src="./Images/License agreement of Autodesk software.gif" />
//                     <a href="documents/folder1/document2.pdf" className="text-[10px] text-blue-900 font-semibold hover:underline transition 200" target="_blank">License agreement of Bentley software</a>
//                   </li>
//                 </ul>
//               </div>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200 ">** List of authorised software **</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Request form for Issue of DSC</span>
//               </a>
//             </div>
//           </div>
//           <div id="mediclaims" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">MediClaim</p>
//             <div className="mediclaims flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Circular Regarding sub-limits and sum-insured of Mediclaim Policy for Serving Employees</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Contact Number of M/s Paramount Health Services &amp; Insurance(TPA)</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Escalation Matrix</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">General Conditions of Policy</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="./Images/How to download E-Card.gif" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">How to download E-Card</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">IPD &amp; OPD Reimbursement Claim form and Checklist</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">List of day care procedures</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">List of non-admissible expenses-IRDA</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Membership Form for Retiree employee</span>
//               </a>
//             </div>
//           </div>
//           <div id="old-cpc-doc" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">MediClaim</p>
//             <div className="old-cpc-doc flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Circular Regarding sub-limits and sum-insured of Mediclaim Policy for Serving Employees</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Contact Number of M/s Paramount Health Services &amp; Insurance(TPA)</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Escalation Matrix</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">General Conditions of Policy</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="./Images/How to download E-Card.gif" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">How to download E-Card</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">IPD &amp; OPD Reimbursement Claim form and Checklist</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">List of day care procedures</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">List of non-admissible expenses-IRDA</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Membership Form for Retiree employee</span>
//               </a>
//             </div>
//           </div>
//           <div id="old-isms-doc" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">Old_ISMS_Documents</p>
//             <div className="old-isms-doc flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">ISMS Manual V01.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">ISMS Procedures</span>
//               </a>
//             </div>
//           </div>
//           <div id="pension" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">Pension RelatedFiles</p>
//             <div className="pension flex flex-col space-y-3 flex-wrap max-h-72 pt-3">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">annuity details 10.08.2015.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">LICID1.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">procedure.PDF</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">quarterly_stmt_103001616.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="./Images/QUATERLY STATEMENT -Dec2015.gif" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">QUATERLY STATEMENT -Dec2015.xls</span>
//               </a>
//             </div>
//           </div>
//           <div id="construction-project-management" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">RITES Guideline on Construction Project Management-2015</p>
//             <div className="construction-project-management flex flex-col space-y-3 flex-wrap max-h-[30rem] pt-3 overflow-x-auto">
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">ConstructionManualPart1.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">ConstructionManualPart2.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">ConstructionManualPart3.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">ConstructionManualPart4.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">ConstructionManualPart5.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Cont_Policy_GST_Regime-Impact.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 1</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 2</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 3</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 4</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 5</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 6</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 7</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 8</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 9</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 10</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Correction Slip. 11</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">GCC-Office Memorandum-Payment-under clause 10CC-Portal.pdf
//                 </span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Office Memorandum 09-10-2018 - Timely Payments To Contractors/Suppliers/Service Providers</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Office Memorandum 19-02-2019 - Price Variation on Works Awarded in Pre GST Regime and Executed in Post GST Regime</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Office Memorandum 20-02-2019 - Time line to be adopted in RITES for the payment of Final bills</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Office Memorandum 26-02-2019 - Inserting Special Condition relating to uploading of details of labour payments by contractors <br /> of Railway works on Shramik Kalyan Portal</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Office Memorandum 26-03-2019 - Qualifying Criteria for Works Contracts - Verification of documents of financial <br /> parameters - Unique Document Identification Number(UDIN)</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Office Memorandum GCC -Apr-19 - RITES Guidelines on Construction Project Management, April 2019</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">OM-GST Regime-Impact-Works-Contract.pdf</span>
//               </a>
//               <a href="#">
//                 <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//                 <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">RITES Guidelines on Construction Project Management, April 2019</span>
//               </a>
//             </div>
//           </div>
//           <div id="proforma-folder1" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">Proforma for seeking prior permission by RITES employees for private visits to abroad	</p>
//             <a href="#" className="pl-4 pt-4">
//               <img width={20} src="https://cdn4.iconfinder.com/data/icons/CS5/128/ACP_PDF%202_file_document.png" />
//               <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Proforma for seeking prior permission by RITES employees for private visits to abroad</span>
//             </a> 
//           </div>
//           <div id="proforma-folder2" className="circulars hidden">
//             <p className="pt-2 underline font-semibold text-[12px] mx-auto text-center">Proforma- NOC for Issue of Passport	</p>
//             <a href="#" className="pl-4 pt-4">
//               <img width={20} src="./Images/Proforma-  NOC for Issue of Passport.gif" />
//               <span className="text-[10px] text-blue-900 font-semibold hover:underline transition 200">Proforma- NOC for Issue of Passport</span>
//             </a> 
//           </div>
//         </div>
//       </div>
//     )
// }