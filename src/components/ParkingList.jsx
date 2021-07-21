import React from 'react'
import { useSelector } from 'react-redux';

const ParkingList = () => {
    
    const { parkingList, searching } = useSelector(state => 
        {
            return {
              parkingList: state.parkingList,
              searching: state.searching
            };
        });
    
    return (
        <>
            {
                searching
                ?
                <p>Loading...</p>
                :
                parkingList
                ?
                <ul>
                    {
                        parkingList?.businesses?.map( parking => {
                            return(
                                <li key={parking.id}> { parking.name } </li> 
                                )
                            })
                        }
                </ul>
                :
                false
            }
        </>
    )
}


export default ParkingList
