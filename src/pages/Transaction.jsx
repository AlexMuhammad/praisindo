import TabFilter from "../components/molecules/Tab"
import MainLayout from "../components/templates/MainLayout"

const Transaction = () => {
    return (
        <MainLayout as="transactions">
            <section className="">
                <div className="w-full h-full mx-auto sm:max-w-xl">
                    <TabFilter as="transactions" />
                </div>
            </section>
        </MainLayout>
    )
}

export default Transaction