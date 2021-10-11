import React, {useEffect} from "react";
import styles from './item_list.module.css';
import Item from "../item/item";
import { useDispatch, useSelector } from 'react-redux';
import { getItems as itemList } from '../../redux/action/itemAction';

const ContainerList = () => {
    const dispatch = useDispatch();
    const getItems = useSelector(state => state.getItems);
    const { items, error } = getItems;

    useEffect(() => {
        dispatch(itemList());
      }, [dispatch]);

    return (
      <div className={styles.item}>
        {error ? (
          <h1>{error}</h1>
        ) : (
          items.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              id={item.id}
              img={item.img}
            />
          ))
        )}
      </div>
    );
}
export default ContainerList;