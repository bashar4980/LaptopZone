import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { UserContext } from '../../../Context/AuthProvider';
// import AddCard from '../../Home/AddveriseItem/AddCard';
import Loading from '../../Shared/loading/Loading';
import AddtoCard from './AddtoCard';

const Myorder = () => {
    const {user} = useContext(UserContext);
    const email = user?.email;
    const userInfo ={
        email
    }
     const {data:bookingData , isLoading} = useQuery({
        queryKey:[],
        queryFn:async()=>{
            const res = await fetch(`https://laptopzone.vercel.app/buyer/booking?email=${user?.email}`,{
                headers:{'authorization': `bearer ${localStorage.getItem('Access_token')}`,
               "Content-type":"application/json"
           },
           body:JSON.stringify(userInfo)
            });
            const data = await res.json();
            return data;
        }
     })
     if(isLoading){
        return <Loading></Loading>
     }
    return (
        <div>
           
           <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
	<h2 className="text-xl font-semibold">Your cart</h2>
	<ul className="flex flex-col divide-y divide-gray-700">
		
    {
            bookingData.map(booked =>{
                return(
                    <AddtoCard key={booked._id} booked={booked}></AddtoCard>
                )
            })
           }
	</ul>
	
	
</div>
        </div>
    );
};

export default Myorder;