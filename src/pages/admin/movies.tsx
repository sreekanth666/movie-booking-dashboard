import { Button, Table, Modal, TextInput, Select, MultiSelect, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import React, { FC } from 'react';

interface MoviesPageProps {

}

const MoviesPage: FC<MoviesPageProps> = ({ }) => {
    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        initialValues: {
            name: '',
            totalTheaters: [],
            languages: [],
            description: '',
            subtitle: 'false'
        },
        validate: {
            name: (value) => value.trim().length > 0 ? null : 'Name is required',
            totalTheaters: (value) => value.length > 0 ? null : 'Total theaters is required',
            languages: (value) => value.length > 0 ? null : 'Languages is required',
            description: (value) => value.trim().length > 0 ? null : 'Description is required',
            subtitle: (value) => (value === 'true' || value === 'false') ? null : 'Subtitle is required'
        }
    })

    const table = [
        {
            name: 'Deadpool and Wolverine',
            totalTheaters: 10,
            languages: ['English', 'Hindi'],
            description: 'Deadpool and Wolverine is a 2021 American superhero film based on the Marvel Comics characters Deadpool and Wolverine. It is the sequel to Deadpool 2 (2018) and Logan (2017)',
            subtitle: true,
            updatedAt: '2021-09-01'
        },
        {
            name: 'Red Notice',
            totalTheaters: 10,
            languages: ['English', 'Hindi'],
            description: 'Red Notice is a 2021 American action-comedy film written and directed by Rawson Marshall Thurber. It stars Dwayne Johnson, Gal Gadot, and Ryan Reynolds.',
            subtitle: true,
            updatedAt: '2021-09-01'
        },
        {
            name: 'The Eternals',
            totalTheaters: 11,
            languages: ['English', 'Hindi'],
            description: 'The Eternals is a 2021 American superhero film based on the Marvel Comics',
            subtitle: true,
            updatedAt: '2021-09-01'
        },
        {
            name: 'The Batman',
            totalTheaters: 15,
            languages: ['English', 'Hindi'],
            description: 'The Batman is a 2022 American superhero film based on the DC Comics character Batman. Produced by DC Films, 6th & Idaho, and Dylan Clark Productions, and set for distribution by Warner Bros. Pictures, it is a reboot of the Batman film franchise.',
            subtitle: false,
            updatedAt: '2021-09-01'
        },
        {
            name: 'The Flash',
            totalTheaters: 9,
            languages: ['English', 'Hindi'],
            description: 'The Flash is an upcoming American superhero film based on the DC Comics character of the same name. Produced by DC Films, The Disco Factory, and Double Dream, and set for distribution by Warner Bros. Pictures, it is intended to be the twelfth film in the DC Extended Universe (DCEU).',
            subtitle: true,
            updatedAt: '2021-09-01'
        },
        {
            name: 'Avengers: Endgame',
            totalTheaters: 12,
            languages: ['English', 'Hindi'],
            description: 'Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU).',
            subtitle: false,
            updatedAt: '2021-09-01'
        }
    ]

    const handleSubmit = async () => {
        console.log(form.values)
    }

    const subtitles = [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
    ]

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
                            <Table.Th>Total Theaters</Table.Th>
                            <Table.Th>Languages</Table.Th>
                            <Table.Th>Description</Table.Th>
                            <Table.Th>Subtitle</Table.Th>
                            <Table.Th>Update At</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {
                            table.map((movies, index) => (
                                <Table.Tr key={index}>
                                    <Table.Td>{index + 1}</Table.Td>
                                    <Table.Td>{movies.name}</Table.Td>
                                    <Table.Td>{movies.totalTheaters}</Table.Td>
                                    <Table.Td>
                                        {
                                            movies.languages.map((movie, index) => (
                                                <div key={index}>{movie}</div>
                                            ))
                                        }
                                    </Table.Td>
                                    <Table.Td>{movies.description ? 'Yes' : 'No'}</Table.Td>
                                    <Table.Td>{movies.subtitle ? 'Yes' : 'No'}</Table.Td>
                                    <Table.Td>{movies.updatedAt}</Table.Td>
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

            <Modal opened={opened} onClose={close} title={<p className='text-lg font-semibold'>Edit movie details</p>} size={'lg'}>
                <form onSubmit={form.onSubmit(() => { handleSubmit() })}>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className="col-span-12 md:col-span-6">
                            <TextInput label='Movie name' placeholder='Theater name' {...form.getInputProps('name')} />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <MultiSelect label='Select theaters' placeholder='Select theaters' {...form.getInputProps('totalTheaters')} />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <MultiSelect label='Select Languages' placeholder='Select languages' {...form.getInputProps('languages')} />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Select label='Subtitle available' placeholder='Select value' data={subtitles} {...form.getInputProps('subtitle')} />
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

export default MoviesPage;