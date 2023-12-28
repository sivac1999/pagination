// import React from "react";
// function Pagination ({totalpost,postpage,setcurrentpage,currentpage}){
//     let pages=[];
//     for(let i=1;i<=Math.ceil(totalpost/postpage);i++){
//          pages.push(i)
//     }
//     return(
//         <div>
//             {
//                 pages.map((page,index)=>{
//                     return(
//                         <button
//                         key={index}
//                         onClick={()=>setcurrentpage(page)} 
//                         >
                            
//                             {page}
//                         </button>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default Pagination