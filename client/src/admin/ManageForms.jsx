import { useEffect, useState } from "react";
import axios from "axios";

const ManageForms = () => {

const [forms,setForms] = useState([])

useEffect(()=>{

fetchForms()

},[])

const fetchForms = async ()=>{

try{

const res = await axios.get("/api/master/forms")

setForms(res.data.data || [])

}catch(err){

console.log(err)

}

}

return(

<div className="bg-white p-6 rounded-lg">

<h2 className="text-xl font-bold mb-4">
Forms
</h2>

<ul>

{forms.map((f)=>(
<li key={f._id} className="border-b py-2">
{f.name}
</li>
))}

</ul>

</div>

)

}

export default ManageForms