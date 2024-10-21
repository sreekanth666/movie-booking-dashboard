import { Button } from '@mantine/core';
import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface SlotPageProps {

}

const SlotPage: FC<SlotPageProps> = ({ }) => {
    const [date, setDate] = React.useState('')
    const [theater, setTheater] = React.useState('')
    const [slot, setSlot] = React.useState('')

    const id = useParams()?.id
    const navigate = useNavigate()

    const theaters = [
        {
            name: 'PVR',
            id: '123',
            description: 'Beverages, Snacks, Recliner Seats',
            slots: [
                {
                    id: '123',
                    time: '10:00 AM',
                    description: 'Dolby 5.1'
                },
                {
                    id: '124',
                    time: '1:00 PM',
                    description: 'Dolby 5.1'
                },
                {
                    id: '125',
                    time: '4:00 PM'
                },
                {
                    id: '126',
                    time: '7:00 PM'
                },
                {
                    id: '127',
                    time: '10:00 PM'
                },
            ]
        },
        {
            name: 'PVR',
            id: '123',
            description: 'Beverages, Snacks, Recliner Seats',
            slots: [
                {
                    id: '123',
                    time: '10:00 AM',
                    description: 'Dolby 5.1'
                },
                {
                    id: '124',
                    time: '1:00 PM',
                    description: 'Dolby 5.1'
                },
                {
                    id: '125',
                    time: '4:00 PM',
                    description: 'Dolby 5.1'
                },
                {
                    id: '126',
                    time: '7:00 PM'
                },
                {
                    id: '127',
                    time: '10:00 PM'
                },
            ]
        },
    ]

    const dates = [
        {
            id: '123',
            day: 'Mon',
            date: '22 July'
        },
        {
            id: '124',
            day: 'Tue',
            date: '23 July'
        },
        {
            id: '125',
            day: 'Wed',
            date: '24 July'
        }
    ]

    return (
        <React.Fragment>
            <div className='flex flex-col items-center mt-5'>
                <div className='container'>
                    <div className="mx-auto p-6 bg-white rounded-3xl">
                        <p className='text-2xl font-semibold'>Title</p>
                        <p className='text-gray-600'>Language</p>
                        <div className='flex my-3 gap-3'>
                            {
                                dates.map(date => (
                                    <div className='bg-teal-100 p-3 rounded-lg font-semibold text-teal-500 text-center leading-tight text-sm cursor-pointer' onClick={() => setDate(date.id)}>
                                        <p>{date.day}</p>
                                        <p>{date.date}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='flex flex-col gap-3'>
                            {
                                theaters.map(theater => (
                                    <div key={theater.id} className='p-3 rounded-lg grid grid-cols-12' onClick={() => setTheater(theater.id)}>
                                        <div className='text-sm col-span-4 flex flex-col justify-center'>
                                            <p className='font-semibold'>{theater.name}</p>
                                            <p className='text-gray-500'>{theater.description}</p>
                                        </div>
                                        <div className='grid grid-cols-6 text-xs text-center gap-3 col-span-6'>
                                            {
                                                theater.slots.map(slot => (
                                                    <div key={slot.id} className='bg-teal-100 text-teal-500 p-3 rounded-lg flex flex-col items-center justify-center' onClick={() => setSlot(slot.id)}>
                                                        <p className='font-semibold'>{slot.time}</p>
                                                        <p className='text-teal-500'>{slot.description}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {
                            date && theater && slot && (
                                <Button className='mt-3' w={200} color='#0d9488' onClick={() => navigate(`/seat/${date}/${theater}/${slot}`)}>Proceed</Button>
                            )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SlotPage;