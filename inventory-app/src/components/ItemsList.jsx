import {Container, Row } from 'reactstrap';
import ItemCard from './ItemCard';
import { useState } from 'react';
import ModalForm from './ModalForm';

const ItemsList = () => {
    const list = [
        {
            id:1,
            name: "One Plus Mobile",
            quantity:2,
            imageUrl:"https://image.shutterstock.com/image-photo/bangkok-thailand-oneplus-launch-new-600w-1406728256.jpg"
        },
        {
            id:2,
            name: "Haier-Refrigerator",
            quantity: 5,
            imageUrl:"https://image.shutterstock.com/image-vector/modern-fridge-freezer-refrigerator-silver-600w-1100010164.jpg"
        },
        {
            id:3,
            name: "LG MicroWave Oven",
            quantity: 7,
            imageUrl:"https://image.shutterstock.com/image-photo/microwave-on-kitchen-table-vegetables-600w-1986093803.jpg"
        },
        {
            id:4,
            name: "Samsung Television",
            quantity: 4,
            imageUrl:"https://image.shutterstock.com/image-photo/4k-monitor-isolated-on-white-600w-580917556.jpg"
        },
        {
            id:5,
            name: "hp-laptop",
            quantity:3,
            imageUrl:"https://image.shutterstock.com/z/ stock-photo-poznan-pol-feb-laptop-computer-displaying-logo-of-hp-a-multinational-information-1948302400.jpg"
        },
        {
            id:6,
            name: "Vaccum Cleaner",
            quantity:1,
            imageUrl:"https://image.shutterstock.com/image-photo/wireless-vacuum-cleaner-used-on-600w-1632489802.jpg"
        },
        {
            id:7,
            name: "Coffee Maker",
            quantity:1,
            imageUrl:"https://image.shutterstock.com/image-photo/coffee-blender-boiler-seeds-kitchen-600w-73994902.jpg"
        },
        {
            id:8,
            name: "Washing Machine",
            quantity:6,
            imageUrl:"https://image.shutterstock.com/image-photo/clothes-washing-machine-laundry-room-600w-1412149130.jpg"
        },
    ];
    const [itemsList, setItemsList] = useState(list);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleForm = () => {
        setIsModalOpen(true);
    }

    const addItem = (title, imageUrl,quantity) => {
        setItemsList([...itemsList, {id:itemsList.length+1, name:title, imageUrl:imageUrl, quantity: quantity}]);
        setIsModalOpen(false);
    }

    const deleteItem = (id) => {
        const filteredItems = itemsList.filter((itemId) => itemId.id !== id);
        setItemsList(filteredItems);
    }
    
    const updateItem = (id,title, quantity) => {
        itemsList.map((item) => {
            if(item.id === id){
                item.name = title;
                item.quantity =quantity;
                setItemsList([...itemsList],item);
            }
            return item;
        });
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    return(
        <Container>
            <Row className="text-center">
                {itemsList.map(({id,name, quantity, imageUrl}) => {
                    return <ItemCard 
                                id={id} 
                                name={name} 
                                quantity={quantity} 
                                imageUrl={imageUrl}
                                updateItem={updateItem}
                                onDeleting={deleteItem}
                            />
                })}
            </Row>
            <Row>
                <button onClick={handleForm} className="add-button">Add new item</button>
                {isModalOpen && (
                    <ModalForm onAdding={addItem} onClosingModal={closeModal}/>
                )}
            </Row>
        </Container>
    );
}
export default ItemsList;