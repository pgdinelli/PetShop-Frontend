import { useEffect, useState } from "react"
import { BsCartPlus } from 'react-icons/bs'

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
        <main className="bg-amber-300/70 py-8">
            <MainDiv>
                <h1 className="text-2xl text-center mb-6">Produtos em alta</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <section key={product.id} className="">
                            <img src={product.cover}
                                alt={product.title}
                                className="w-full rounded-lg max-h-100 mb-2 hover:scale-105 transition-transform duration-300"
                                />
                            <h1>{product.title}</h1>
                            <div className="flex items-center gap-2">
                                <span>{product.price.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}</span>
                                <button className="hover:cursor-pointer"><BsCartPlus size={24} /></button>
                            </div>
                        </section>
                    ))}
                </div>
            </MainDiv>
        </main>
    )
}