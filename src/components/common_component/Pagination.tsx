import { useState } from "react"

const Pagination = () => {
    const [clicked, setClicked] = useState(1)

     function handleClick(i:number) {
    setClicked(i + 1)
  }
  return (
          <div className="pagination-container container mt-4  gap-2">
                <button className={`px-2 pagination ${clicked !== 1 ? "" : "arrow-hidden"} `} style={{ width: "40px" }} onClick={
                  () => {
                    if (clicked > 1)
                      setClicked(clicked - 1)


                  }} >

                  {/* <img className="" src={`${clicked !== 1 ? backward.src : ""}`} /> */}
                </button>
                {
                  Array.from({ length }).map((_, i) => (
                    <button key={i} className={`text-center pagination p-0 ${clicked == i + 1 && "active"}`} onClick={() => handleClick(i)} >
                      <p className="  mt-4  fs-6" style={{ height: 'auto' }} > {i + 1}</p>
                    </button>
                  ))
                }
                <button className={`pagination px-2 ${clicked !== Math.floor(length) ? "" : "arrow-hidden"}  `} style={{ width: "40px" }} onClick={
                  () => {
                    if (clicked < 5)
                      setClicked(clicked + 1)
                  }}>
                  {/* {clicked !== Math.floor(length) ? <img src={forward.src} style={{ width: "24px", height: "24px" }} /> : ''} */}

                </button>
              </div>
  )
}

export default Pagination
