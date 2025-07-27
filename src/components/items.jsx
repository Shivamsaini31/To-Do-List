function DisplayItems(props){
    const items=props.items
    const itemList={
        display:"block",
        listStyle:"none"
    }
    
    
    const liStyle={
        display:"flex",
        margin:"3px",
        alignItems:"center",
        justifyContent:"space-between",
    }
    

    return(
        <>
            <ul style={itemList}>
                {items.map((item,index)=>{
                    return(<li key={index} style={liStyle}>
                        <span className="content " style={{flex:"2",fontSize:"1.2em"}}>{item.toDo}</span>
                        <span className="content" style={{flex:"2", fontSize:"1.2em"}}> {item.Date}</span>
                        <button className={`btn btn-danger`} style={{flex:"1", fontSize:"1.2em"}}onClick={()=>props.handleDelete(index)}>Delete</button>
                    </li>);
                })}
            </ul>
        </>
    )
}
export default DisplayItems;