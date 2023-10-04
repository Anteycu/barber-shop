export type Barber = {
    id: string,
    name: string,
    services: Service[],
}

type Service = "haircut" | "dyeing" | "highlighting";