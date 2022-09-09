import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { POSTALFIELD, POSTAL } from '../../../redux/reducer/PostalStore'
import { UpdatePostal } from '../../../redux/action/PostalAction'

interface FilterData {

}
const PostalField = (props: any) => {
    const dispatch = useDispatch()
    const [filterData, setFilterData] = useState<FilterData[]>([])
    const postalField = useSelector(POSTALFIELD)
    const postalData = useSelector(POSTAL)
    const checkForFilter = () => {
        const response = postalData.filter((value) => Number(postalField) <= value)
        if(response[0] == postalField){
            const newArr = [
                response[0]
            ]
            setFilterData(newArr)
        } else {
            setFilterData(response)
        }
        
    }

    useEffect(() => checkForFilter(),[postalField])
    return (
        <div className='postal-code'>
            <input type="number" placeholder='Postal Code' value={postalField} onChange={ e => dispatch(UpdatePostal(e.target.value)) }/>

            {
                filterData?.length < 20 && (
                    filterData?.map((v:any,i) => (
                        <div key={i}>{v}</div>
                    ))
                )
                
            }
        </div>
    )
}

export default PostalField;