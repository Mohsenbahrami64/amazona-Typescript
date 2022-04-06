

export default function MessageBox(props:any){
    return(
        <div className={`alert alert-${props.varient} || 'info' } `}> 
            {props.children}
        </div>
    )
}