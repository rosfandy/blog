import Breadcrumb from "@/components/Breadcrumb"
import ServerProjects from "./server"
import ClientProjects from "./client"

export default function Page() {
    const total = ServerProjects()
    console.log(total)
    return (
        <div className="min-h-screen">
            <ClientProjects />
        </div>
    )
}