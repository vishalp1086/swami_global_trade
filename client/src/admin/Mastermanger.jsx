import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"

const MasterManager = () => {

const { type } = useParams()

const [items,setItems] = useState([])
const [name,setName] = useState("")

useEffect(()=>{
fetchItems()
},[type])

const fetchItems = async () => {

const res = await axios.get(`http://localhost:5000/api/master/${type}`)

setItems(res.data.data || [])

}

const handleAdd = async (e) => {

e.preventDefault()

await axios.post((`http://localhost:5000/api/master/${type}`),{ name })

setName("")

fetchItems()

}

const handleDelete = async (id) => {

await axios.delete(`http://localhost:5000/api/master/${type}/${id}`)

fetchItems()

}

return (

<div className="bg-white p-8 rounded-xl shadow-lg">

<h1 className="text-2xl font-bold mb-6 capitalize">
Manage {type}
</h1>

{/* ADD FORM */}

<form
onSubmit={handleAdd}
className="flex gap-3 mb-6"
>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder={`Add ${type}`}
className="border p-2 rounded w-full text-gray-600 border-gray-700"
/>

<button
className="bg-blue-600 text-white px-4 py-2 rounded"
>
Add
</button>

</form>

{/* LIST */}

<table className="w-full border">

<thead>

<tr className="bg-gray-500">

<th className="p-3 border">Name</th>
<th className="p-3 border">Action</th>

</tr>

</thead>

<tbody>

{items.map((item)=>(
<tr key={item._id}>

<td className="p-3 border text-gray-600">
{item.name}
</td>

<td className="p-3 border">

<button
onClick={()=>handleDelete(item._id)}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default MasterManager