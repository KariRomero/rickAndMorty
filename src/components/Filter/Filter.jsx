import { useDispatch, useSelector  } from "react-redux";
import { orderCards, filterCards, reset } from "../../redux/actions";

const Filter = () => {

    const dispatch = useDispatch();

    const handlerOrder = (event)=> {
        event.preventDefault()
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event)=> {
        event.preventDefault()
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>

            <div>
                <select name='order' onChange={handlerOrder} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disable>Order by:</option>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>

                <select name='filter' onChange={handlerFilter} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled='disabeled'>Filter by:</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
                <button onClick={()=>dispatch(reset())}>Reset</button>
            </div>

        </div>
    )
};

export default Filter;