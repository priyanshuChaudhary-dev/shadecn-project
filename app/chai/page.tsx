import { Button } from "@/components/ui/button"

function ChaiPage() {
    return (
        <div className="h-100 flex justify-center m-10 items-center flex-col">
            <h1>Chai aur Page</h1>
            <button className="bg-amber-500 px-2 py-1 rounded-md hover:bg-amber-600 text-black ">Button</button>
            <Button variant={"secondary"}>ShadeCn</Button>
        </div>
    )
}

export default ChaiPage