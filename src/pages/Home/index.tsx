import { useEffect, useState } from "react"

import { MainDiv } from "../../components/MainDiv"

import { api } from "../../services/api"

export interface ProductProps {
    id: number
    title: string
    description: string
    price: number
    cover: string
}

export function Home() {
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        async function fetchApiData() {
            const response = await api.get('/products');
            setProducts(response.data)
        }
        fetchApiData();
    }, [])

    return (
        <main>
            <MainDiv>
                {products.map((product) => (
                    <section key={product.id} className="">
                        <img src={product.cover} 
                            alt={product.title} 
                            className="max-h-100"
                            />
                        <h1>{product.title}</h1>
                        <span>{product.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</span>
                    </section>
                ))}
            </MainDiv>
        </main>
    )
}