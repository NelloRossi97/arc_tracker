import React from "react";
import {
  Header,
  Group,
  TextInput,
  ActionIcon,
  Title,
  Container,
} from "@mantine/core";
import { IconSearch, IconSun, IconMoonStars } from "@tabler/icons-react";
import ThemeToggle from "./ThemeToggle";

export default function AppHeader() {
  return (
    <Header height={64} p="sm">
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          gap: 12,
        }}
        fluid
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="/favicon.svg"
            alt="ArcTracker"
            style={{ width: 36, height: 36 }}
          />
          <Title order={4} style={{ margin: 0 }}>
            ARCTracker
          </Title>
        </div>

        <div style={{ flex: 1 }} />

        <Group>
          <TextInput
            icon={<IconSearch size={16} />}
            placeholder="Cerca oggetti, quest..."
          />
          <ThemeToggle />
        </Group>
      </Container>
    </Header>
  );
}
