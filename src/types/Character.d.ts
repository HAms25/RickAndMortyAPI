interface Characters {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
}

interface Origin {
    name: string
    url: string
}

interface Location {
    name: string
    url: string
}