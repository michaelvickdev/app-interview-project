import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../components/Input"
import Api from "../services/api"

const RegistryPage = () => {
    const [items, setItems] = useState([])

    const getData = () => {
        Api.registryItem.query()
        .then((newItems) => setItems(newItems))
    }
    
    useEffect(() => {
        getData()
    }, [])

    const handleItemChange = (e, index, item) => {
        const newItem = {
            ...item,
            [e.currentTarget.name]: e.currentTarget.value
        }

        items[index] = newItem
        setItems([...items])
    }

    const { control, handleSubmit, setError, reset } = useForm({
        defaultValues: {
            name: "",
            price: ""
        }
    })

    const handleAddItemSubmit = async (values, e,props) => {
        try {
            const result = await Api.registryItem.create(values)
            setItems([...items, result])
            reset()
        } catch (err) {
            const message = err?.response?.data?.message || "Internal server error"
            setError("price", { message })
        }
    }

    const handleDelete = (item) => {
        if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
            Api.registryItem.delete(item.id)
            .then(res => {
                getData()
            })
        }

    }

    return (
        <div className="container">
            <h2>My Registry</h2>
            {items.length === 0 && (
                <p style={{ color: "#6c6c6c" }}>Add your first registry item below</p>
            )}
            <form className="pure-form">
                {items.map((item, index) => (
                    <div key={item.id} className="registry-item">
                        <div className="registry-item__input">
                            {index === 0 && <label>Name</label>}
                            <input type="text" name="name" value={item.name}
                                onChange={(e) => handleItemChange(e, index, item)}
                            />
                        </div>
                        <div className="registry-item__input">
                            {index === 0 && <label>Price</label>}
                            <input type="text" name="price" value={item.price}
                                onChange={(e) => handleItemChange(e, index, item)}
                            />
                        </div>
                        <div style={{ marginTop: index === 0 ? "0px" : "-16px" }}>
                            <button onClick={() => handleDelete(item)} type="button" className="registry-item__delete">Delete</button>
                        </div>
                    </div>
                ))}
            </form>
            <div className="divider"></div>
            <div style={{
                maxWidth: 400
            }}>
                <form className="pure-form" onSubmit={handleSubmit(handleAddItemSubmit)}>
                    <fieldset>
                        <h3>Add Item</h3>
                        <Input
                            type="text"
                            label="Name"
                            name="name"
                            control={control}
                            required
                        />
                        <Input
                            type="number"
                            label="Price"
                            name="price"
                            control={control}
                            required
                            step=".01"
                        />
                        <button type="submit" className="pure-button pure-button-primary">Save</button>
                    </fieldset>
                </form>
            </div>
        </div >
    )
}

export default RegistryPage