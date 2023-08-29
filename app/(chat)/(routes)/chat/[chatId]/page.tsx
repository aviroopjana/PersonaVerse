import prismadb from "@/lib/prisma_db";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ChatClient } from "./components/client";

interface chatIdPageParams{
    params : {
        chatId: string;
    }
}

const chatIdPage = async({
    params
}:chatIdPageParams) => {

    const { userId } = auth();

    if(!userId) {
        return redirectToSignIn();
    }

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.chatId,
        },
        include: {
            messages: {
                orderBy: {
                    createdAt: "asc"
                },
                where: {
                    userId,
                }
            },
            _count: {
                select: {
                    messages: true
                }
            }
        }
    });

    if(!companion) {
        return redirect("/");
    }

    return (
        <ChatClient companion={companion} />
    );
};

export default chatIdPage;