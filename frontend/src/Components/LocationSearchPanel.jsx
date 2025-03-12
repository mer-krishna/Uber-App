import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props);

   // sample array of locations
   const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal", 
    "22C, Near Coffee Culture, Sheryians Coding School, Bhopal",
    "20A, Near Brewery cafe, Sheryians Coding School, Bhopal",
    "18D, Near BOGO cafe, Sheryians Coding School, Bhopal",
    "16B, Near Blue cafe, Sheryians Coding School, Bhopal"
   ]

  return (
    <div>
        {/* This is just a sample data */}
        {
            locations.map(function(elem,idx){
                return <div key={idx} onClick={()=> {
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className='flex items-center gap-4 border-2 p-3 rounded-xl border-gray-50 active:border-black my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                <i className="ri-map-pin-fill"></i>
                </h2>
            <h4 className='medium'>{elem}</h4>
        </div>
            })
        }

    </div>
  )
}

export default LocationSearchPanel