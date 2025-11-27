import React from "react";
import {
  Navbar,
  ScrollArea,
  UnstyledButton,
  Group,
  ThemeIcon,
  Text,
} from "@mantine/core";
import { IconListDetails, IconMapPins, IconStar } from "@tabler/icons-react";

const items = [
  { label: "Home", icon: IconListDetails },
  { label: "Quests", icon: IconMapPins },
  { label: "Items", icon: IconStar },
];

export default function Sidebar() {
  return (
    <Navbar width={{ base: 260 }} p="xs">
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {items.map((it) => (
          <UnstyledButton
            key={it.label}
            style={{ width: "100%", marginBottom: 8 }}
          >
            <Group>
              <ThemeIcon radius="md">
                <it.icon />
              </ThemeIcon>
              <Text>{it.label}</Text>
            </Group>
          </UnstyledButton>
        ))}
      </Navbar.Section>
    </Navbar>
  );
}
