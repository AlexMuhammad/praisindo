import TabFilter from "../components/molecules/Tab"
import MainLayout from "../components/templates/MainLayout"

const Product = () => {
    return (
        <MainLayout as="products">
            <section className="">
                <div className="w-full h-full mx-auto sm:max-w-xl">
                    <TabFilter as="product" />
                </div>
            </section>
        </MainLayout>
    )
}

export default Product