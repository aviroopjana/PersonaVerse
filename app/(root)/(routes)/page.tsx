import { Categories } from "@/components/categories";
import { Companions } from "@/components/companions";
import { SearchInput } from "@/components/search-input";
import prismadb from "@/lib/prisma_db";
import {createClient} from "@supabase/supabase-js";

// const supabaseUrl = "https://luivnfiftgbnwdhsdejb.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1aXZuZmlmdGdibndkaHNkZWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MTI2ODIsImV4cCI6MjAwNjk4ODY4Mn0.-hglwGjQMIaJ8dYhm8llrCoXD_UVyJX3ZwfZ_v8-1PA";

// const supabase = createClient(supabaseUrl, supabaseKey);

interface RootPageProps {
    searchParams: {
        categoryId: string;
        name: string;
    }
}

const RootPage = async({
    searchParams
}: RootPageProps) => {

    const data = await prismadb.companion.findMany({
        where: {
            categoryId: searchParams.categoryId,
            // name: {
            //     search: searchParams.name,
            // }
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            _count: {
                select: {
                    messages: true,
                }
            }
        }
    })

    const categories = await prismadb.category.findMany();

    // async function searchFullText(query: string) {
    //     const { data, error } = await supabase.rpc('full_text_search', { query });
    //     if (error) {
    //       console.error(error);
    //       return null;
    //     }
    //     return data;
    //   }

    //   const searchResults = await searchFullText(searchParams.name);

    return (
        <div className="h-full p-4 ml-4 space-y-2" >
            <SearchInput/>
            <Categories data={categories} />    
            <Companions data={data}/>       
        </div>
    );
}
 
export default RootPage;

