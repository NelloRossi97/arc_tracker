import React from "react";
import { Card, Text, Badge, Group } from "@mantine/core";
import { motion } from "framer-motion";

export default function ItemCard({
  name,
  rarity,
}: {
  name: string;
  rarity: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" mb="sm">
          <Text fw={600}>{name}</Text>
          <Badge
            color={
              rarity === "Epic" ? "red" : rarity === "Rare" ? "blue" : "gray"
            }
          >
            {rarity}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          Breve descrizione dell'oggetto, drop rate e link alla quest.
        </Text>
      </Card>
    </motion.div>
  );
}
