
// cheerio -> element select , jquery based -> dom change

$(document).ready(function(){

    //element representaion
    $(".grid .row .cell").on("click",function()
    {
        //console.log("cell was clicked");
        let clickedcell=this;
        //let cellidx=$(clickedcell).text();
        let rid=$(clickedcell).attr("rid");
        let cid=$(clickedcell).attr("cid");

        let col=String.fromCharCode(Number(cid)+65);

        let row=Number(rid)+1;

        let address=col+row;
         $("#address").val(address);
        console.log("cell with address",address,"was clicked");

    })


})