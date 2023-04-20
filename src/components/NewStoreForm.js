import React, {useState} from "react"

function NewStoreForm({stores, setStores}) {
    const [formData, setFormData] = useState({})

    let handleChange = (e) => {
        let name = e.target.id;
        let value = e.target.value;
        setFormData({
        ...formData,
        [name] :value,
        });
    };

    let handleSubmit = () => {
        fetch("http://localhost:8085/stores", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then((newStore) => setStores([newStore, ...stores]))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Store Name" value={formData.name} onChange={handleChange}/>
            <input type="text" id="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
            <input type="number" id="season" placeholder="Season" step="1" value={formData.season} onChange={handleChange}/>
            <input type="number" id="episode" placeholder="Episode" step="1" value={formData.episode} onChange={handleChange}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;