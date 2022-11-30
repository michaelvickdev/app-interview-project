import { useEffect, useState } from "react"
import Api from "../services/api"

const RegistryPage = () => {
    const [itemToAdd, setItemtoAdd] = useState({
        name: "",
        price: null,
    })
    const [items, setItems] = useState([])

    useEffect(() => {
        Api.registryItem.query()
            .then((newItems) => setItems(newItems))
    }, [])

    const handleItemChange = (e, index, item) => {
        const newItem = {
            ...item,
            [e.currentTarget.name]: e.currentTarget.value
        }

        items[index] = newItem
        setItems([...items])
    }

    const handleItemToAddChange = (e) => {
        setItemtoAdd({
            ...itemToAdd,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleAddItemSubmit = async (e) => {
        e.preventDefault()

        try {
            const result = await Api.registryItem.create(itemToAdd)
            setItems([...items, result])
        } catch (err) {
            console.error(err)
        }
    }

    const handleDeleteItem = async (item) => {
        try {
            const result = await Api.registryItem.delete(item)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="container">
            <h2>My Registry</h2>
            {items.length === 0 && (
                <p style={{ color: "#6c6c6c" }}>Add your first registry item below</p>
            )}
            <form className="pure-form">
                {items.length > 0 && (
                    <div className="pure-g">
                        <div className="pure-u-5-12">
                            <label>Name</label>
                        </div>
                        <div className="pure-u-5-12">
                            <label>Price</label>
                        </div>
                    </div>
                )}
                {items.map((item, index) => (
                    <div key={item.id} className="pure-g">
                        <div className="pure-u-5-12">
                            <input type="text" name="name" value={item.name}
                                className="pure-u-23-24"
                                onChange={(e) => handleItemChange(e, index, item)}
                            />
                        </div>
                        <div className="pure-u-5-12">
                            <input type="text" name="price" value={item.price}
                                className="pure-u-23-24"
                                onChange={(e) => handleItemChange(e, index, item)}
                            />
                        </div>
                        <div className="pure-u-2-12">
                            <button type="button" className="pure-button" onClick={() => handleDeleteItem(item)}>Delete</button>
                        </div>
                    </div>
                ))}
            </form>
            <div className="divider"></div>
            <div style={{
                textAlign: "left",
                width: "100%",
                maxWidth: 400
            }}>
                <form className="pure-form" onSubmit={handleAddItemSubmit}>
                    <fieldset>
                        <h3>Add Item</h3>
                        <label>Name</label>
                        <input type="text" name="name" onChange={handleItemToAddChange} />
                        <label>Price</label>
                        <input type="text" name="price" onChange={handleItemToAddChange} />
                        <button type="submit" className="pure-button pure-button-primary">Save</button>
                    </fieldset>
                </form>
            </div>
        </div >
    )
}

export default RegistryPage