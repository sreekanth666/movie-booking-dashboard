import { Button, Modal, Table, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import React, { FC } from 'react';

interface CitiesPageProps {

}

const CitiesPage: FC<CitiesPageProps> = ({ }) => {
    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        initialValues: {
            name: '',
            description: ''
        },
        validate: {
            name: (value) => value.trim().length > 0 ? null : 'Name is required',
            description: (value) => value.trim().length > 0 ? null : 'Description is required'
        }
    })

    const table = [
        {
            name: 'Mumbai',
            theaters: [
                'PVR Cinemas, Andheri', 'INOX Cinemas, Malad', 'Cinepolis, Andheri'
            ],
            description: 'Mumbai is the capital city of the Indian state of Maharashtra. According to the United Nations, as of 2018, Mumbai is the second-most populous city in the country after Delhi and the seventh-most populous city in the world with a population of roughly 20 million.',
            updatedAt: '2021-09-01'
        },
        {
            name: 'Delhi',
            theaters: [
                'PVR Cinemas, Connaught Place', 'INOX Cinemas, Nehru Place', 'Cinepolis, Saket'
            ],
            description: 'Delhi, officially the National Capital Territory of Delhi, is a city and a union territory of India containing New Delhi, the capital of India. It is situated alongside River Yamuna and bordered by Haryana state on three sides and by Uttar Pradesh state to the east.',
            updatedAt: '2021-09-01'
        },
        {
            name: 'Bangalore',
            theaters: [
                'PVR Cinemas, Koramangala', 'INOX Cinemas, Whitefield', 'Cinepolis, Indiranagar'
            ],
            description: 'Bangalore, officially known as Bengaluru, is the capital of the Indian state of Karnataka. It has a population of over ten million, making it a megacity and the third-most populous city and fifth-most populous urban agglomeration in India.',
            updatedAt: '2021-09-01'
        },
        {
            name: 'Chennai',
            theaters: [
                'PVR Cinemas, Velachery', 'INOX Cinemas, T Nagar', 'Cinepolis, Anna Nagar'
            ],
            description: 'Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost.',
            updatedAt: '2021-09-01'
        },
        {
            name: 'Kolkata',
            theaters: [
                'PVR Cinemas, Salt Lake', 'INOX Cinemas, Park Street', 'Cinepolis, Rajarhat'
            ],
            description: 'Kolkata (formerly Calcutta) is the capital of India’s West Bengal state. Founded as an East India Company trading post, it was India’s capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals.',
            updatedAt: '2021-09-01'
        }
    ]

    const handleSubmit = async () => {
        console.log(form.values)
    }

    return (
        <React.Fragment>
            <div>
                <div className='flex items-center justify-between'>
                    <h3 className='text-2xl font-semibold mb-2'>Total Cities</h3>
                    <Button variant='primary' size='xs' onClick={open}>Add city</Button>
                </div>
                <Table striped highlightOnHover withTableBorder withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>No.</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Theaters</Table.Th>
                            <Table.Th>Description</Table.Th>
                            <Table.Th>Update At</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {
                            table.map((movie, index) => (
                                <Table.Tr key={index}>
                                    <Table.Td>{index + 1}</Table.Td>
                                    <Table.Td>{movie.name}</Table.Td>
                                    <Table.Td>
                                        {
                                            movie.theaters.map((theater, index) => (
                                                <div key={index}>{theater}</div>
                                            ))
                                        }
                                    </Table.Td>
                                    <Table.Td>{movie.description}</Table.Td>
                                    <Table.Td>{movie.updatedAt}</Table.Td>
                                    <Table.Td className='flex items-center gap-2'>
                                        <Button variant='light' size='xs' onClick={open}>Edit</Button>
                                        <Button variant='light' size='xs' color='red'>Delete</Button>
                                    </Table.Td>
                                </Table.Tr>
                            ))
                        }
                    </Table.Tbody>
                </Table>
            </div>

            <Modal opened={opened} onClose={close} title={<p className='text-lg font-semibold'>Edit city details</p>} size={'lg'}>
                <form onSubmit={form.onSubmit(() => { handleSubmit() })}>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className="col-span-12">
                            <TextInput label='City name' placeholder='City name' {...form.getInputProps('name')} />
                        </div>
                        <div className="col-span-12">
                            <Textarea label='Description' placeholder='Description' {...form.getInputProps('description')} />
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-5">
                        <Button variant='primary' type='submit'>Save</Button>
                    </div>
                </form>
            </Modal>
        </React.Fragment>
    );
};

export default CitiesPage;