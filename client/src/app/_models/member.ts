import { Photo } from "./Photo"

export interface Member {
    id: number
    username: string
    photoUrl: string
    age: number
    knownAs: string
    created: string
    lastActive: Date
    gender: Date
    introduction: string
    lookingFor: string
    interests: string
    country: string
    photos: Photo[]
  }
  

