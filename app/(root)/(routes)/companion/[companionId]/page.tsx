import prismadb from "@/lib/prisma_db";

import CompanionForm from "./components/companion-form";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CompanionIdPageProps {
    params: {
        companionId: string
    };
};

const CompanionIdPage = async({params}:CompanionIdPageProps) => {

    const { userId } = auth();

    if(!userId) {
        return redirectToSignIn();
    }

    //ToDo Check Subscription
    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId,
            userId,
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