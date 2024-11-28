"use client";
import Create from "@/componets/Create";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";


export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/get").then(result => {
      setTodos(result.data)
      // console.log(result.data)
    })
  }, []);

  const handleEdit = (id) => {
   axios.put("http://localhost:3001/update/" + id).then(window.location.reload())
   
  }

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/delete/" + id).then(window.location.reload())
  }

  const completedTasks = todos.filter(curr=> curr.done === true);

  return (
    <div className="">
    
     <div className='bg-[#0D0D0D] h-[200px] flex justify-center items-center '>
            <div className='flex justify-center items-center'>
                <svg width="22" height="26" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-[3px]'>
                    <g clipPath="url(#clip0_1_217)">
                        <path d="M11.0214 2.93302C14.1471 6.9011 15.8156 11.7944 15.7551 16.8155V18.0141L16.7864 18.6416C18.1188 19.4482 19.1126 20.6993 19.5865 22.1669C19.1704 21.8605 18.7351 21.5803 18.2831 21.3278L15.5331 19.7838L15.039 22.9001C14.9962 23.1755 14.9388 23.4485 14.8671 23.718H7.16138C7.0468 23.3655 6.9537 23.0129 6.86776 22.6463L6.24472 19.8261L3.70956 21.2362C3.28603 21.473 2.87711 21.7344 2.48495 22.0188C2.96812 20.5682 3.94111 19.3242 5.24211 18.4935L6.22323 17.866V16.7521C6.24093 11.7513 7.92955 6.89523 11.0286 2.93302H11.0214ZM11.0286 0C10.8679 0.000390307 10.7127 0.0579856 10.5917 0.162162L10.5273 0.218566C6.39766 4.76564 4.10454 10.6454 4.08196 16.745C2.32955 17.8643 1.03238 19.5543 0.417141 21.5197C-0.198101 23.485 -0.0922939 25.6007 0.716072 27.4971C1.56764 25.6455 2.99119 24.1058 4.78378 23.0975C4.96356 23.8642 5.20298 24.6161 5.49993 25.3467C5.53759 25.4871 5.62106 25.6114 5.73751 25.7006C5.85396 25.7898 5.99694 25.8388 6.14446 25.8402H16.0846C16.2851 25.8402 16.4856 25.6498 16.5859 25.3537C16.8757 24.6592 17.0777 23.9322 17.1874 23.1892C18.9834 24.1932 20.4082 25.7342 21.2551 27.5887C22.1123 25.7017 22.245 23.5727 21.6286 21.5967C21.0123 19.6206 19.6887 17.9319 17.9036 16.8437C17.9744 10.7082 15.6934 4.77179 11.5156 0.218566C11.4533 0.150085 11.3772 0.0952397 11.2921 0.0575871C11.2069 0.0199344 11.1147 0.000314749 11.0214 0L11.0286 0Z" fill="#4EA8DE" />
                        <path d="M11.0213 16.1598C10.4713 16.1598 9.93351 15.9995 9.47587 15.699C9.01822 15.3986 8.66116 14.9715 8.44969 14.4716C8.23822 13.9716 8.18181 13.4213 8.28758 12.8898C8.39334 12.3584 8.65653 11.8697 9.04399 11.4853C9.43144 11.1009 9.92582 10.838 10.4648 10.7298C11.0038 10.6216 11.5632 10.6729 12.0726 10.8773C12.582 11.0816 13.0186 11.4298 13.3272 11.8781C13.6359 12.3263 13.8029 12.8545 13.8071 13.396C13.8157 13.7469 13.7539 14.0961 13.6254 14.4235C13.4969 14.751 13.304 15.0503 13.058 15.3043C12.8119 15.5583 12.5174 15.7622 12.1913 15.9041C11.8652 16.0461 11.5139 16.1234 11.1574 16.1316C11.1123 16.1387 11.0664 16.1387 11.0213 16.1316V16.1598Z" fill="#4EA8DE" />
                        <path d="M14.8957 27.5958C14.7165 27.5901 14.538 27.6198 14.3706 27.683C14.2032 27.7462 14.0503 27.8416 13.9209 27.9638C13.7915 28.086 13.6881 28.2323 13.6169 28.3943C13.5458 28.5563 13.5082 28.7307 13.5063 28.9072V33.067C13.5063 33.4297 13.6527 33.7776 13.9133 34.0342C14.1738 34.2907 14.5272 34.4348 14.8957 34.4348C15.2641 34.4348 15.6175 34.2907 15.8781 34.0342C16.1386 33.7776 16.285 33.4297 16.285 33.067V28.9636C16.2907 28.7877 16.2608 28.6126 16.1971 28.4482C16.1333 28.2839 16.037 28.1337 15.9137 28.0064C15.7904 27.879 15.6425 27.7772 15.4788 27.7067C15.3151 27.6362 15.1388 27.5985 14.9601 27.5958H14.8957Z" fill="#5E60CE" />
                        <path d="M7.1613 27.5958C6.97906 27.5863 6.79675 27.613 6.62521 27.6743C6.45367 27.7356 6.29641 27.8302 6.16278 27.9526C6.02915 28.0749 5.92188 28.2225 5.84736 28.3865C5.77284 28.5505 5.73259 28.7275 5.729 28.9072V33.067C5.729 33.4297 5.87538 33.7777 6.13593 34.0342C6.39648 34.2907 6.74986 34.4348 7.11833 34.4348C7.4868 34.4348 7.84018 34.2907 8.10073 34.0342C8.36128 33.7777 8.50765 33.4297 8.50765 33.067V28.9636C8.51337 28.7877 8.48349 28.6126 8.41974 28.4482C8.35599 28.2839 8.25965 28.1337 8.13634 28.0064C8.01302 27.879 7.8652 27.7772 7.70149 27.7067C7.53777 27.6362 7.36144 27.5985 7.18278 27.5958H7.1613Z" fill="#5E60CE" />
                        <path d="M10.9211 27.5958C10.7424 27.592 10.5647 27.623 10.3981 27.6869C10.2316 27.7507 10.0795 27.8463 9.95044 27.9681C9.82142 28.0899 9.71804 28.2355 9.6462 28.3966C9.57435 28.5577 9.53546 28.7312 9.53174 28.9072V34.6392C9.53174 35.002 9.67811 35.3499 9.93866 35.6064C10.1992 35.8629 10.5526 36.007 10.9211 36.007C11.2895 36.007 11.6429 35.8629 11.9035 35.6064C12.164 35.3499 12.3104 35.002 12.3104 34.6392V28.9988C12.3161 28.823 12.2862 28.6478 12.2225 28.4835C12.1587 28.3191 12.0624 28.1689 11.9391 28.0416C11.8158 27.9143 11.6679 27.8124 11.5042 27.7419C11.3405 27.6714 11.1642 27.6337 10.9855 27.631L10.9211 27.5958Z" fill="#5E60CE" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_217">
                            <rect width="22" height="36" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span className='text-blue-500 font-bold text-[30px]'>Todo </span>
                <span className='text-purple-900 font-bold text-[30px] pl-[5px]'> App</span>


            </div>

        </div>

      <div className="w-full  bg-gray-900 h-lvh relative">
        <div className="flex items-center justify-center max-w-[736px] m-auto">
          
          <Create />
          <div className="flex justify-between items-center p-2 pt-[70px]">
            <div>
              <span className="text-[17px] text-blue-600 mr-[3px]">Tasks</span>
              <span className="text-sm w-[10px] h-[10px] rounded-full bg-gray-700 p-[2px] text-[14px] text-white ">{todos.length}</span>
            </div>
            <div>
              <span className="text-[17px] text-purple-600 sm:ml-[570px] max-sm:ml-[70px] mr-[3px]">Completed</span>
              <span className="text-sm text-[14px] text-white rounded-full bg-gray-700 p-[2px] ">{completedTasks.length}</span>
            </div>
          </div>
        </div>
        <hr className="border-gray-300  max-w-[736px] my-4  m-auto" />
        {
          todos.length === 0 ? (
            <div className="my-4  max-w-[736px] m-auto">
              
              <div className="w-full flex items-center justify-center flex-col">
                <div className="flex items-center justify-center flex-col">
                  <span className="text-[#808080] font-bold text-[16px] mb-[30px] mt-[80px]"></span>
                  <span className="text-[#808080] font-medium text-[14px]">Create tasks and organize your to-do items.</span>
                </div>
              </div>
            </div>
          ) : (
            todos.map(todo => (
              <div key={todo._id} className=" p-2 bg-[#262626]  max-w-[736px] m-auto flex justify-between items-center my-[10px]">
                <span onClick={()=>handleEdit(todo._id)}>
                  {
                    todo.done ? <GoDotFill />:
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9643 4.85957C13.3765 4.85957 14.7571 5.27835 15.9313 6.06296C17.1056 6.84757 18.0208 7.96276 18.5612 9.26752C19.1017 10.5723 19.2431 12.008 18.9676 13.3931C18.6921 14.7782 18.012 16.0505 17.0134 17.0492C16.0148 18.0478 14.7424 18.7278 13.3573 19.0034C11.9722 19.2789 10.5365 19.1375 9.23173 18.597C7.92697 18.0566 6.81178 17.1414 6.02717 15.9671C5.24257 14.7929 4.82378 13.4123 4.82378 12.0001C4.8311 10.1085 5.58574 8.29657 6.92326 6.95905C8.26079 5.62153 10.0728 4.86688 11.9643 4.85957ZM11.9643 3.27279C10.2397 3.27985 8.55592 3.79768 7.12543 4.76093C5.69494 5.72417 4.58191 7.08964 3.92683 8.68495C3.27176 10.2803 3.10401 12.0339 3.44478 13.7245C3.78554 15.415 4.61954 16.9667 5.84148 18.1837C7.06342 19.4006 8.61852 20.2283 10.3105 20.5622C12.0024 20.896 13.7553 20.7211 15.348 20.0595C16.9406 19.398 18.3015 18.2794 19.2589 16.8449C20.2163 15.4105 20.7272 13.7246 20.7273 12.0001C20.7273 10.851 20.5003 9.71319 20.0595 8.65202C19.6187 7.59084 18.9727 6.62716 18.1585 5.81629C17.3443 5.00542 16.378 4.36332 15.315 3.92684C14.2521 3.49036 13.1134 3.26809 11.9643 3.27279Z" fill="#4EA8DE" />
                  </svg>
                  }
                </span>
                <span className={`font-medium text-gray text-[16px] text-white rounded-2xl ${todo.done && "text-gray-500 line-through"}`}>
                  {todo.task}
                </span>
                <span onClick={()=>handleDelete(todo._id)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2021 9.98547H12.8716V15.5073H14.2021V9.98547Z" fill="#808080" />
                    <path d="M11.4623 9.98547H10.1318V15.5073H11.4623V9.98547Z" fill="#808080" />
                    <path d="M18.478 7.16712C18.4754 7.03061 18.4295 6.89846 18.3469 6.78975C18.2642 6.68104 18.1492 6.6014 18.0184 6.56232C17.9596 6.53782 17.8974 6.52252 17.8339 6.51696H14.2868C14.1525 6.07791 13.8808 5.69355 13.5117 5.42047C13.1426 5.14739 12.6956 5 12.2365 5C11.7774 5 11.3304 5.14739 10.9613 5.42047C10.5922 5.69355 10.3205 6.07791 10.1862 6.51696H6.63911C6.58068 6.51814 6.52269 6.52729 6.46674 6.54418H6.45162C6.31318 6.58701 6.19334 6.67547 6.11163 6.79515C6.02992 6.91483 5.99117 7.05866 6.00169 7.20319C6.01222 7.34771 6.0714 7.48441 6.16958 7.59099C6.26776 7.69757 6.39916 7.76774 6.54234 7.79006L7.25298 17.5334C7.26382 17.9127 7.41693 18.2741 7.68191 18.5458C7.94688 18.8175 8.30435 18.9797 8.68332 19H15.7867C16.1662 18.9804 16.5244 18.8186 16.79 18.5468C17.0556 18.2751 17.2092 17.9132 17.22 17.5334L17.9277 7.79914C18.0802 7.77797 18.22 7.70232 18.3212 7.58615C18.4223 7.46999 18.478 7.32116 18.478 7.16712ZM12.2365 6.21456C12.3661 6.21458 12.4943 6.24146 12.6129 6.29351C12.7316 6.34556 12.8382 6.42164 12.926 6.51696H11.547C11.6346 6.42135 11.7411 6.34507 11.8599 6.29299C11.9786 6.24092 12.1069 6.21421 12.2365 6.21456ZM15.7867 17.7904H8.68332C8.60168 17.7904 8.47467 17.6573 8.45955 17.4457L7.75798 7.81123H16.715L16.0135 17.4457C15.9984 17.6573 15.8714 17.7904 15.7867 17.7904Z" fill="#808080" />
                  </svg>

                </span>
              </div>
            ))
          )
        }
      </div>
      {/* <Top/> */}
    </div>
  );
}
