import Cart from "./Cart";

function Garden({veg,kriterijum,remove}){

    return(
        <div className="row">
        {kriterijum==""
        ?
        veg.map((f)=> <div  key={f.id} className="col-sm-3"><Cart  key={f.id} f={f} mod={2} remove={remove}></Cart><br /></div>)
        :
        <>
        {veg
        .filter((f)=>f.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((f)=> <div  key={f.id} className="col-sm-3"><Cart r key={f.id} f={f} mod={2} remove={remove}></Cart><br /></div>)}

        </>
        }
           
      </div>


    );

}
export default Garden;