import { useState, useEffect } from "react";
import { BsFillFilePlusFill, BsFileMinusFill } from 'react-icons/bs'
import { api } from "../../services/api";
import { type ProductProps } from "../Home";
import { MainDiv } from "../../components/MainDiv";

export function Cart() {
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        async function fetchProduct() {
            const response = await api.get('/products');
            setProducts(response.data);
            console.log(response.data)
        }

        fetchProduct()
    }, [])

    return (
        <main className="py-8">
            <h1 className="text-2xl text-center mb-6">Meu carrinho</h1>
            <MainDiv>
                <section key={products[1]?.id} className="w-full flex items-center justify-between border-b border-black">
                    <img src={products[1]?.cover} 
                        alt={products[1]?.title} 
                        className="max-w-35"
                        />
                    <h1>{products[1]?.title}</h1>
                    <span>Preço: {products[1]?.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</span>

                    <div className="flex items-center gap-2">
                        <button className="cursor-pointer" title="Remover quantidade">
                            <BsFileMinusFill size={25}></BsFileMinusFill>
                        </button>
                        <span>1</span>
                        <button className="cursor-pointer" title="Adicionar quantidade">
                            <BsFillFilePlusFill size={25}></BsFillFilePlusFill>
                        </button>
                    </div>

                    <span>SubTotal: {products[1]?.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</span>
                </section>
                <h2 className="text-xl font-semibold mt-4">Total: {products[1]?.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</h2>
            </MainDiv>
        </main>
    )
}