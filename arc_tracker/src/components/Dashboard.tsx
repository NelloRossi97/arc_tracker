import React from 'react'
import { SimpleGrid, Text, Card, Badge, Group } from '@mantine/core'
import ItemCard from './ItemCard'


const dummy = new Array(8).fill(0).map((_, i) => ({ id: i + 1, name: `Item ${i + 1}`, rarity: ['Common', 'Rare', 'Epic'][i % 3] }))


export default function Dashboard() {
return (
<div>
<Group position="apart" mb="md">
<Text size="xl" weight={700}>
Dashboard
</Text>
<Badge color="yellow">Live</Badge>
</Group>


<SimpleGrid cols={4} breakpoints={[{ maxWidth: 'md', cols: 2 }, { maxWidth: 'sm', cols: 1 }]}>
{dummy.map((d) => (
<ItemCard key={d.id} name={d.name} rarity={d.rarity} />
))}
</SimpleGrid>
</div>
)