export interface Respostas{
    content: [
        {
            id: number,
            mensagem: string,
            dataCriacao: string,
            nomeAutor: string
        }
    ],
    pageable: {
        sort: {
            sorted: boolean,
            unsorted: boolean,
            empty: boolean
        },
        offset: number,
        pageNumber: number,
        pageSize: number,
        unpaged: number,
        paged: number
    },
    totalPages: number,
    totalElements: number,
    last: boolean,
    size: number,
    number: number,
    numberOfElements: number,
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    },
    first: boolean,
    empty: boolean
}