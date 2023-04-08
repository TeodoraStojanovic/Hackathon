import Cart from "./Cart";

function MakeGarden({veg,kriterijum,add}){

    return(
        <div className="row-garden">
        {kriterijum==""
        ?
        veg.map((f)=> <div  key={f.id} className="col-sm-3"><Cart add={add} key={f.id} f={f} mod={1}></Cart><br /></div>)
        :
        <>
        {veg
        .filter((f)=>f.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((f)=> <div  key={f.id} className="col-sm-3"><Cart add={add}  key={f.id} f={f} mod={1}></Cart><br /></div>)}

        </>
        }
           
      </div>


    );

}
export default MakeGarden;