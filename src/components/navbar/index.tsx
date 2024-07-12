interface Props {
    heading:string,
    className:string,
}   
const Bar =({heading ,className}:Props)=>{
    return(
             <div className={`flex ${className}`}>
          <div className="flex gap-2">
          <input type="checkbox" />
          <p>{heading}</p>
          </div>
          <p className="rounded-xl   px-2 bg-white">
            10
          </p>
        </div>      
    )
}
export default Bar;