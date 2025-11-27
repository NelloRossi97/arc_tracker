export interface Item {
  id: number;
  name: string;
  rarity: "Common" | "Rare" | "Epic";
  description?: string;
}
