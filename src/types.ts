import { ReactNode } from "react"

export interface Wreath {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  size: number
  color: string[]
  season: string[]
}

export interface Filtering {
style: string;
size: string;
color: string;
priceRange: string;
}

export interface User {
  username: string;
}

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface UserProviderProps {
  children: ReactNode;
}
