import { useState } from "react";

const AddFlowers = () => {
    const [ form, setForm ] = useState({name: "", category: "", price: "", description: ""});
    const [ image, setImage] = useState(null);


    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setForm({
            ...form,
            [fieldName]: fieldValue
        });

    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (const [ key, value ] of Object.entries(form)){
            formData.append(key, value);
        };
        if (image) {
            formData.append("image", image);
        };

        await fetch("http://localhost:4000/api/flowers", { method: "POST", body: formData,});
    };



    
    return ( 
        <div className="container">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>Image</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" required/>
                <label>Name</label>
                <input name="name" value={form.name} onChange={handleChange} required/>

                <div className="row">
                    <div className="category">
                        <label>Category</label>
                        <input name="category" value={form.category} onChange={handleChange} required/>
                    </div>
                    <div className="price">
                        <label>Price</label>
                        <input name="price" value={form.price} onChange={handleChange} required />
                    </div>
                </div>
                <label>Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} required></textarea>
                <button onSubmit={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    );
};


export default AddFlowers;