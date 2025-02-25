import { useState } from 'react'

function ItensForm(addItens) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !category || !price || !description || !image) return;
        addItens(name, category, price,description, image);
        setName("");
        setCategory("");
        setPrice("");
        setDescription("");
        setImage("");
        
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
      
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result); // Salva a URL da imagem no estado
        };
        reader.readAsDataURL(file);
      };
      
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='Nome'
        value={name}
        onChange={(e) => setName(e.target.value)}
         />
         <input 
        type="text"
        placeholder='Categoria'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
         />
         <input 
        type="number"
        placeholder='Preço'
        value={price}
        min="0"
        step="0.01"
        onChange={(e) => setPrice(e.target.value)}
         />
         <input 
        type="text"
        placeholder='Descrição'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
         />
         <input 
        type="file"
        accept='image/*'
        value={image}
        onChange={handleImageUpload}
        className='input-img'
         />
         
         <button type='submit' onClick={addItens}>Adicionar</button>
    </form>
  )
}

export default ItensForm