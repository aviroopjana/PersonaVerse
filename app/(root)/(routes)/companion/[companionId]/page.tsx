import prismadb from "@/lib/prisma_db";

import CompanionForm from "./components/companion-form";

interface CompanionIdPageProps {
    params: {
        companionId: string
    };
};

const CompanionIdPage = async({params}:CompanionIdPageProps) => {

    //ToDo Check Subscription
    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId,
        }
    });

    const categories = await prismadb.category.findMany();

    return (
        <CompanionForm
            initialData={companion}
            categories={categories}
        />
    )
}

export default CompanionIdPage