import React from "react";

export const ScrollButtonsWithCircle = ({
    currentFilter,
    setFilter
}) => {

    const filters = [
        {
            text : "همه",
            value : "all"
        },
        {
            text : "شش ماهه",
            value : "180"
        },
        {
            text : "سه ماهه",
            value : "90"
        },
        {
            text : "یک ماهه",
            value : "30"
        },
    ]

    return (
        <div className="relative mt-10 bg-red-200 rounded-3xl px-2 py-2 max-md:hidden">
            <div className="relative flex justify-center gap-1 max-md:flex-col max-md:items-center flex-row">
                {
                    filters.map((item,index) => {
                        return (
                            <button 
                                onClick={() => setFilter(item.value)}
                                key={index}
                                className={`relative px-7 py-2 rounded-3xl font-medium cursor-pointer 
                                transition-all duration-300 ease-in-out transform 
                                ${currentFilter == item.value ? "text-white bg-red-500 " : "text-black"}`}>
                                    {item.text}
                                </button>
                        )
                    })
                }
            </div>
        </div>
    );
};