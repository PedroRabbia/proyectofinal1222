import './itemList.css';
import { Item } from '../Item/Item';

export const ItemList = ({items}) => {
    return(
        <div className='cards-container'>
            {
                items.map((item) => {
                    return <Item key={item.id} item={item}/>
                })
            }
        </div>
    );
}