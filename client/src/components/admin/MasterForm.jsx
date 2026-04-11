import { useState } from "react";

export default function MasterForm({ title, onSubmit }) {

const [name,setName] = useState("");

const handleSubmit = (e)=>{
e.preventDefault();
onSubmit(name);
setName("");
}

return (

<div className="bg-white shadow rounded-lg p-6">

<h2 className="text-xl font-semibold mb-4">
Add {title}
</h2>

<form onSubmit={handleSubmit} className="flex gap-4">

<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder={`Enter ${title}`}
className="border p-2 rounded w-full"
/>

<button
className="bg-blue-600 text-white px-4 py-2 rounded">
Add
</button>

</form>

</div>

)

}