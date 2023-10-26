import '../style/pagination.css';
function Pagination({page,setpage,lastpage}){



    return  <div id="pagination">
    <div id="prev" onClick={e=>{
        setpage(page=>{
            let x= page-1;
            if( x > 0){
                console.log(x);
               return x
            }
            return page;
        })
    }}  className={page === 1?"disabled":"prev"} >{console.log("page",page)}
        Previous page</div>

    <div id="separator">|</div>

    <div id="next" onClick={e=>{
        let x= page+1;
        if( x <= lastpage ){
            setpage(x);
        };console.log()
    }}>Next Page</div>
</div> 
}

export {
    Pagination
}