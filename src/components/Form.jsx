// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

// export default function EditItem() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const router = useRouter();
//   const { id } = router.query;

//   useEffect(() => {
//     if (id) {
//       axios
//         .get(`http://localhost:5000/items/${id}`)
//         .then((response) => {
//           setName(response.data.name);
//           setDescription(response.data.description);
//         })
//         .catch((error) => {
//           console.error("There was an error fetching the item!", error);
//         });
//     }
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`http://localhost:5000/items/${id}`, { name, description })
//       .then(() => {
//         router.push("/");
//       })
//       .catch((error) => {
//         console.error("There was an error updating the item!", error);
//       });
//   };

//   return (
//     <div>
//       <h1>Edit Item</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Item" required />
//         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Deskripsi Item" required />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
  }

  const quantityNum = [...Array(15)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {quantityNum}
        </select>
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button>Tambah</button>
    </form>
  );
}
