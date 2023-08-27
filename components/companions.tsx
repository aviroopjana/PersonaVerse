import { Companion } from "@prisma/client"
import Image from "next/image";

interface CompanionProps {
    data: (Companion & {
        _count: {
            messages: number,
        }
    })[];
}

export const Companions = ({
    data
}: CompanionProps) => {

    if(data.length === 0) {
        return(
            <div className="pt-10 flex flex-col items-center justify-center space-y-3">
                <div className="relative w-60 h-60">
                    <Image
                        fill
                        className="grayscale"
                        alt="empty"
                        src="/empty.png"
                    />
                </div>
            </div>
        )
    }

    return(
        <div>
            Companions!
        </div>
    )
}